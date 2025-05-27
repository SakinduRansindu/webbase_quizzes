export default [
  {
    question: "What do the leaf nodes in a query tree represent?",
    code: "",
    choices: [
      "Selection operations",
      "Join operations",
      "Input relations",
      "Projection operations"
    ],
    correct: 2,
    justification: "Leaf nodes represent the base relations from which data is retrieved."
  },
  {
    question: "In a query tree, where is the final result produced?",
    code: "",
    choices: [
      "In the root node",
      "In the leaf node",
      "In the first join operation",
      "At each selection step"
    ],
    correct: 0,
    justification: "The root node produces the final result of the query tree."
  },
  {
    question: "Which is a correct benefit of query trees?",
    code: "",
    choices: [
      "They increase query cost",
      "They visualize execution order",
      "They eliminate joins",
      "They store data"
    ],
    correct: 1,
    justification: "Query trees help visualize the order of operations in query execution."
  },
  {
    question: "What is the keyword used to define a stored procedure in SQL?",
    code: "",
    choices: [
      "MAKE PROCEDURE",
      "DEFINE FUNCTION",
      "CREATE PROCEDURE",
      "NEW ROUTINE"
    ],
    correct: 2,
    justification: "`CREATE PROCEDURE` is the correct syntax to define a stored procedure."
  },
  {
    question: "How is a stored procedure executed in SQL?",
    code: "",
    choices: [
      "USE proc_name",
      "RUN proc_name",
      "CALL proc_name",
      "EXEC proc_name"
    ],
    correct: 3,
    justification: "`EXEC` or `EXECUTE` is used to run stored procedures in SQL Server."
  },
  {
    question: "Which block contains the logic of a stored procedure?",
    code: "",
    choices: [
      "WHEN-END",
      "LOOP-END",
      "BEGIN-END",
      "DO-END"
    ],
    correct: 2,
    justification: "`BEGIN...END` contains the actual SQL statements inside the procedure."
  },
  {
    question: "Which of the following is an advantage of stored procedures?",
    code: "",
    choices: [
      "Increases client-side load",
      "Eliminates need for SQL",
      "Reduces server workload",
      "Encapsulates logic on the server"
    ],
    correct: 3,
    justification: "Stored procedures encapsulate logic and reduce client-server communication."
  },
  {
    question: "Which of the following statements is true?",
    code: "",
    choices: [
      "Stored procedures return only single values",
      "Stored procedures cannot accept parameters",
      "Stored procedures may accept input/output parameters",
      "Stored procedures can’t contain joins"
    ],
    correct: 2,
    justification: "Stored procedures can have input, output, and in-out parameters."
  },
  {
    question: "Which of the following is a valid parameter declaration in a stored procedure?",
    code: "",
    choices: [
      "@param INT",
      "INT param@",
      "param = INT",
      "input param INT"
    ],
    correct: 0,
    justification: "In SQL Server, parameters are declared with `@param` syntax."
  },
  {
    question: "Which database object allows reusability and encapsulation of SQL logic?",
    code: "",
    choices: [
      "Trigger",
      "Cursor",
      "Stored Procedure",
      "Schema"
    ],
    correct: 2,
    justification: "Stored procedures enable reusability and encapsulation of SQL logic on the server."
  }
];
