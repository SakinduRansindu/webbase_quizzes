export default [
  {
    question: "What is embedded SQL?",
    code: "",
    choices: [
      "SQL statements stored in the database",
      "SQL code written inside a general-purpose programming language",
      "A type of database trigger",
      "A stored procedure"
    ],
    correct: 1,
    justification: "Embedded SQL refers to SQL code written within a host programming language[1]."
  },
  {
    question: "What is a cursor in SQL?",
    code: "",
    choices: [
      "A pointer to a table",
      "A control structure that enables traversal over the records in a result set",
      "A type of index",
      "A temporary table"
    ],
    correct: 1,
    justification: "A cursor is a control structure that allows traversal over the records in a result set[1]."
  },
  {
    question: "Which operation is NOT typically performed with a cursor?",
    code: "",
    choices: [
      "Open",
      "Fetch",
      "Delete",
      "Create Index"
    ],
    correct: 3,
    justification: "Creating an index is not an operation performed with a cursor[1]."
  },
  {
    question: "What is the main reason for using cursors in embedded SQL?",
    code: "",
    choices: [
      "To manage large result sets that do not fit into host language variables",
      "To create tables",
      "To define triggers",
      "To enforce referential integrity"
    ],
    correct: 0,
    justification: "Cursors are used to manage large result sets in host language programs[1]."
  },
  {
    question: "Which keyword is used to declare a cursor in embedded SQL?",
    code: "",
    choices: [
      "DECLARE CURSOR",
      "OPEN CURSOR",
      "CREATE CURSOR",
      "MAKE CURSOR"
    ],
    correct: 0,
    justification: "DECLARE CURSOR is used to define a cursor in embedded SQL[1]."
  },
  {
    question: "What is the purpose of the FETCH command in cursor operations?",
    code: "",
    choices: [
      "To retrieve the next row from the result set",
      "To close the cursor",
      "To create a new cursor",
      "To update all rows"
    ],
    correct: 0,
    justification: "FETCH retrieves the next row from the cursor's result set[1]."
  },
  {
    question: "What is impedance mismatch in the context of databases?",
    code: "",
    choices: [
      "A difference between SQL and host language data structures",
      "A type of database error",
      "A mismatch between table and index sizes",
      "A concurrency control issue"
    ],
    correct: 0,
    justification: "Impedance mismatch refers to differences between SQL and host language data structures[1]."
  },
  {
    question: "Which SQL statement is used to close a cursor?",
    code: "",
    choices: [
      "CLOSE CURSOR",
      "END CURSOR",
      "CLOSE",
      "FINISH CURSOR"
    ],
    correct: 2,
    justification: "CLOSE is the SQL statement used to close a cursor[1]."
  },
  {
    question: "In embedded SQL, what does the colon (:) before a variable indicate?",
    code: "",
    choices: [
      "It is a SQL keyword",
      "It refers to a host language variable",
      "It indicates a cursor name",
      "It is used for indexing"
    ],
    correct: 1,
    justification: "The colon (:) indicates a host language variable in embedded SQL[1]."
  },
  {
    question: "Which of the following is a benefit of using embedded SQL?",
    code: "",
    choices: [
      "Allows dynamic query generation based on user input",
      "Automatically creates indexes",
      "Eliminates the need for transactions",
      "Prevents all SQL injection attacks"
    ],
    correct: 0,
    justification: "Embedded SQL allows programs to generate queries dynamically based on user input[1]."
  }
]
