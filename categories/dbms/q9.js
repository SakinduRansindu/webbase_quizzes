export default [
  {
    question: "What is the main benefit of dynamic hashing over static hashing?",
    code: "",
    choices: [
      "Dynamic hashing supports efficient file growth and shrinkage",
      "Dynamic hashing is faster for all queries",
      "Dynamic hashing uses less memory",
      "Dynamic hashing does not require a hash function"
    ],
    correct: 0,
    justification: "Dynamic hashing adjusts to file size changes efficiently."
  },
  {
    question: "What is the purpose of the bucket address table in extendable hashing?",
    code: "",
    choices: [
      "To store the actual records",
      "To map hash prefixes to buckets",
      "To store overflow records",
      "To maintain the order of records"
    ],
    correct: 1,
    justification: "The bucket address table maps hash prefixes to their corresponding buckets."
  },
  {
    question: "When does a bucket split occur in extendable hashing?",
    code: "",
    choices: [
      "When a bucket overflows",
      "When a bucket is empty",
      "When a new hash function is defined",
      "When the table is full"
    ],
    correct: 0,
    justification: "A bucket split occurs when a bucket overflows due to insertion."
  },
  {
    question: "What is coalescing in extendable hashing?",
    code: "",
    choices: [
      "Combining two empty buckets",
      "Merging two buckets with the same hash prefix after deletions",
      "Splitting a bucket",
      "Rebuilding the hash function"
    ],
    correct: 1,
    justification: "Coalescing merges buckets with the same prefix when they become empty."
  },
  {
    question: "What is a potential disadvantage of extendable hashing?",
    code: "",
    choices: [
      "The bucket address table can become very large",
      "It cannot handle duplicate keys",
      "It is slower than static hashing",
      "It does not support deletions"
    ],
    correct: 0,
    justification: "The bucket address table may grow large and exceed memory."
  },
  {
    question: "Which indexing method is generally better for retrieving records with a specified key value?",
    code: "",
    choices: [
      "Ordered indexing",
      "Hashing",
      "Bitmap indexing",
      "Multilevel indexing"
    ],
    correct: 1,
    justification: "Hashing is generally faster for retrieving records with a specified key."
  },
  {
    question: "Why are ordered indices preferred for range queries?",
    code: "",
    choices: [
      "They are easier to implement",
      "They support efficient sequential access",
      "They use less space",
      "They do not require balancing"
    ],
    correct: 1,
    justification: "Ordered indices allow efficient access to records within a range."
  },
  {
    question: "What is a bitmap index best suited for?",
    code: "",
    choices: [
      "Attributes with many distinct values",
      "Attributes with few distinct values",
      "Range queries",
      "Composite keys"
    ],
    correct: 1,
    justification: "Bitmap indices are efficient for attributes with a small number of distinct values."
  },
  {
    question: "What operation is performed using bitwise operations in bitmap indices?",
    code: "",
    choices: [
      "Sorting",
      "Range selection",
      "Set operations like AND, OR, NOT",
      "Hashing"
    ],
    correct: 2,
    justification: "Bitmap indices use bitwise operations for set operations."
  },
  {
    question: "What is the main disadvantage of using a bitmap index?",
    code: "",
    choices: [
      "They are slow for point queries",
      "They use excessive space for attributes with many values",
      "They cannot be used with SQL",
      "They do not support deletions"
    ],
    correct: 1,
    justification: "Bitmap indices become large and inefficient for attributes with many distinct values."
  }
];
