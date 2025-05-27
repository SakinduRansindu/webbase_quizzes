export default [
  {
    question: "What is a lost update problem in concurrency control?",
    code: "",
    choices: [
      "When two transactions update the same data and one update is lost",
      "When a transaction fails to commit",
      "When a transaction reads uncommitted data",
      "When a transaction is aborted"
    ],
    correct: 0,
    justification: "Lost update occurs when two transactions update the same data and one update is overwritten[3]."
  },
  {
    question: "What is a dirty read?",
    code: "",
    choices: [
      "Reading data from a corrupted disk",
      "Reading uncommitted data from another transaction",
      "Reading data from a backup",
      "Reading data from an index"
    ],
    correct: 1,
    justification: "A dirty read occurs when a transaction reads data that has been modified but not committed by another transaction[3]."
  },
  {
    question: "What is an inconsistent retrieval (unrepeatable read) problem?",
    code: "",
    choices: [
      "When a transaction reads the same data twice and gets different results due to updates by other transactions",
      "When a transaction reads only committed data",
      "When a transaction fails to update data",
      "When a transaction is rolled back"
    ],
    correct: 0,
    justification: "Unrepeatable read occurs when a transaction reads the same data twice and gets different results due to concurrent updates[3]."
  },
  {
    question: "Which protocol ensures that data items are accessed in a mutually exclusive manner?",
    code: "",
    choices: [
      "Timestamp-based protocol",
      "Lock-based protocol",
      "Optimistic protocol",
      "Two-phase commit protocol"
    ],
    correct: 1,
    justification: "Lock-based protocols ensure mutual exclusion for data item access[3]."
  },
  {
    question: "What is a shared lock in database concurrency control?",
    code: "",
    choices: [
      "A lock that allows only one transaction to read or write a data item",
      "A lock that allows multiple transactions to read but not write a data item",
      "A lock that allows only updates",
      "A lock that prevents all access"
    ],
    correct: 1,
    justification: "Shared locks allow multiple transactions to read but not write a data item[1]."
  },
  {
    question: "What is an exclusive lock?",
    code: "",
    choices: [
      "A lock that allows only one transaction to read a data item",
      "A lock that allows only one transaction to read or write a data item",
      "A lock that allows multiple transactions to write a data item",
      "A lock that allows only one transaction to write a data item"
    ],
    correct: 3,
    justification: "Exclusive locks allow only one transaction to write a data item[1]."
  },
  {
    question: "What is the main function of a lock manager?",
    code: "",
    choices: [
      "To manage user accounts",
      "To grant and release locks on data items",
      "To schedule queries",
      "To enforce referential integrity"
    ],
    correct: 1,
    justification: "A lock manager grants and releases locks on data items for transactions[4]."
  },
  {
    question: "What is deadlock in the context of database transactions?",
    code: "",
    choices: [
      "A situation where two or more transactions wait indefinitely for each other to release locks",
      "A transaction that fails to commit",
      "A transaction that is rolled back",
      "A transaction that reads uncommitted data"
    ],
    correct: 0,
    justification: "Deadlock occurs when transactions wait indefinitely for each other to release locks[4]."
  },
  {
    question: "Which protocol can prevent deadlocks by requiring all locks to be acquired before execution?",
    code: "",
    choices: [
      "Wait-die protocol",
      "Predeclaration protocol",
      "Timestamp protocol",
      "Optimistic protocol"
    ],
    correct: 1,
    justification: "Predeclaration protocol prevents deadlocks by requiring all locks to be acquired before execution[1]."
  },
  {
    question: "What is starvation in the context of concurrency control?",
    code: "",
    choices: [
      "When a transaction is repeatedly rolled back and never completes",
      "When a transaction is committed",
      "When a transaction is aborted due to a system crash",
      "When a transaction reads uncommitted data"
    ],
    correct: 0,
    justification: "Starvation occurs when a transaction is repeatedly rolled back and never completes[1]."
  }
]
