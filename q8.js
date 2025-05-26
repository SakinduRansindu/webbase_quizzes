export default [
  {
    question: "What is the main difference between a B-tree and a B+-tree?",
    code: "",
    choices: [
      "B-tree stores all keys in leaf nodes only",
      "B+-tree stores data pointers only in leaf nodes, while B-tree stores them in all nodes",
      "B-tree supports only unique keys",
      "B+-tree is always taller than a B-tree"
    ],
    correct: 1,
    justification: "In B+-trees, data pointers are only in leaf nodes; B-trees store them in all nodes."
  },
  {
    question: "Which property is unique to B+-trees compared to other tree structures?",
    code: "",
    choices: [
      "All paths from root to leaf are of equal length",
      "They allow duplicate keys",
      "They do not require balancing",
      "They can only be used for primary keys"
    ],
    correct: 0,
    justification: "B+-trees are balanced: all paths from root to leaf are the same length."
  },
  {
    question: "What triggers a node split in a B+-tree?",
    code: "",
    choices: [
      "A node becomes empty",
      "A node exceeds its maximum allowed entries",
      "A node is deleted",
      "A new root is created"
    ],
    correct: 1,
    justification: "Node splits occur when a node exceeds its maximum number of entries."
  },
  {
    question: "What is the primary reason for using B+-trees in databases?",
    code: "",
    choices: [
      "They require no maintenance",
      "They support efficient insertion, deletion, and range queries",
      "They are easier to implement than hash indices",
      "They do not require balancing"
    ],
    correct: 1,
    justification: "B+-trees support efficient dynamic operations and range queries."
  },
  {
    question: "What happens when a B+-tree root node has only one child after a deletion?",
    code: "",
    choices: [
      "The tree is rebuilt",
      "The root is deleted and the child becomes the new root",
      "All nodes are merged",
      "The tree becomes unbalanced"
    ],
    correct: 1,
    justification: "If the root has only one child after deletion, the child becomes the new root."
  },
  {
    question: "Which of the following is an advantage of B+-tree file organization?",
    code: "",
    choices: [
      "Records are stored only in non-leaf nodes",
      "It prevents file fragmentation",
      "It enables efficient sequential access to records",
      "It requires fewer disk accesses than a hash index"
    ],
    correct: 2,
    justification: "B+-tree file organization allows efficient sequential access via leaf node links."
  },
  {
    question: "What is a bucket in the context of hash file organization?",
    code: "",
    choices: [
      "A single record",
      "A unit of storage containing one or more records",
      "A pointer to a B+-tree node",
      "A type of index"
    ],
    correct: 1,
    justification: "A bucket is a storage unit (often a disk block) containing records."
  },
  {
    question: "What is a primary drawback of static hashing?",
    code: "",
    choices: [
      "It cannot handle duplicate keys",
      "It does not support dynamic file growth efficiently",
      "It is slower than sequential file access",
      "It cannot be used for indexing"
    ],
    correct: 1,
    justification: "Static hashing does not handle file growth or shrinkage well."
  },
  {
    question: "What is overflow chaining in hashing?",
    code: "",
    choices: [
      "Linking overflow buckets in a list",
      "Splitting hash buckets",
      "Merging hash buckets",
      "Deleting empty buckets"
    ],
    correct: 0,
    justification: "Overflow chaining links overflow buckets in a chain for handling collisions."
  },
  {
    question: "Which type of index is best for supporting range queries?",
    code: "",
    choices: [
      "Hash index",
      "Bitmap index",
      "B+-tree index",
      "Dense index"
    ],
    correct: 2,
    justification: "B+-tree indices are preferred for range queries due to their ordered structure."
  }
]
