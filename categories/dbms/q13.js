export default [
  {
    question: "What is the main purpose of query optimization in a relational database system?",
    code: "",
    choices: [
      "To minimize storage requirements",
      "To identify the most efficient way to execute a query",
      "To enforce data integrity",
      "To generate random query plans"
    ],
    correct: 1,
    justification: "Query optimization is used to identify the most efficient way to execute a relational query[1]."
  },
  {
    question: "Which component translates a SQL query into a relational algebra expression?",
    code: "",
    choices: [
      "Optimizer",
      "Parser & Translator",
      "Execution Engine",
      "System Catalog"
    ],
    correct: 1,
    justification: "The parser & translator convert the query into an internal relational algebra expression[1]."
  },
  {
    question: "What is the predominant cost considered during query optimization?",
    code: "",
    choices: [
      "CPU time",
      "Disk access (I/O)",
      "Network latency",
      "Memory usage"
    ],
    correct: 1,
    justification: "Disk access is the predominant cost in query optimization, typically measured by block transfers[1]."
  },
  {
    question: "Why does the order of operations in a query plan matter?",
    code: "",
    choices: [
      "It affects the number of I/O operations and overall performance",
      "It changes the query result",
      "It determines the database schema",
      "It is required by SQL syntax"
    ],
    correct: 0,
    justification: "Changing the order of operations can significantly reduce I/O and improve query performance[1]."
  },
  {
    question: "What is a query execution plan?",
    code: "",
    choices: [
      "A SQL statement",
      "A set of low-level operations for executing a query",
      "A database schema",
      "A system catalog entry"
    ],
    correct: 1,
    justification: "A query execution plan is a set of low-level operations for executing a query[1]."
  },
  {
    question: "Which principle helps avoid unnecessary data processing in query optimization?",
    code: "",
    choices: [
      "Build Cartesian products",
      "Perform selects and projects before joins",
      "Always use nested-loop joins",
      "Ignore indexes"
    ],
    correct: 1,
    justification: "Performing selects and projects before joins can reduce the number of rows to be joined[1]."
  },
  {
    question: "What information does the system catalog store for query optimization?",
    code: "",
    choices: [
      "Only table names",
      "Statistics about relations, attributes, and indexes",
      "User passwords",
      "SQL queries"
    ],
    correct: 1,
    justification: "The system catalog stores statistics about relations, attributes, and indexes[1]."
  },
  {
    question: "What is the role of database statistics in query optimization?",
    code: "",
    choices: [
      "To track user activity",
      "To help the optimizer estimate query costs",
      "To store query results",
      "To enforce data privacy"
    ],
    correct: 1,
    justification: "Database statistics help the optimizer estimate the cost of different query plans[1]."
  },
  {
    question: "What is a query tree?",
    code: "",
    choices: [
      "A relational algebra expression represented as a tree structure",
      "A type of database index",
      "A system catalog entry",
      "A SQL command"
    ],
    correct: 0,
    justification: "A query tree is a tree data structure corresponding to a relational algebra expression[1]."
  },
  {
    question: "Why should Cartesian products be avoided in query plans?",
    code: "",
    choices: [
      "They always produce incorrect results",
      "They can generate large intermediate results and increase I/O cost",
      "They are not supported by SQL",
      "They require special hardware"
    ],
    correct: 1,
    justification: "Cartesian products can generate large intermediate results, increasing I/O and reducing performance[1]."
  }
];
