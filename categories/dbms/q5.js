export default [
  {
    question: "What is the key difference between a stored procedure and a function?",
    code: "",
    choices: [
      "Procedures cannot contain SQL statements",
      "Functions can return only strings",
      "Functions must return a value; procedures do not",
      "Procedures are used only for SELECT operations"
    ],
    correct: 2,
    justification: "Functions always return a value; stored procedures may not."
  },
  {
    question: "Which of the following can be used in both stored procedures and functions?",
    code: "",
    choices: [
      "RETURN statement",
      "Transaction control commands",
      "DML operations (INSERT, UPDATE)",
      "BEGIN...END blocks"
    ],
    correct: 3,
    justification: "Both functions and procedures use BEGIN...END blocks to group statements."
  },
  {
    question: "In SQL Server, what symbol is used to declare parameters?",
    code: "",
    choices: ["$", ":", "@", "#"],
    correct: 2,
    justification: "`@` is used to declare parameters in SQL Server (e.g., `@id INT`)."
  },
  {
    question: "Which of the following is NOT allowed inside a function?",
    code: "",
    choices: [
      "SELECT statements",
      "INSERT statements",
      "Mathematical expressions",
      "Parameter definitions"
    ],
    correct: 1,
    justification: "INSERT, UPDATE, and DELETE are disallowed inside deterministic functions."
  },
  {
    question: "Which keyword is used in a function to specify what value it gives back?",
    code: "",
    choices: ["RETURN", "EXIT", "END", "GIVE"],
    correct: 0,
    justification: "`RETURN` specifies the value that a function outputs."
  },
  {
    question: "Which of these is a valid function definition header?",
    code: "",
    choices: [
      "CREATE FUNCTION myFunc RETURNS INT",
      "DEFINE FUNCTION myFunc() RETURNS INT",
      "CREATE FUNCTION myFunc() RETURN INT",
      "DECLARE FUNCTION myFunc RETURNS INT"
    ],
    correct: 0,
    justification: "`CREATE FUNCTION myFunc() RETURNS INT` is the correct SQL syntax."
  },
  {
    question: "When using multiple parameters in a procedure, how are they separated?",
    code: "",
    choices: ["Colon", "Semicolon", "Comma", "Dash"],
    correct: 2,
    justification: "Parameters are separated by commas in both function and procedure definitions."
  },
  {
    question: "What is the correct order of parts in a stored procedure definition?",
    code: "",
    choices: [
      "CREATE, RETURNS, BEGIN",
      "CREATE, PARAMETERS, BEGIN",
      "BEGIN, CREATE, PARAMETERS",
      "RETURNS, CREATE, END"
    ],
    correct: 1,
    justification: "The typical order is `CREATE PROCEDURE name (parameters) BEGIN...END`."
  },
  {
    question: "Which SQL statement is used to check the existence of a stored procedure before creating it?",
    code: "",
    choices: [
      "IF NOT EXISTS",
      "PROCEDURE_EXISTS()",
      "CREATE IF NEW",
      "BEGIN CREATE"
    ],
    correct: 0,
    justification: "`IF NOT EXISTS` ensures a procedure isn't duplicated during creation."
  },
  {
    question: "What happens if a RETURN statement is missing in a function?",
    code: "",
    choices: [
      "Syntax error on creation",
      "The function returns NULL",
      "The function acts like a procedure",
      "The database auto-generates a value"
    ],
    correct: 0,
    justification: "A function must have a RETURN; otherwise, it will throw a syntax error."
  }
];
