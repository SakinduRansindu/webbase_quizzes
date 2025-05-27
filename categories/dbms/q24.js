export default [
  {
    question: "What is the main criterion for classifying physical storage media?",
    code: "",
    choices: [
      "Color and shape",
      "Speed, cost, and reliability",
      "SQL compatibility",
      "User interface"
    ],
    correct: 1,
    justification: "Physical storage media are classified by speed, cost per unit, and reliability[1]."
  },
  {
    question: "Which of the following is an example of volatile storage?",
    code: "",
    choices: [
      "Magnetic disk",
      "Main memory",
      "Optical disk",
      "Magnetic tape"
    ],
    correct: 1,
    justification: "Main memory is volatile storage, losing contents when power is off[1]."
  },
  {
    question: "What is the primary medium for long-term storage of data in databases?",
    code: "",
    choices: [
      "Cache memory",
      "Main memory",
      "Magnetic disk",
      "Optical disk"
    ],
    correct: 2,
    justification: "Magnetic disk is the primary medium for long-term data storage[1]."
  },
  {
    question: "What is the purpose of a disk controller?",
    code: "",
    choices: [
      "To interface between the computer and disk hardware",
      "To store user passwords",
      "To execute SQL queries",
      "To manage user accounts"
    ],
    correct: 0,
    justification: "The disk controller interfaces between the computer and disk hardware[1]."
  },
  {
    question: "What is the average seek time for modern hard disks?",
    code: "",
    choices: [
      "1–2 milliseconds",
      "4–10 milliseconds",
      "100–200 milliseconds",
      "1 second"
    ],
    correct: 1,
    justification: "Average seek time for modern hard disks is 4–10 milliseconds[1]."
  },
  {
    question: "What is a block in the context of disk storage?",
    code: "",
    choices: [
      "A SQL statement",
      "A contiguous sequence of sectors transferred as a unit",
      "A user account",
      "A database trigger"
    ],
    correct: 1,
    justification: "A block is a contiguous sequence of sectors transferred as a unit between disk and memory[1]."
  },
  {
    question: "What is the main advantage of using nonvolatile RAM buffers?",
    code: "",
    choices: [
      "They speed up disk writes and protect data during power loss",
      "They reduce disk storage requirements",
      "They eliminate the need for disk controllers",
      "They are cheaper than volatile RAM"
    ],
    correct: 0,
    justification: "Nonvolatile RAM buffers speed up writes and safeguard data during outages[1]."
  },
  {
    question: "What is the main disadvantage of tape storage compared to disk storage?",
    code: "",
    choices: [
      "Lower capacity",
      "Slower access time due to sequential access",
      "Higher cost per unit",
      "Lower reliability"
    ],
    correct: 1,
    justification: "Tape storage is slower due to sequential access, despite high capacity[1]."
  },
  {
    question: "What is the purpose of file defragmentation?",
    code: "",
    choices: [
      "To speed up file access by reducing disk arm movement",
      "To increase file size",
      "To encrypt files",
      "To delete unused files"
    ],
    correct: 0,
    justification: "Defragmentation speeds up access by reducing disk arm movement[1]."
  },
  {
    question: "What is a buffer manager in a DBMS?",
    code: "",
    choices: [
      "A component that allocates buffer space in main memory for disk blocks",
      "A user account manager",
      "A SQL query optimizer",
      "A disk controller"
    ],
    correct: 0,
    justification: "The buffer manager allocates main memory for disk blocks and manages their access[1]."
  }
]
