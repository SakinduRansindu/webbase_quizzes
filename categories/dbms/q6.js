export default [
  {
    question: "What are the two possible sources of parallelism in query processing?",
    code: "",
    choices: [
      "Inter-operator and intra-operator parallelism",
      "Sequential and parallel execution",
      "Heuristic and cost-based optimization",
      "Nested-loop and hash join"
    ],
    correct: 0,
    justification: "Inter-operator parallelism (data independent and pipelined) and intra-operator parallelism (like sort) are the two sources of parallelism."
  },
  {
    question: "What is the principle of optimality in dynamic programming for query optimization?",
    code: "",
    choices: [
      "An optimal plan for a set of relations is an extension of an optimal plan for some subset of the set",
      "The cheapest plan is always the best",
      "All plans have equal cost",
      "Dynamic programming always finds the global optimum"
    ],
    correct: 0,
    justification: "The principle of optimality states that an optimal plan for a set of relations is an extension of an optimal plan for some subset."
  },
  {
    question: "What is a major limitation of dynamic programming in query optimization?",
    code: "",
    choices: [
      "It assumes a total order of plans which may not hold for response time",
      "It always finds the best plan",
      "It ignores cost functions",
      "It only works for single table queries"
    ],
    correct: 0,
    justification: "Dynamic programming assumes a total order of plans, which may not hold for response time, causing failure in some cases."
  },
  {
    question: "What are the two main types of query optimization in Oracle DBMS?",
    code: "",
    choices: [
      "Rule-based and cost-based optimization",
      "Heuristic and semantic optimization",
      "Dynamic and static optimization",
      "Parallel and sequential optimization"
    ],
    correct: 0,
    justification: "Oracle DBMS uses rule-based (being phased out) and cost-based query optimization."
  },
  {
    question: "What is the role of application developer hints in Oracle query optimization?",
    code: "",
    choices: [
      "To provide additional information about data to the optimizer",
      "To disable optimization",
      "To force sequential scan",
      "To create indexes automatically"
    ],
    correct: 0,
    justification: "Application developers can provide hints to the optimizer to improve plan selection based on their knowledge of the data."
  },
  {
    question: "What is the main goal of semantic query optimization?",
    code: "",
    choices: [
      "To use constraints to transform queries into more efficient ones",
      "To rewrite queries in relational algebra",
      "To execute queries in parallel",
      "To cache query results"
    ],
    correct: 0,
    justification: "Semantic query optimization uses schema constraints to rewrite queries for efficiency."
  },
  {
    question: "Which of the following is an example of a heuristic rule in query optimization?",
    code: "",
    choices: [
      "Perform selections and projections as early as possible",
      "Always use nested-loop join",
      "Ignore indexes",
      "Execute queries sequentially"
    ],
    correct: 0,
    justification: "Heuristic optimization tries to push selections and projections down the query tree early to reduce intermediate results."
  },
  {
    question: "What is the main difference between inter-operator and intra-operator parallelism?",
    code: "",
    choices: [
      "Inter-operator parallelism runs different operators in parallel; intra-operator parallelism parallelizes a single operator",
      "Inter-operator parallelism is sequential; intra-operator is parallel",
      "Inter-operator uses indexes; intra-operator uses hashing",
      "They are the same"
    ],
    correct: 0,
    justification: "Inter-operator parallelism runs different operators concurrently; intra-operator parallelism splits a single operator's work."
  },
  {
    question: "What is a left-deep join tree in query optimization?",
    code: "",
    choices: [
      "A binary tree where the right child of each non-leaf node is always a base relation",
      "A tree with only left children",
      "A tree optimized for parallel execution",
      "A tree with no joins"
    ],
    correct: 0,
    justification: "Left-deep trees have the right child as a base relation, facilitating pipelining and efficient join orderings."
  },
  {
    question: "What is the main challenge addressed by dynamic programming in query optimization?",
    code: "",
    choices: [
      "Finding the optimal join order among many possibilities",
      "Parsing SQL queries",
      "Executing queries in parallel",
      "Caching query results"
    ],
    correct: 0,
    justification: "Dynamic programming helps find the optimal join order among many possible join sequences."
  }
]
