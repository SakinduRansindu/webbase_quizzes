export default [
  {
    question: "What is the primary function of a buffer manager in a DBMS?",
    code: "",
    choices: [
      "To allocate buffer space in main memory for disk blocks",
      "To manage user accounts",
      "To store SQL queries",
      "To enforce referential integrity"
    ],
    correct: 0,
    justification: "The buffer manager allocates main memory for disk blocks and manages their access."
  },
  {
    question: "Which of the following is a characteristic of volatile storage?",
    code: "",
    choices: [
      "Contents persist after power loss",
      "Contents are lost when power is switched off",
      "It is slower than non-volatile storage",
      "It is used for long-term data storage"
    ],
    correct: 1,
    justification: "Volatile storage loses its contents when power is lost."
  },
  {
    question: "What is the typical unit of data transfer between disk and main memory?",
    code: "",
    choices: [
      "Record",
      "Block",
      "File",
      "Sector"
    ],
    correct: 1,
    justification: "Data is transferred between disk and main memory in blocks."
  },
  {
    question: "Which storage medium is considered primary storage?",
    code: "",
    choices: [
      "Magnetic disk",
      "Main memory",
      "Optical disk",
      "Magnetic tape"
    ],
    correct: 1,
    justification: "Main memory is primary storage: fast but volatile."
  },
  {
    question: "What is the purpose of a slotted page structure?",
    code: "",
    choices: [
      "To store variable-length records efficiently",
      "To store only fixed-length records",
      "To manage index entries",
      "To store only metadata"
    ],
    correct: 0,
    justification: "Slotted page structures are used for efficient storage and management of variable-length records."
  },
  {
    question: "Which file organization is best suited for sequential processing of all records?",
    code: "",
    choices: [
      "Heap file organization",
      "Sequential file organization",
      "Hashed file organization",
      "Clustered file organization"
    ],
    correct: 1,
    justification: "Sequential file organization is ideal for sequential processing."
  },
  {
    question: "What is a free list in the context of file storage?",
    code: "",
    choices: [
      "A list of all used records",
      "A list of available spaces for new records",
      "A list of all files in the database",
      "A list of deleted files"
    ],
    correct: 1,
    justification: "A free list tracks available spaces for inserting new records."
  },
  {
    question: "Which of the following is NOT an advantage of using a buffer?",
    code: "",
    choices: [
      "Reduces disk I/O",
      "Allows faster data access",
      "Increases disk fragmentation",
      "Improves performance"
    ],
    correct: 2,
    justification: "Buffers do not increase disk fragmentation; they help reduce I/O and improve performance."
  },
  {
    question: "What is the main purpose of a data dictionary (system catalog)?",
    code: "",
    choices: [
      "To store user data",
      "To store metadata about the database",
      "To store SQL queries",
      "To store backup files"
    ],
    correct: 1,
    justification: "The data dictionary stores metadata about database objects, users, and statistics."
  },
  {
    question: "Which of the following is a typical component stored in a data dictionary?",
    code: "",
    choices: [
      "Table names and attribute types",
      "User passwords in plain text",
      "Backup files",
      "SQL query logs"
    ],
    correct: 0,
    justification: "The data dictionary stores information about tables, attributes, and other metadata."
  }
]
