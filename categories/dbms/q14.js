export default [
  {
    question: "What is a stored procedure in SQL?",
    code: "",
    choices: [
      "A table definition",
      "A precompiled program stored in the database",
      "A type of index",
      "A trigger"
    ],
    correct: 1,
    justification: "A stored procedure is a precompiled program stored in the database and executed by the server[1]."
  },
  {
    question: "What is a key advantage of stored procedures?",
    code: "",
    choices: [
      "They are always portable across all DBMSs",
      "They encapsulate application logic close to the data",
      "They can only be called from external programs",
      "They are executed on the client side"
    ],
    correct: 1,
    justification: "Stored procedures encapsulate logic close to the data, improving performance and reusability[1]."
  },
  {
    question: "Which SQL command is used to execute a stored procedure?",
    code: "",
    choices: [
      "RUN PROCEDURE",
      "CALL",
      "EXECUTE",
      "PERFORM"
    ],
    correct: 2,
    justification: "The EXECUTE command is used to run a stored procedure[1]."
  },
  {
    question: "What is a trigger in a database?",
    code: "",
    choices: [
      "A stored query",
      "A procedure that executes in response to certain events on a table",
      "A type of index",
      "A table constraint"
    ],
    correct: 1,
    justification: "A trigger is a procedure that executes in response to specified changes in the database[1]."
  },
  {
    question: "Which of the following is NOT a valid trigger event?",
    code: "",
    choices: [
      "BEFORE",
      "AFTER",
      "INSTEAD OF",
      "DURING"
    ],
    correct: 3,
    justification: "Valid trigger events are BEFORE, AFTER, and INSTEAD OF[1]."
  },
  {
    question: "What is the purpose of a BEFORE trigger?",
    code: "",
    choices: [
      "To execute after data modification",
      "To execute before an insert or update operation",
      "To prevent trigger recursion",
      "To execute only on views"
    ],
    correct: 1,
    justification: "BEFORE triggers execute before the data modification occurs[1]."
  },
  {
    question: "Which SQL statement creates a trigger?",
    code: "",
    choices: [
      "CREATE TRIGGER",
      "DEFINE TRIGGER",
      "NEW TRIGGER",
      "MAKE TRIGGER"
    ],
    correct: 0,
    justification: "CREATE TRIGGER is the SQL statement used to define a trigger[1]."
  },
  {
    question: "What is a potential disadvantage of using triggers?",
    code: "",
    choices: [
      "They are less powerful than constraints",
      "Their execution order is always predictable",
      "They can be harder to understand and debug",
      "They cannot modify tables"
    ],
    correct: 2,
    justification: "Triggers can be hard to understand and debug, especially when multiple triggers interact[1]."
  },
  {
    question: "Which part of a trigger specifies when it should execute?",
    code: "",
    choices: [
      "Action",
      "Event",
      "Condition",
      "Procedure"
    ],
    correct: 1,
    justification: "The event part of a trigger specifies when it should execute (e.g., on INSERT, UPDATE, DELETE)[1]."
  },
  {
    question: "What is the main difference between a trigger and a constraint?",
    code: "",
    choices: [
      "Triggers cannot enforce data integrity",
      "Constraints are more powerful than triggers",
      "Triggers can perform complex actions, constraints cannot",
      "Constraints can execute SQL statements"
    ],
    correct: 2,
    justification: "Triggers can perform complex actions, while constraints enforce simple data integrity rules[1]."
  }
];
