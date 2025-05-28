
export default [
  {
    question: "Which of the following is a key difference between linear and non-linear data structures?",
    code: "",
    choices: [
      "Linear data structures are always implemented using arrays, non-linear with nodes.",
      "Linear data structures arrange elements sequentially, non-linear structures arrange elements hierarchically.",
      "Non-linear data structures cannot be traversed.",
      "Non-linear data structures do not support insertion and deletion."
    ],
    correct: 1,
    justification: "Linear data structures (like arrays, stacks, queues) arrange elements in a sequence, while non-linear data structures (like trees, graphs) arrange elements in a hierarchical or networked fashion. The other options are incorrect or misleading: both types can use arrays or nodes, non-linear structures can be traversed, and both support insertion and deletion, though the methods differ."
  },
  {
    question: "What is the root node in a tree data structure?",
    code: "",
    choices: [
      "A node with no children.",
      "A node with no parent.",
      "Any internal node.",
      "Any leaf node."
    ],
    correct: 1,
    justification: "The root node is the topmost node in a tree and does not have any parent. Leaf nodes have no children, and internal nodes have at least one child but may not be the root."
  },
  {
    question: "Which of the following nodes are called siblings in a tree?",
    code: "",
    choices: [
      "Nodes that have the same parent.",
      "Nodes that are on the same level.",
      "Nodes that have the same child.",
      "Nodes that are both leaves."
    ],
    correct: 0,
    justification: "Siblings in a tree are nodes that share the same parent. Nodes on the same level may not share a parent, and having the same child is not possible in a tree structure."
  },
  {
    question: "What is the height of a tree?",
    code: "",
    choices: [
      "The number of nodes in the tree.",
      "The length of the longest path from the root to a leaf.",
      "The number of edges from the root to the nearest leaf.",
      "The number of internal nodes."
    ],
    correct: 1,
    justification: "Height is defined as the length of the longest path from the root to a leaf node. The number of nodes and internal nodes are different concepts, and the shortest path would not define height."
  },
  {
    question: "Which of the following best describes a complete tree?",
    code: "",
    choices: [
      "All internal nodes have exactly two children.",
      "All levels are completely filled except possibly the last, and all nodes in the last level are as far left as possible.",
      "All leaves are at the same level.",
      "Every node has either 0 or n children."
    ],
    correct: 1,
    justification: "A complete tree is filled at all levels except possibly the last, and all nodes in the last level are as far left as possible. The other options describe full or perfect trees."
  },
  {
    question: "Which of the following is NOT a characteristic of an AVL tree?",
    code: "",
    choices: [
      "It is a self-balancing binary search tree.",
      "The heights of the two child subtrees of any node differ by at most one.",
      "It allows each node to have more than two children.",
      "It maintains logarithmic height for efficient operations."
    ],
    correct: 2,
    justification: "AVL trees are binary search trees, so each node has at most two children. The other statements are true for AVL trees."
  },
  {
    question: "In an array-based implementation of a binary tree, if a node is at index i, what is the index of its right child?",
    code: "",
    choices: [
      "2*i",
      "2*i + 1",
      "2*i + 2",
      "i + 1"
    ],
    correct: 2,
    justification: "For an array-based binary tree, the left child is at 2*i + 1 and the right child is at 2*i + 2. The other options are either for the left child or incorrect."
  },
  {
    question: "Which tree type is most suitable for storing a dynamic set of strings with common prefixes?",
    code: "",
    choices: [
      "Binary Search Tree",
      "AVL Tree",
      "Trie (Prefix Tree)",
      "Heap"
    ],
    correct: 2,
    justification: "A Trie (Prefix Tree) is specifically designed for storing strings with common prefixes efficiently. BSTs and AVL trees do not exploit common prefixes, and heaps are used for priority queues."
  },
  {
    question: "What is a key disadvantage of array-based tree implementations for sparse trees?",
    code: "",
    choices: [
      "Difficult to implement.",
      "Wasteful space due to allocation for unused nodes.",
      "Cannot access elements by index.",
      "Pointer chasing is required."
    ],
    correct: 1,
    justification: "Array-based implementations can waste space for sparse trees because memory is allocated for all possible positions, even if many are unused. The other options are incorrect: arrays are simple to implement, allow direct access, and do not need pointer chasing."
  },
  {
    question: "Which of the following statements about node-based tree implementations is TRUE?",
    code: "",
    choices: [
      "They are always more memory-efficient than array-based implementations.",
      "They allow dynamic allocation and variable branching.",
      "They cannot represent complete trees.",
      "They do not require pointers or references."
    ],
    correct: 1,
    justification: "Node-based implementations allow dynamic allocation and variable branching, making them suitable for irregular or sparse trees. They may have more memory overhead due to pointers, can represent any tree (including complete trees), and do require pointers or references."
  }
]

