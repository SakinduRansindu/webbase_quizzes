export default [
  {
    question: "What is the time complexity of binary search?",
    code: "",
    choices: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correct: 1,
    justification: "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity."
  },
  {
    question: "Which data structure uses LIFO (Last In First Out) principle?",
    code: "",
    choices: [
      "Queue",
      "Stack",
      "Linked List",
      "Binary Tree"
    ],
    correct: 1,
    justification: "Stack follows LIFO (Last In First Out) principle, where the last element added is the first one to be removed."
  },
  {
    question: "What is the worst-case time complexity of quick sort?",
    code: "",
    choices: [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(2^n)"
    ],
    correct: 2,
    justification: "While quicksort has an average time complexity of O(n log n), its worst-case time complexity is O(n²) when the pivot selection repeatedly results in highly unbalanced partitions."
  },
  {
    question: "Which of these is not an efficient data structure for implementing a priority queue?",
    code: "",
    choices: [
      "Binary Heap",
      "Fibonacci Heap",
      "Linked List",
      "Binary Search Tree"
    ],
    correct: 2,
    justification: "A regular linked list is not efficient for priority queue operations as it would require O(n) time for insertion or extraction of the minimum/maximum element."
  },
  {
    question: "What does the following code snippet do?",
    code: `
function mystery(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    mystery(arr, left, mid);
    mystery(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}`,
    choices: [
      "Bubble Sort",
      "Merge Sort",
      "Quick Sort",
      "Insertion Sort"
    ],
    correct: 1,
    justification: "The code implements the Merge Sort algorithm. It recursively divides the array in half, sorts each half, and then merges them back together."
  }
]
