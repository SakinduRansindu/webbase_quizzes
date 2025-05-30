export default [
  {
    question: "What is an intention lock in multiple granularity locking?",
    code: "",
    choices: [
      "A lock that indicates a transaction intends to acquire a lock at a lower level",
      "A lock that prevents all access",
      "A lock that is only used for exclusive access",
      "A lock that is automatically released after a read"
    ],
    correct: 0,
    justification: "Intention locks indicate a transaction's intention to acquire locks at a lower level in the hierarchy[1]."
  },
  {
    question: "Which lock mode allows both shared and exclusive locks at lower levels?",
    code: "",
    choices: [
      "IS (Intention Shared)",
      "IX (Intention Exclusive)",
      "SIX (Shared and Intention Exclusive)",
      "X (Exclusive)"
    ],
    correct: 2,
    justification: "SIX allows a shared lock at the current level and exclusive locks at lower levels[1]."
  },
  {
    question: "What is a compatibility matrix in locking protocols?",
    code: "",
    choices: [
      "A table showing which lock modes are compatible with each other",
      "A list of all locks in the system",
      "A list of all transactions",
      "A table of user privileges"
    ],
    correct: 0,
    justification: "A compatibility matrix shows which lock modes can coexist on the same data item[1]."
  },
  {
    question: "What is a wait-for graph used for in deadlock detection?",
    code: "",
    choices: [
      "To track disk usage",
      "To represent transactions waiting for locks held by others",
      "To schedule queries",
      "To manage buffer space"
    ],
    correct: 1,
    justification: "A wait-for graph represents transactions waiting for locks held by others and is used for deadlock detection[1]."
  },
  {
    question: "How is a deadlock detected using a wait-for graph?",
    code: "",
    choices: [
      "By checking for cycles in the graph",
      "By counting the number of locks",
      "By monitoring transaction durations",
      "By tracking buffer usage"
    ],
    correct: 0,
    justification: "A deadlock is detected if there is a cycle in the wait-for graph[1]."
  },
  {
    question: "What is the wait-die scheme in deadlock prevention?",
    code: "",
    choices: [
      "Older transactions wait, younger ones are rolled back",
      "Younger transactions wait, older ones are rolled back",
      "All transactions wait",
      "All transactions are rolled back"
    ],
    correct: 0,
    justification: "In the wait-die scheme, older transactions wait and younger ones are rolled back[1]."
  },
  {
    question: "What is the wound-wait scheme in deadlock prevention?",
    code: "",
    choices: [
      "Older transactions force younger ones to roll back",
      "Younger transactions force older ones to roll back",
      "All transactions wait",
      "No transactions are rolled back"
    ],
    correct: 0,
    justification: "In the wound-wait scheme, older transactions force younger ones to roll back[1]."
  },
  {
    question: "What is the main goal of deadlock recovery?",
    code: "",
    choices: [
      "To prevent all deadlocks",
      "To break deadlocks by rolling back one or more transactions",
      "To speed up all transactions",
      "To avoid all rollbacks"
    ],
    correct: 1,
    justification: "Deadlock recovery breaks deadlocks by rolling back one or more transactions[1]."
  },
  {
    question: "What is starvation in deadlock recovery?",
    code: "",
    choices: [
      "When a transaction is repeatedly chosen as a victim and never completes",
      "When a transaction completes successfully",
      "When a transaction is committed",
      "When a transaction is aborted due to a system crash"
    ],
    correct: 0,
    justification: "Starvation occurs when a transaction is repeatedly chosen as a victim and never completes[1]."
  },
  {
    question: "Which of the following is a disadvantage of using only deadlock detection?",
    code: "",
    choices: [
      "It may allow deadlocks to occur before resolving them",
      "It prevents all deadlocks",
      "It eliminates the need for locks",
      "It speeds up transaction processing"
    ],
    correct: 0,
    justification: "Deadlock detection allows deadlocks to occur before resolving them, which can impact performance[1]."
  }
];
