export default [
  {
    question: "What is a transaction in a database system?",
    code: "",
    choices: [
      "A single SQL statement",
      "A logical unit of database processing consisting of one or more operations",
      "A type of index",
      "A data dictionary entry"
    ],
    correct: 1,
    justification: "A transaction is a logical unit of database processing that may consist of multiple operations[1]."
  },
  {
    question: "Which property ensures that a transaction is either fully completed or not executed at all?",
    code: "",
    choices: [
      "Consistency",
      "Atomicity",
      "Isolation",
      "Durability"
    ],
    correct: 1,
    justification: "Atomicity ensures that a transaction is either fully completed or not executed at all[1]."
  },
  {
    question: "Which property guarantees that the database remains in a valid state before and after a transaction?",
    code: "",
    choices: [
      "Isolation",
      "Durability",
      "Consistency",
      "Atomicity"
    ],
    correct: 2,
    justification: "Consistency ensures the database remains valid before and after a transaction[1]."
  },
  {
    question: "What does the isolation property of a transaction guarantee?",
    code: "",
    choices: [
      "Transactions can see each other's intermediate results",
      "Transactions appear to execute independently of each other",
      "Transactions are always executed sequentially",
      "Transactions never update data"
    ],
    correct: 1,
    justification: "Isolation ensures that transactions appear to execute independently[1]."
  },
  {
    question: "Which property ensures that the results of a committed transaction persist even after a system failure?",
    code: "",
    choices: [
      "Atomicity",
      "Durability",
      "Consistency",
      "Isolation"
    ],
    correct: 1,
    justification: "Durability ensures that committed results persist even after system failures[1]."
  },
  {
    question: "What is a schedule in the context of transactions?",
    code: "",
    choices: [
      "A database backup",
      "An ordered collection of operations from one or more transactions",
      "A system catalog entry",
      "A type of index"
    ],
    correct: 1,
    justification: "A schedule is an ordered collection of operations from one or more transactions[1]."
  },
  {
    question: "What is a serial schedule?",
    code: "",
    choices: [
      "A schedule with no transactions",
      "A schedule where all operations of one transaction are executed before the next",
      "A schedule with only read operations",
      "A schedule with only write operations"
    ],
    correct: 1,
    justification: "A serial schedule executes all operations of one transaction before starting another[1]."
  },
  {
    question: "Which of the following is a potential problem in concurrent transaction execution?",
    code: "",
    choices: [
      "Lost update problem",
      "Index fragmentation",
      "Data redundancy",
      "Slow query performance"
    ],
    correct: 0,
    justification: "Lost update is a common problem in concurrent transaction execution[3]."
  },
  {
    question: "What is the main goal of concurrency control in databases?",
    code: "",
    choices: [
      "To improve query performance",
      "To maintain database consistency when multiple transactions execute concurrently",
      "To reduce storage requirements",
      "To enforce referential integrity"
    ],
    correct: 1,
    justification: "Concurrency control maintains consistency when multiple transactions execute concurrently[3]."
  },
  {
    question: "Which of the following is NOT an ACID property?",
    code: "",
    choices: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Distribution"
    ],
    correct: 3,
    justification: "Distribution is not one of the ACID properties; the correct properties are Atomicity, Consistency, Isolation, and Durability[1]."
  }
];
