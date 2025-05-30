export default [
  {
    question: "What is the primary advantage of using a B+-tree index for range queries?",
    code: "",
    choices: [
      "B+-tree indices support efficient range queries due to their ordered structure",
      "B+-tree indices require less storage than hash indices",
      "B+-tree indices are faster for point queries",
      "B+-tree indices are only used for unique keys"
    ],
    correct: 0,
    justification: "B+-tree indices are ordered, making them efficient for range queries."
  },
  {
    question: "What is a dense index?",
    code: "",
    choices: [
      "An index with entries for every search-key value in the data file",
      "An index with entries for only some search-key values",
      "An index that stores data in a compressed format",
      "An index that is used only for secondary keys"
    ],
    correct: 0,
    justification: "A dense index contains an entry for every search-key value in the data file."
  },
  {
    question: "Which of the following is true about a sparse index?",
    code: "",
    choices: [
      "It contains entries for every record in the data file",
      "It is always smaller than a dense index",
      "It is used only for non-clustering keys",
      "It cannot be used for primary indices"
    ],
    correct: 1,
    justification: "Sparse indices are smaller because they have fewer entries, typically one per block."
  },
  {
    question: "What is the main purpose of a multilevel index?",
    code: "",
    choices: [
      "To allow indexing of variable-length records",
      "To reduce the number of disk accesses required for index lookups",
      "To support composite keys",
      "To enforce referential integrity"
    ],
    correct: 1,
    justification: "Multilevel indices reduce disk accesses by indexing the index itself."
  },
  {
    question: "How does a secondary index differ from a primary index?",
    code: "",
    choices: [
      "Secondary index is always sparse",
      "Secondary index is always dense and is built on non-clustering keys",
      "Primary index is built on non-key attributes",
      "Secondary index cannot be used for range queries"
    ],
    correct: 1,
    justification: "Secondary indices are dense and built on attributes that are not the file's ordering key."
  },
  {
    question: "What happens when a record is deleted from a file with a dense index?",
    code: "",
    choices: [
      "The corresponding index entry is deleted",
      "Nothing happens to the index",
      "A new index entry is created",
      "The index is rebuilt"
    ],
    correct: 0,
    justification: "In a dense index, the entry for the deleted record is also deleted."
  },
  {
    question: "Which index type is most suitable for attributes with a small number of distinct values?",
    code: "",
    choices: [
      "B+-tree index",
      "Sparse index",
      "Bitmap index",
      "Hash index"
    ],
    correct: 2,
    justification: "Bitmap indices are efficient for attributes with few distinct values."
  },
  {
    question: "What is the effect of inserting a new record into a file with a sparse index?",
    code: "",
    choices: [
      "The index is always updated",
      "The index is updated only if a new block is created",
      "A new index entry is always added",
      "The index entry is deleted"
    ],
    correct: 1,
    justification: "Sparse indices are updated only when a new block is created."
  },
  {
    question: "What is the key benefit of using a composite search key in an index?",
    code: "",
    choices: [
      "It reduces the size of the index",
      "It allows efficient access for queries involving multiple attributes",
      "It is required for all primary keys",
      "It prevents duplicate entries"
    ],
    correct: 1,
    justification: "Composite keys enable efficient querying on multiple attributes."
  },
  {
    question: "Which of the following is a disadvantage of using a secondary index?",
    code: "",
    choices: [
      "It requires more storage space",
      "It is slower for point queries",
      "It cannot be used for range queries",
      "It requires the data file to be sorted"
    ],
    correct: 0,
    justification: "Secondary indices require additional storage and maintenance."
  }
];
