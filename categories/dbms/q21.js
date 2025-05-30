export default [
  {
    question: "What is a timestamp-based concurrency control protocol?",
    code: "",
    choices: [
      "A protocol that uses locks for concurrency control",
      "A protocol that uses transaction timestamps to order operations",
      "A protocol that prevents all rollbacks",
      "A protocol that uses only shared locks"
    ],
    correct: 1,
    justification: "Timestamp-based protocols use transaction timestamps to order operations and ensure serializability[1]."
  },
  {
    question: "What is a read timestamp (RTS) for a data item?",
    code: "",
    choices: [
      "The largest timestamp of any transaction that read the item",
      "The time when the item was created",
      "The timestamp of the last write operation",
      "The timestamp of the last lock"
    ],
    correct: 0,
    justification: "RTS is the largest timestamp of any transaction that read the item[1]."
  },
  {
    question: "What happens if a transaction tries to read a data item with a newer write timestamp than its own?",
    code: "",
    choices: [
      "The read is allowed",
      "The transaction is rolled back",
      "The transaction is committed",
      "The data item is deleted"
    ],
    correct: 1,
    justification: "If a transaction tries to read a data item with a newer write timestamp, it is rolled back[1]."
  },
  {
    question: "What is a write timestamp (WTS) for a data item?",
    code: "",
    choices: [
      "The largest timestamp of any transaction that wrote the item",
      "The timestamp of the last read operation",
      "The time when the item was created",
      "The timestamp of the last lock"
    ],
    correct: 0,
    justification: "WTS is the largest timestamp of any transaction that wrote the item[1]."
  },
  {
    question: "What is the main advantage of timestamp ordering protocols?",
    code: "",
    choices: [
      "They guarantee serializability and deadlock freedom",
      "They eliminate the need for concurrency control",
      "They always prevent rollbacks",
      "They are easier to implement than locks"
    ],
    correct: 0,
    justification: "Timestamp ordering protocols guarantee serializability and are deadlock-free[1]."
  },
  {
    question: "What is a disadvantage of timestamp ordering protocols?",
    code: "",
    choices: [
      "They may not be cascade-free or recoverable",
      "They require explicit locks",
      "They are slower than all other protocols",
      "They cannot be used in distributed systems"
    ],
    correct: 0,
    justification: "Timestamp ordering protocols may not be cascade-free or recoverable[1]."
  },
  {
    question: "What is optimistic (validation-based) concurrency control?",
    code: "",
    choices: [
      "A protocol that assumes conflicts are rare and validates transactions before commit",
      "A protocol that uses only exclusive locks",
      "A protocol that prevents all rollbacks",
      "A protocol that requires all locks to be acquired in advance"
    ],
    correct: 0,
    justification: "Optimistic concurrency control assumes conflicts are rare and validates transactions before commit[1]."
  },
  {
    question: "In optimistic concurrency control, what happens during the validation phase?",
    code: "",
    choices: [
      "The transaction is always committed",
      "The transaction is checked for conflicts before updates are applied",
      "The transaction is rolled back immediately",
      "All locks are released"
    ],
    correct: 1,
    justification: "During validation, the transaction is checked for conflicts before updates are applied[1]."
  },
  {
    question: "What is the main benefit of optimistic concurrency control?",
    code: "",
    choices: [
      "It allows high concurrency when conflicts are rare",
      "It prevents all rollbacks",
      "It eliminates the need for validation",
      "It is always faster than locking"
    ],
    correct: 0,
    justification: "Optimistic concurrency control allows high concurrency if conflicts are rare[1]."
  },
  {
    question: "What is the serializability order in optimistic concurrency control?",
    code: "",
    choices: [
      "The order in which transactions start",
      "The order in which transactions enter the validation phase",
      "The order in which transactions are committed",
      "The order in which locks are acquired"
    ],
    correct: 1,
    justification: "Serializability order is determined by the time transactions enter the validation phase[1]."
  }
];
