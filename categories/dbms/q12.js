export default [
  {
    question: "What is the primary purpose of indexing in a database?",
    code: "",
    choices: [
      "To reduce storage requirements",
      "To speed up data retrieval",
      "To enforce data integrity",
      "To simplify database design"
    ],
    correct: 1,
    justification: "Indexing is used to speed up the retrieval of data."
  },
  {
    question: "What is a search key in the context of indexing?",
    code: "",
    choices: [
      "A unique identifier for each record",
      "An attribute or set of attributes used to look up records",
      "A pointer to a data block",
      "A type of index"
    ],
    correct: 1,
    justification: "A search key is an attribute or set of attributes used to locate records."
  },
  {
    question: "What is a primary index?",
    code: "",
    choices: [
      "An index built on a non-key attribute",
      "An index whose search key specifies the sequential order of the file",
      "An index that is always dense",
      "An index used only for secondary storage"
    ],
    correct: 1,
    justification: "A primary index's search key determines the file's sequential order."
  },
  {
    question: "Which type of index is used when the search key is not the file's ordering key?",
    code: "",
    choices: [
      "Primary index",
      "Secondary index",
      "Dense index",
      "Sparse index"
    ],
    correct: 1,
    justification: "Secondary indices are built on attributes other than the file's ordering key."
  },
  {
    question: "What is the main advantage of using a multilevel index?",
    code: "",
    choices: [
      "It supports variable-length records",
      "It reduces the number of disk accesses for index lookups",
      "It eliminates the need for primary indices",
      "It allows duplicate keys"
    ],
    correct: 1,
    justification: "Multilevel indices reduce disk accesses by indexing the index."
  },
  {
    question: "What is the purpose of a composite search key?",
    code: "",
    choices: [
      "To enforce referential integrity",
      "To allow efficient access for queries involving multiple attributes",
      "To reduce index size",
      "To prevent duplicate entries"
    ],
    correct: 1,
    justification: "Composite keys allow efficient querying on multiple attributes."
  },
  {
    question: "What is a covering index?",
    code: "",
    choices: [
      "An index that includes extra attributes to answer some queries without accessing the data file",
      "An index that covers all records in the database",
      "An index used only for security",
      "An index that prevents duplicate entries"
    ],
    correct: 0,
    justification: "A covering index includes extra attributes to answer queries directly."
  },
  {
    question: "How does a hash index differ from an ordered index?",
    code: "",
    choices: [
      "Hash indices support efficient range queries",
      "Ordered indices are faster for point queries",
      "Hash indices are better for retrieving records with a specified key value",
      "Ordered indices use less space"
    ],
    correct: 2,
    justification: "Hash indices are generally faster for retrieving records with a specific key."
  },
  {
    question: "Which SQL command is used to create an index?",
    code: "",
    choices: [
      "CREATE INDEX",
      "ADD INDEX",
      "MAKE INDEX",
      "NEW INDEX"
    ],
    correct: 0,
    justification: "The SQL command to create an index is CREATE INDEX."
  },
  {
    question: "What is a potential drawback of using too many indices on a table?",
    code: "",
    choices: [
      "It speeds up all queries",
      "It increases overhead for insertions and deletions",
      "It prevents range queries",
      "It makes the table read-only"
    ],
    correct: 1,
    justification: "Too many indices increase maintenance overhead during data modifications."
  }
]
