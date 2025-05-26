export default [
  {
    question: "What is two-phase locking (2PL) protocol?",
    code: "",
    choices: [
      "A protocol that releases all locks before acquiring new ones",
      "A protocol that divides transaction execution into a growing and shrinking phase for lock management",
      "A protocol that prevents all deadlocks",
      "A protocol that does not use locks"
    ],
    correct: 1,
    justification: "Two-phase locking divides execution into a growing phase (acquiring locks) and a shrinking phase (releasing locks)[1]."
  },
  {
    question: "What is the main advantage of two-phase locking?",
    code: "",
    choices: [
      "It guarantees deadlock freedom",
      "It ensures conflict-serializable schedules",
      "It eliminates the need for concurrency control",
      "It speeds up all transactions"
    ],
    correct: 1,
    justification: "Two-phase locking ensures conflict-serializable schedules[1]."
  },
  {
    question: "What is strict two-phase locking?",
    code: "",
    choices: [
      "A protocol where all locks are released after the transaction commits or aborts",
      "A protocol where locks can be released at any time",
      "A protocol that does not use exclusive locks",
      "A protocol that allows deadlocks"
    ],
    correct: 0,
    justification: "Strict two-phase locking requires all locks to be held until the transaction commits or aborts[1]."
  },
  {
    question: "What is a lock point in two-phase locking?",
    code: "",
    choices: [
      "The point where the transaction releases its first lock",
      "The point where the transaction acquires its final lock",
      "The point where the transaction starts",
      "The point where the transaction ends"
    ],
    correct: 1,
    justification: "The lock point is when the transaction acquires its final lock[1]."
  },
  {
    question: "What is the main disadvantage of two-phase locking?",
    code: "",
    choices: [
      "It cannot ensure serializability",
      "It can lead to deadlocks",
      "It does not support concurrent transactions",
      "It is not supported by any DBMS"
    ],
    correct: 1,
    justification: "Two-phase locking can lead to deadlocks, which must be managed separately[1]."
  },
  {
    question: "What is a cascading rollback?",
    code: "",
    choices: [
      "A rollback that affects only the current transaction",
      "A rollback that causes other dependent transactions to be rolled back",
      "A rollback that occurs after a commit",
      "A rollback that only affects read operations"
    ],
    correct: 1,
    justification: "Cascading rollback occurs when one rollback causes other dependent transactions to be rolled back[1]."
  },
  {
    question: "What is the tree protocol in concurrency control?",
    code: "",
    choices: [
      "A protocol that allows only shared locks",
      "A graph-based protocol where locks are acquired following a tree structure",
      "A protocol that prevents all rollbacks",
      "A protocol that uses timestamps"
    ],
    correct: 1,
    justification: "The tree protocol is a graph-based protocol where locks are acquired following a tree structure[1]."
  },
  {
    question: "What is the main advantage of the tree protocol?",
    code: "",
    choices: [
      "It guarantees recoverability",
      "It ensures deadlock freedom and conflict-serializability",
      "It eliminates the need for locks",
      "It is easier to implement than 2PL"
    ],
    correct: 1,
    justification: "The tree protocol ensures conflict-serializability and deadlock freedom[1]."
  },
  {
    question: "What is a disadvantage of the tree protocol?",
    code: "",
    choices: [
      "It does not guarantee recoverability or cascade freedom",
      "It cannot be used in distributed databases",
      "It always results in deadlocks",
      "It is less concurrent than 2PL"
    ],
    correct: 0,
    justification: "The tree protocol does not guarantee recoverability or cascade freedom[1]."
  },
  {
    question: "What is lock granularity?",
    code: "",
    choices: [
      "The size of the data item being locked",
      "The number of locks held by a transaction",
      "The number of transactions in the system",
      "The duration of a lock"
    ],
    correct: 0,
    justification: "Lock granularity refers to the size of the data item being locked, such as database, file, or record[1]."
  }
]
