#!/usr/bin/env python3
"""
Quiz Zone Category Update Tool
Automatically detects new categories and updates categories.js file
"""

import os
import re
import json
import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext
from pathlib import Path
import subprocess
import sys

class CategoryUpdateTool:
    def __init__(self, root):
        self.root = root
        self.root.title("Quiz Zone - Category Update Tool")
        self.root.geometry("800x600")
        self.root.resizable(True, True)
        
        # Set the working directory to the script location
        self.script_dir = Path(__file__).parent.absolute()
        os.chdir(self.script_dir)
        
        # Paths
        self.categories_dir = self.script_dir / "categories"
        self.categories_js_path = self.script_dir / "js" / "categories.js"
        
        # Data
        self.existing_categories = []
        self.new_categories = []
        self.category_forms = {}
        
        self.setup_ui()
        self.scan_categories()
    
    def setup_ui(self):
        """Setup the user interface"""
        # Main frame
        main_frame = ttk.Frame(self.root, padding="10")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Configure grid weights
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(1, weight=1)
        
        # Title
        title_label = ttk.Label(main_frame, text="Quiz Zone Category Manager", 
                               font=("Arial", 16, "bold"))
        title_label.grid(row=0, column=0, columnspan=2, pady=(0, 20))
        
        # Status frame
        status_frame = ttk.LabelFrame(main_frame, text="Status", padding="10")
        status_frame.grid(row=1, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=(0, 10))
        status_frame.columnconfigure(1, weight=1)
        
        self.status_text = scrolledtext.ScrolledText(status_frame, height=6, width=70)
        self.status_text.grid(row=0, column=0, columnspan=2, sticky=(tk.W, tk.E))
        
        # Buttons frame
        button_frame = ttk.Frame(main_frame)
        button_frame.grid(row=2, column=0, columnspan=2, pady=10)
        
        self.scan_btn = ttk.Button(button_frame, text="🔍 Scan Categories", 
                                  command=self.scan_categories)
        self.scan_btn.pack(side=tk.LEFT, padx=(0, 10))
        
        self.update_btn = ttk.Button(button_frame, text="💾 Update Categories.js", 
                                    command=self.update_categories_js, state=tk.DISABLED)
        self.update_btn.pack(side=tk.LEFT, padx=(0, 10))
        
        self.preview_btn = ttk.Button(button_frame, text="👁 Preview Changes", 
                                     command=self.preview_changes, state=tk.DISABLED)
        self.preview_btn.pack(side=tk.LEFT)
        
        # Categories frame
        self.categories_frame = ttk.LabelFrame(main_frame, text="New Categories Found", 
                                              padding="10")
        self.categories_frame.grid(row=3, column=0, columnspan=2, sticky=(tk.W, tk.E, tk.N, tk.S), 
                                  pady=(10, 0))
        main_frame.rowconfigure(3, weight=1)
        
        # Make categories frame scrollable
        self.setup_scrollable_frame()
    
    def setup_scrollable_frame(self):
        """Setup scrollable frame for categories"""
        # Create canvas and scrollbar
        self.canvas = tk.Canvas(self.categories_frame, bg="white")
        self.scrollbar = ttk.Scrollbar(self.categories_frame, orient="vertical", 
                                      command=self.canvas.yview)
        self.scrollable_frame = ttk.Frame(self.canvas)
        
        self.scrollable_frame.bind(
            "<Configure>",
            lambda e: self.canvas.configure(scrollregion=self.canvas.bbox("all"))
        )
        
        self.canvas.create_window((0, 0), window=self.scrollable_frame, anchor="nw")
        self.canvas.configure(yscrollcommand=self.scrollbar.set)
        
        self.canvas.pack(side="left", fill="both", expand=True)
        self.scrollbar.pack(side="right", fill="y")
        
        # Bind mousewheel to canvas
        self.canvas.bind("<MouseWheel>", self._on_mousewheel)
    
    def _on_mousewheel(self, event):
        """Handle mouse wheel scrolling"""
        self.canvas.yview_scroll(int(-1*(event.delta/120)), "units")
    
    def log(self, message):
        """Add message to status log"""
        self.status_text.insert(tk.END, f"{message}\n")
        self.status_text.see(tk.END)
        self.root.update()
    
    def scan_categories(self):
        """Scan for existing and new categories"""
        self.log("🔍 Scanning categories...")
        
        try:
            # Load existing categories
            self.existing_categories = self.load_existing_categories()
            self.log(f"✓ Found {len(self.existing_categories)} existing categories")
            
            # Scan for new categories
            self.new_categories = self.find_new_categories()
            self.log(f"✓ Found {len(self.new_categories)} new categories")
            
            if self.new_categories:
                self.log(f"New categories: {', '.join(self.new_categories)}")
                self.create_category_forms()
                self.update_btn.config(state=tk.NORMAL)
                self.preview_btn.config(state=tk.NORMAL)
            else:
                self.log("ℹ No new categories found")
                self.clear_category_forms()
                self.update_btn.config(state=tk.DISABLED)
                self.preview_btn.config(state=tk.DISABLED)
                
        except Exception as e:
            self.log(f"❌ Error scanning categories: {e}")
            messagebox.showerror("Error", f"Failed to scan categories:\n{e}")
    
    def load_existing_categories(self):
        """Load existing categories from categories.js"""
        if not self.categories_js_path.exists():
            return []
        
        try:
            with open(self.categories_js_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract category IDs using regex
            pattern = r'id:\s*[\'"`]([^\'"`]+)[\'"`]'
            matches = re.findall(pattern, content)
            return matches
            
        except Exception as e:
            self.log(f"⚠ Error reading categories.js: {e}")
            return []
    
    def find_new_categories(self):
        """Find new category folders that aren't in categories.js"""
        if not self.categories_dir.exists():
            return []
        
        # Get all directories in categories folder
        all_dirs = [d.name for d in self.categories_dir.iterdir() if d.is_dir()]
        
        # Filter out existing categories
        new_dirs = [d for d in all_dirs if d not in self.existing_categories]
        
        return new_dirs
    
    def count_quiz_files(self, category_id):
        """Count .js files in a category folder"""
        category_path = self.categories_dir / category_id
        if not category_path.exists():
            return 0
        
        js_files = list(category_path.glob("*.js"))
        return len(js_files)
    def count_actual_questions(self, category_id):
        """Count actual question objects in all .js files in a category folder"""
        category_path = self.categories_dir / category_id
        if not category_path.exists():
            return 0
        
        total_questions = 0
        js_files = list(category_path.glob("*.js"))
        
        for js_file in js_files:
            try:
                with open(js_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Look for export default array pattern
                export_match = re.search(r'export\s+default\s*\[', content)
                if not export_match:
                    # Fallback to counting the file as 1 question
                    total_questions += 1
                    continue
                
                # Find the array content - use the last ] in the file
                start_idx = export_match.end() - 1  # Include the opening bracket
                last_bracket = content.rfind(']')
                
                if last_bracket == -1 or last_bracket <= start_idx:
                    # Fallback to counting the file as 1 question
                    total_questions += 1
                    continue
                
                # Extract array content
                array_content = content[start_idx+1:last_bracket]
                
                # Count top-level objects by counting opening braces
                brace_count = 0
                in_string = False
                escape_next = False
                question_count = 0
                
                for char in array_content:
                    if escape_next:
                        escape_next = False
                        continue
                    
                    if char == '\\':
                        escape_next = True
                        continue
                    
                    if char in ['"', "'"]:
                        in_string = not in_string
                        continue
                    
                    if not in_string:
                        if char == '{':
                            if brace_count == 0:
                                question_count += 1
                            brace_count += 1
                        elif char == '}':
                            brace_count -= 1
                
                total_questions += max(question_count, 1)  # At least 1 question per file
                        
            except Exception as e:
                self.log(f"⚠ Warning: Could not count questions in {js_file.name}: {e}")
                # Fallback to counting the file as 1 question
                total_questions += 1
        
        return total_questions
    
    def clear_category_forms(self):
        """Clear all category forms"""
        for widget in self.scrollable_frame.winfo_children():
            widget.destroy()
        self.category_forms = {}
    
    def create_category_forms(self):
        """Create forms for new categories"""
        self.clear_category_forms()
        
        if not self.new_categories:
            no_cats_label = ttk.Label(self.scrollable_frame, 
                                     text="No new categories found", 
                                     font=("Arial", 10, "italic"))
            no_cats_label.pack(pady=20)
            return
        
        for i, category_id in enumerate(self.new_categories):
            self.create_category_form(category_id, i)
    
    def create_category_form(self, category_id, index):
        """Create form for a single category"""
        # Main frame for this category
        cat_frame = ttk.LabelFrame(self.scrollable_frame, 
                                  text=f"Category: {category_id}", 
                                  padding="15")
        cat_frame.pack(fill="x", padx=5, pady=5)
        
        # Quiz count (auto-calculated by counting actual question objects)
        quiz_count = self.count_actual_questions(category_id)
        
        # Create form fields
        fields = {}
        
        # Row 0: Category ID (read-only)
        ttk.Label(cat_frame, text="Category ID:").grid(row=0, column=0, sticky="w", padx=(0, 10))
        id_var = tk.StringVar(value=category_id)
        id_entry = ttk.Entry(cat_frame, textvariable=id_var, state="readonly", width=20)
        id_entry.grid(row=0, column=1, sticky="w", padx=(0, 20))
        fields['id'] = id_var
        
        # Quiz count (read-only)
        ttk.Label(cat_frame, text="Quiz Count:").grid(row=0, column=2, sticky="w", padx=(0, 10))
        count_var = tk.StringVar(value=str(quiz_count))
        count_entry = ttk.Entry(cat_frame, textvariable=count_var, state="readonly", width=10)
        count_entry.grid(row=0, column=3, sticky="w")
        fields['quizCount'] = count_var
        
        # Row 1: Category Name
        ttk.Label(cat_frame, text="Display Name:").grid(row=1, column=0, sticky="w", padx=(0, 10), pady=(10, 0))
        name_var = tk.StringVar(value=self.generate_display_name(category_id))
        name_entry = ttk.Entry(cat_frame, textvariable=name_var, width=40)
        name_entry.grid(row=1, column=1, columnspan=3, sticky="ew", padx=(0, 10), pady=(10, 0))
        fields['name'] = name_var
        
        # Row 2: Semester
        ttk.Label(cat_frame, text="Semester:").grid(row=2, column=0, sticky="w", padx=(0, 10), pady=(10, 0))
        semester_var = tk.StringVar(value="4th Semester")
        semester_combo = ttk.Combobox(cat_frame, textvariable=semester_var, width=15,
                                     values=["1st Semester", "2nd Semester", "3rd Semester", 
                                            "4th Semester", "5th Semester", "6th Semester",
                                            "7th Semester", "8th Semester"])
        semester_combo.grid(row=2, column=1, sticky="w", padx=(0, 20), pady=(10, 0))
        fields['semester'] = semester_var
        
        # Subject Code
        ttk.Label(cat_frame, text="Subject Code:").grid(row=2, column=2, sticky="w", padx=(0, 10), pady=(10, 0))
        code_var = tk.StringVar(value=self.generate_subject_code(category_id))
        code_entry = ttk.Entry(cat_frame, textvariable=code_var, width=15)
        code_entry.grid(row=2, column=3, sticky="w", pady=(10, 0))
        fields['code'] = code_var
        
        # Row 3: Subject Name
        ttk.Label(cat_frame, text="Subject Name:").grid(row=3, column=0, sticky="w", padx=(0, 10), pady=(10, 0))
        subject_var = tk.StringVar(value=self.generate_subject_name(category_id))
        subject_entry = ttk.Entry(cat_frame, textvariable=subject_var, width=40)
        subject_entry.grid(row=3, column=1, columnspan=3, sticky="ew", padx=(0, 10), pady=(10, 0))
        fields['subject'] = subject_var
        
        # Configure column weights
        cat_frame.columnconfigure(1, weight=1)
        cat_frame.columnconfigure(3, weight=1)
        
        # Store form data
        self.category_forms[category_id] = fields
    
    def generate_display_name(self, category_id):
        """Generate a display name from category ID"""
        # Convert underscores/hyphens to spaces and title case
        display_name = category_id.replace('_', ' ').replace('-', ' ')
        
        # Handle common abbreviations
        abbreviations = {
            'dbms': 'Database Management Systems',
            'os': 'Operating Systems',
            'dsa': 'Data Structures & Algorithms',
            'cn': 'Computer Networks',
            'se': 'Software Engineering',
            'ai': 'Artificial Intelligence',
            'ml': 'Machine Learning',
            'dl': 'Deep Learning',
            'stat': 'Statistics',
            'math': 'Mathematics'
        }
        
        return abbreviations.get(category_id.lower(), display_name.title())
    
    def generate_subject_code(self, category_id):
        """Generate a subject code from category ID"""
        code_mappings = {
            'dbms': 'CS401',
            'os': 'CS402',
            'dsa': 'CS301',
            'cn': 'CS403',
            'se': 'CS404',
            'ai': 'CS501',
            'ml': 'CS502',
            'stat': 'MA401'
        }
        
        return code_mappings.get(category_id.lower(), 
                                f'CS{hash(category_id) % 900 + 100}')
    
    def generate_subject_name(self, category_id):
        """Generate a subject name from category ID"""
        return category_id.replace('_', ' ').replace('-', ' ').upper()
    
    def preview_changes(self):
        """Preview the changes that will be made"""
        if not self.new_categories:
            messagebox.showinfo("Preview", "No new categories to add")
            return
        
        preview_window = tk.Toplevel(self.root)
        preview_window.title("Preview Changes")
        preview_window.geometry("600x400")
        
        # Preview text
        preview_text = scrolledtext.ScrolledText(preview_window, wrap=tk.WORD)
        preview_text.pack(fill="both", expand=True, padx=10, pady=10)
        
        preview_text.insert(tk.END, "The following categories will be added to categories.js:\n\n")
        
        for category_id in self.new_categories:
            if category_id in self.category_forms:
                fields = self.category_forms[category_id]
                preview_text.insert(tk.END, f"Category ID: {category_id}\n")
                preview_text.insert(tk.END, f"  Name: {fields['name'].get()}\n")
                preview_text.insert(tk.END, f"  Semester: {fields['semester'].get()}\n")
                preview_text.insert(tk.END, f"  Subject: {fields['subject'].get()} ({fields['code'].get()})\n")
                preview_text.insert(tk.END, f"  Quiz Count: {fields['quizCount'].get()}\n")
                preview_text.insert(tk.END, f"  Folder: categories/{category_id}\n\n")
        
        preview_text.config(state=tk.DISABLED)
    
    def update_categories_js(self):
        """Update the categories.js file with new categories"""
        if not self.new_categories:
            messagebox.showinfo("Update", "No new categories to add")
            return
        
        try:
            # Validate form data
            for category_id in self.new_categories:
                if category_id not in self.category_forms:
                    raise ValueError(f"Missing form data for category: {category_id}")
                
                fields = self.category_forms[category_id]
                if not fields['name'].get().strip():
                    raise ValueError(f"Category name is required for: {category_id}")
            
            # Read existing categories.js
            if self.categories_js_path.exists():
                with open(self.categories_js_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            else:
                # Create new file if it doesn't exist
                content = """/**
 * Quiz Zone - Categories Data
 * Contains all quiz category information
 */

const quizCategories = [
];

// Export for use in other modules
export { quizCategories };"""
            
            # Generate new category entries
            new_entries = []
            for category_id in self.new_categories:
                fields = self.category_forms[category_id]
                entry = self.generate_category_entry(category_id, fields)
                new_entries.append(entry)
            
            # Parse the file to find the correct insertion point
            lines = content.split('\n')
            closing_bracket_index = -1
            
            # Find the closing bracket of the array
            for i, line in enumerate(lines):
                if line.strip() == '];':
                    closing_bracket_index = i
                    break
            
            if closing_bracket_index == -1:
                raise ValueError("Could not find closing bracket ]; in categories.js")
            
            # Check if we need to add a comma to the last entry
            last_entry_line = closing_bracket_index - 1
            while last_entry_line >= 0 and lines[last_entry_line].strip() == '':
                last_entry_line -= 1
            
            if last_entry_line >= 0 and lines[last_entry_line].strip().endswith('}'):
                # Add comma to the last entry if it doesn't have one
                lines[last_entry_line] = lines[last_entry_line].rstrip() + ','
            
            # Insert new entries before the closing bracket
            for entry in reversed(new_entries):  # Insert in reverse order to maintain index
                lines.insert(closing_bracket_index, entry)
            
            # Join lines back together
            updated_content = '\n'.join(lines)
            
            # Write updated content
            with open(self.categories_js_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            
            self.log(f"✓ Successfully added {len(self.new_categories)} categories to categories.js")
            messagebox.showinfo("Success", 
                              f"Successfully added {len(self.new_categories)} categories!\n\n"
                              f"Categories added: {', '.join(self.new_categories)}")
            
            # Refresh the scan
            self.scan_categories()
            
        except Exception as e:
            self.log(f"❌ Error updating categories.js: {e}")
            messagebox.showerror("Error", f"Failed to update categories.js:\n{e}")
    
    def generate_category_entry(self, category_id, fields):
        """Generate JavaScript object for a category"""
        return f"""  {{
    id: '{category_id}',
    name: '{fields['name'].get()}',
    semester: '{fields['semester'].get()}',
    subject: {{ name: '{fields['subject'].get()}', code: '{fields['code'].get()}' }},
    quizCount: {fields['quizCount'].get()},
    folder: 'categories/{category_id}'
  }}"""

def main():
    """Main function"""
    try:
        # Check if tkinter is available
        import tkinter as tk
    except ImportError:
        print("❌ Error: tkinter is not available")
        print("   Please install tkinter or use a Python distribution that includes it")
        sys.exit(1)
    
    # Create and run the application
    root = tk.Tk()
    app = CategoryUpdateTool(root)
    
    try:
        root.mainloop()
    except KeyboardInterrupt:
        print("\n👋 Goodbye!")
        sys.exit(0)

if __name__ == "__main__":
    main()
