export default [
  {
    question: "What keyword is used to indicate the start of a block of statements in a stored procedure?",
    code: "",
    choices: ["START", "BEGIN", "OPEN", "BLOCK"],
    correct: 1,
    justification: "`BEGIN` marks the beginning of a statement block in a stored procedure."
  },
  {
    question: "Which keyword ends the block of SQL statements in a stored procedure?",
    code: "",
    choices: ["FINISH", "STOP", "CLOSE", "END"],
    correct: 3,
    justification: "`END` marks the end of a `BEGIN...END` block."
  },
  {
    question: "Which command removes a stored procedure from the database?",
    code: "",
    choices: ["DROP PROCEDURE", "REMOVE PROCEDURE", "DELETE PROCEDURE", "ERASE PROCEDURE"],
    correct: 0,
    justification: "`DROP PROCEDURE proc_name;` deletes a stored procedure."
  },
  {
    question: "What does the `RETURNS` keyword specify in a function?",
    code: "",
    choices: ["The function name", "The block scope", "The return type", "The caller procedure"],
    correct: 2,
    justification: "`RETURNS` defines the data type returned by the function."
  },
  {
    question: "What type of value can stored procedures return directly in SQL Server?",
    code: "",
    choices: ["Scalar values", "None", "Table rows", "JSON"],
    correct: 1,
    justification: "Stored procedures do not return values directly; output must use output parameters or result sets."
  },
  {
    question: "Which clause is used to define a parameter as input-only?",
    code: "",
    choices: ["OUT", "IN", "OUTPUT", "INPUT"],
    correct: 1,
    justification: "`IN` specifies that the parameter is input-only."
  },
  {
    question: "What is the purpose of the OUTPUT keyword in a parameter definition?",
    code: "",
    choices: ["To pass the result to a subquery", "To mark it as a required input", "To allow it to return a value", "To terminate the procedure"],
    correct: 2,
    justification: "`OUTPUT` allows the parameter to return data from the procedure."
  },
  {
    question: "What is required when calling a stored procedure with an OUTPUT parameter?",
    code: "",
    choices: ["Use OUT keyword in call", "Assign return to a variable", "Specify OUTPUT in call", "Use RETURN keyword"],
    correct: 2,
    justification: "The OUTPUT keyword must be used in both definition and call."
  },
  {
    question: "What happens if you omit the OUTPUT keyword during the procedure call?",
    code: "",
    choices: ["Procedure crashes", "Output variable is not updated", "Compilation error", "Procedure runs twice"],
    correct: 1,
    justification: "Without `OUTPUT`, the value is not passed back to the caller."
  },
  {
    question: "Which of the following is an advantage of stored procedures?",
    code: "",
    choices: [
      "More client-side code",
      "Less secure data handling",
      "Faster network transmission",
      "Reduced server encapsulation"
    ],
    correct: 2,
    justification: "Stored procedures reduce network load by executing logic on the server."
  }
];
