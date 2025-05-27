export default [
  {
    question: "What is a view in SQL?",
    code: "",
    choices: [
      "A physical table",
      "A stored query that can be used as a virtual table",
      "A type of index",
      "A database trigger"
    ],
    correct: 1,
    justification: "A view is a stored query definition that acts as a virtual table[1]."
  },
  {
    question: "Which SQL statement is used to create a view?",
    code: "",
    choices: [
      "CREATE TABLE",
      "CREATE VIEW",
      "MAKE VIEW",
      "DEFINE VIEW"
    ],
    correct: 1,
    justification: "The CREATE VIEW statement is used to define a view in SQL[1]."
  },
  {
    question: "What is one advantage of using views for security?",
    code: "",
    choices: [
      "Views can hide sensitive columns from users",
      "Views can only be used by administrators",
      "Views encrypt table data",
      "Views prevent all data modifications"
    ],
    correct: 0,
    justification: "Views can restrict access to specific columns, enhancing security[1]."
  },
  {
    question: "Which of the following is a limitation of updating views?",
    code: "",
    choices: [
      "Views can always be updated",
      "Views defined on multiple tables may not be updatable",
      "Views can only be updated by the DBA",
      "Views cannot be queried"
    ],
    correct: 1,
    justification: "Views defined on multiple tables or with aggregates may not be updatable[1]."
  },
  {
    question: "How can views support database extensibility?",
    code: "",
    choices: [
      "By allowing the same table name to refer to different structures",
      "By preventing schema changes",
      "By encrypting data",
      "By enforcing referential integrity"
    ],
    correct: 0,
    justification: "Views can present different representations of data under the same table name, aiding extensibility[1]."
  },
  {
    question: "Which of the following is a requirement for a view to be updatable?",
    code: "",
    choices: [
      "It must be defined on a single base table using only selection and projection",
      "It must include aggregate functions",
      "It must join multiple tables",
      "It must use DISTINCT"
    ],
    correct: 0,
    justification: "A view is updatable if defined on a single base table using only selection and projection[1]."
  },
  {
    question: "What is the result of querying a view?",
    code: "",
    choices: [
      "A stored result set",
      "A dynamically generated result based on the view definition",
      "A physical table",
      "A system catalog entry"
    ],
    correct: 1,
    justification: "Querying a view dynamically generates results based on the view's definition[1]."
  },
  {
    question: "Which of the following is a use case for views?",
    code: "",
    choices: [
      "Easier query writing",
      "Data encryption",
      "Index creation",
      "Trigger execution"
    ],
    correct: 0,
    justification: "Views can simplify query writing by encapsulating complex queries[1]."
  },
  {
    question: "What happens if you try to update a view that is not updatable?",
    code: "",
    choices: [
      "The update is applied to all base tables",
      "The database returns an error",
      "The update is ignored",
      "The view is automatically converted to a table"
    ],
    correct: 1,
    justification: "If a view is not updatable, the database will return an error on update attempts[1]."
  },
  {
    question: "Which of the following is NOT a benefit of using views?",
    code: "",
    choices: [
      "Security",
      "Extensibility",
      "Easier query writing",
      "Automatic performance optimization"
    ],
    correct: 3,
    justification: "Views do not automatically optimize performance; they provide abstraction and security[1]."
  }
]
