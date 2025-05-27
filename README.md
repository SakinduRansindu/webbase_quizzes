# Quiz Zone

An interactive quiz application featuring multiple categories and subjects.

## Project Structure

```
Quiz Zone/
├── categories/            # Main folder for all quiz categories
│   ├── dbms/             # Database Management Systems quizzes
│   │   ├── q1.js         # Quiz question file 1
│   │   ├── q2.js         # Quiz question file 2
│   │   └── ...           # More question files
│   ├── dsa/              # Data Structures and Algorithms quizzes
│   │   └── q1.js         # Sample DSA questions
│   └── os/               # Operating Systems quizzes
│       └── q1.js         # Sample OS questions
├── js/                   # JavaScript utility files
│   └── utils.js          # Common utility functions
├── index.html            # Homepage with category cards
├── quiz.html             # Quiz page that loads questions from selected category
├── startWin.bat          # Windows startup script
└── startLnx.sh           # Linux startup script
```

## Features

- **Category-based Quiz Organization**: Quizzes are organized by subject categories
- **Interactive Quiz Interface**: Multiple-choice questions with immediate feedback
- **Pagination**: Navigate through sets of questions
- **Shuffle Mode**: Option to shuffle the order of questions
- **Mobile Responsive**: Works well on all device sizes

## How to Run

### Windows
Double click `startWin.bat` or run from command prompt

### Linux/Mac
Run `sh startLnx.sh` in terminal

## Adding New Quiz Categories

To add a new quiz category:

1. Create a new folder in the `categories` directory with your category name
2. Add quiz files in the format `q1.js`, `q2.js`, etc.
3. Update the `quizCategories` array in `index.html` with your new category information

## Quiz File Format

Each quiz file should export an array of question objects in the following format:

```javascript
export default [
  {
    question: "What is the time complexity of binary search?",
    code: "",  // Optional code snippet
    choices: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correct: 1,  // Index of correct answer (0-based)
    justification: "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity."
  },
  // More questions...
]
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Python (for the local server)

## License

Educational purposes only.

## Copyright

Quiz Zone © 2025

## How to Add New Questions

1. Create a new JavaScript file in the appropriate category folder (e.g., `dbms/q26.js`)
2. Follow the question format:

```javascript
export default [
  {
    question: "Your question here?",
    code: "", // Optional code snippet
    choices: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    correct: 0, // Index of correct answer (0-based)
    justification: "Explanation of the correct answer"
  },
  // More questions...
]
```

3. Update the question count in `index.html` if needed

## How to Add New Categories

1. Create a new folder for the category
2. Add question files to the folder
3. Update the `quizCategories` array in `index.html`
