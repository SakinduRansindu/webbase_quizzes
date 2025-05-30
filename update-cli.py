#!/usr/bin/env python3
"""
Quiz Zone Category Update Tool - Command Line Version
Simple command-line interface for updating categories.js
"""

import os
import re
import json
from pathlib import Path

def load_existing_categories(categories_js_path):
    """Load existing categories from categories.js"""
    if not categories_js_path.exists():
        return []
    
    try:
        with open(categories_js_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract category IDs using regex
        pattern = r'id:\s*[\'"`]([^\'"`]+)[\'"`]'
        matches = re.findall(pattern, content)
        return matches
        
    except Exception as e:
        print(f"⚠ Error reading categories.js: {e}")
        return []

def find_new_categories(categories_dir, existing_categories):
    """Find new category folders that aren't in categories.js"""
    if not categories_dir.exists():
        return []
    
    # Get all directories in categories folder
    all_dirs = [d.name for d in categories_dir.iterdir() if d.is_dir()]
    
    # Filter out existing categories
    new_dirs = [d for d in all_dirs if d not in existing_categories]
    
    return new_dirs

def count_quiz_files(categories_dir, category_id):
    """Count .js files in a category folder"""
    category_path = categories_dir / category_id
    if not category_path.exists():
        return 0
    
    js_files = list(category_path.glob("*.js"))
    return len(js_files)

def count_actual_questions(categories_dir, category_id):
    """Count actual question objects in all .js files in a category folder"""
    category_path = categories_dir / category_id
    if not category_path.exists():
        return 0
    
    total_questions = 0
    js_files = list(category_path.glob("*.js"))
    
    for js_file in js_files:
        try:
            with open(js_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Look for export default array pattern
            import re
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
            print(f"⚠ Warning: Could not count questions in {js_file.name}: {e}")
            # Fallback to counting the file as 1 question
            total_questions += 1
    
    return total_questions

def generate_display_name(category_id):
    """Generate a display name from category ID"""
    name_mappings = {
        'dbms': 'Database Management Systems',
        'os': 'Operating Systems',
        'dsa': 'Data Structures & Algorithms',
        'cn': 'Computer Networks',
        'se': 'Software Engineering',
        'ai': 'Artificial Intelligence',
        'ml': 'Machine Learning',
        'web': 'Web Development',
        'java': 'Java Programming',
        'python': 'Python Programming',
        'cpp': 'C++ Programming',
        'js': 'JavaScript Programming',
        'stat': 'Statistics',
        'math': 'Mathematics',
        'ds': 'Data Science'
    }
    
    return name_mappings.get(category_id.lower(), 
                            category_id.replace('_', ' ').replace('-', ' ').title())

def generate_subject_code(category_id):
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

def get_user_input(prompt, default=""):
    """Get user input with default value"""
    user_input = input(f"{prompt} [{default}]: ").strip()
    return user_input if user_input else default

def collect_category_info(category_id, quiz_count):
    """Collect information for a new category"""
    print(f"\n📝 Configuring category: {category_id}")
    print(f"   Quiz files found: {quiz_count}")
    
    # Get category information
    name = get_user_input("Display Name", generate_display_name(category_id))
    semester = get_user_input("Semester", "4th Semester")
    subject_name = get_user_input("Subject Name", category_id.upper())
    subject_code = get_user_input("Subject Code", generate_subject_code(category_id))
    
    return {
        'id': category_id,
        'name': name,
        'semester': semester,
        'subject': {'name': subject_name, 'code': subject_code},
        'quizCount': quiz_count,
        'folder': f'categories/{category_id}'
    }

def generate_category_entry(category_info):
    """Generate JavaScript object for a category"""
    entry = f"""  {{
    id: '{category_info['id']}',
    name: '{category_info['name']}',
    semester: '{category_info['semester']}',
    subject: {{ name: '{category_info['subject']['name']}', code: '{category_info['subject']['code']}' }},
    quizCount: {category_info['quizCount']},
    folder: '{category_info['folder']}'
  }},"""
    return entry

def update_categories_js(categories_js_path, new_categories_info):
    """Update the categories.js file with new categories"""
    try:
        # Read existing categories.js
        if categories_js_path.exists():
            with open(categories_js_path, 'r', encoding='utf-8') as f:
                content = f.read()
        else:
            # Create new file if it doesn't exist
            content = """/**
 * Quiz Zone - Categories Data
 * Contains all quiz category information
 */

const quizCategories = [
];"""
        
        # Generate new category entries
        new_entries = []
        for category_info in new_categories_info:
            entry = generate_category_entry(category_info)
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
        with open(categories_js_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        return True
        
    except Exception as e:
        print(f"❌ Error updating categories.js: {e}")
        return False

def main():
    """Main function"""
    print("🚀 Quiz Zone Category Update Tool (CLI)")
    print("=" * 50)
    
    # Set paths
    script_dir = Path(__file__).parent.absolute()
    categories_dir = script_dir / "categories"
    categories_js_path = script_dir / "js" / "categories.js"
    
    # Check if directories exist
    if not categories_dir.exists():
        print(f"❌ Categories directory not found: {categories_dir}")
        return
    
    print(f"📁 Categories directory: {categories_dir}")
    print(f"📄 Categories.js file: {categories_js_path}")
    
    # Load existing categories
    existing_categories = load_existing_categories(categories_js_path)
    print(f"✓ Found {len(existing_categories)} existing categories")
    
    # Find new categories
    new_categories = find_new_categories(categories_dir, existing_categories)
    print(f"✓ Found {len(new_categories)} new categories")
    
    if not new_categories:
        print("ℹ No new categories found. All categories are up to date!")
        return
    
    print(f"\nNew categories: {', '.join(new_categories)}")
    
    # Confirm before proceeding
    proceed = input(f"\nDo you want to add these {len(new_categories)} categories? [y/N]: ").strip().lower()
    if proceed != 'y':
        print("❌ Operation cancelled")
        return
    
    # Collect information for each new category
    new_categories_info = []
    for category_id in new_categories:
        quiz_count = count_actual_questions(categories_dir, category_id)
        category_info = collect_category_info(category_id, quiz_count)
        new_categories_info.append(category_info)
    
    # Preview changes
    print(f"\n📋 Preview of changes:")
    print("-" * 30)
    for info in new_categories_info:
        print(f"ID: {info['id']}")
        print(f"  Name: {info['name']}")
        print(f"  Semester: {info['semester']}")
        print(f"  Subject: {info['subject']['name']} ({info['subject']['code']})")
        print(f"  Quiz Count: {info['quizCount']}")
        print(f"  Folder: {info['folder']}")
        print()
    
    # Confirm update
    confirm = input("Confirm update to categories.js? [y/N]: ").strip().lower()
    if confirm != 'y':
        print("❌ Update cancelled")
        return
    
    # Update categories.js
    if update_categories_js(categories_js_path, new_categories_info):
        print(f"✅ Successfully added {len(new_categories_info)} categories to categories.js!")
        print("Categories added:", ', '.join([info['id'] for info in new_categories_info]))
    else:
        print("❌ Failed to update categories.js")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n👋 Goodbye!")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
