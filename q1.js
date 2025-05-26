export default [
  {
    question: "What is the main purpose of query optimization in relational databases?",
    code: "",
    choices: [
      "To minimize memory usage",
      "To improve SQL syntax",
      "To find the most efficient way to execute a query",
      "To generate views automatically"
    ],
    correct: 2,
    justification: "Query optimization identifies the most efficient execution plan for a query to enhance performance."
  },
  {
    question: "Which component translates a SQL query into a relational algebra expression?",
    code: "",
    choices: [
      "Execution engine",
      "Parser & Translator",
      "Optimizer",
      "Catalog Manager"
    ],
    correct: 1,
    justification: "The parser checks syntax and translates the query into an internal relational algebra expression."
  },
  {
    question: "What is the primary objective of the query optimizer?",
    code: "",
    choices: [
      "To generate random query plans",
      "To improve UI responsiveness",
      "To improve performance and efficiency",
      "To clean up duplicate queries"
    ],
    correct: 2,
    justification: "The optimizer selects the most cost-effective plan to improve performance."
  },
  {
    question: "Which cost factor is predominantly considered during query optimization?",
    code: "",
    choices: [
      "CPU usage",
      "Network latency",
      "Memory bandwidth",
      "Disk I/O"
    ],
    correct: 3,
    justification: "Disk I/O is typically the highest cost in query processing, so it is the main factor considered."
  },
  {
    question: "What does the system use to estimate selectivity of an attribute A in relation R?",
    code: "",
    choices: [
      "V(A,R)",
      "FR",
      "SC(A,R) = NR/V(A,R)",
      "BR/NR"
    ],
    correct: 2,
    justification: "Selectivity SC(A,R) is estimated as the number of tuples NR divided by distinct values V(A,R)."
  },
  {
    question: "What happens during the optimization stage in query processing?",
    code: "",
    choices: [
      "The query is parsed for syntax errors",
      "The cheapest execution plan is selected",
      "The results are written to disk",
      "Statistics are deleted"
    ],
    correct: 1,
    justification: "The optimizer selects the most efficient (cheapest) execution plan based on cost estimation."
  },
  {
    question: "Which value in system catalog refers to number of tuples in a relation R?",
    code: "",
    choices: [
      "FR",
      "NR",
      "BR",
      "SC"
    ],
    correct: 1,
    justification: "NR represents the number of tuples in relation R."
  },
  {
    question: "Why is disk access considered a major factor in query cost?",
    code: "",
    choices: [
      "It is very fast",
      "It consumes less CPU",
      "It is slower and costlier compared to memory operations",
      "It doesn’t affect performance"
    ],
    correct: 2,
    justification: "Disk access is slower and more expensive than memory operations, making it the dominant cost."
  },
  {
    question: "What is the ratio of total I/Os in Plan 1 to Plan 2 in the optimization example?",
    code: "",
    choices: [
      "1:1",
      "10:1",
      "102:1",
      "1000:1"
    ],
    correct: 2,
    justification: "Plan 1 had 1,020,000 I/Os and Plan 2 had 10,100 I/Os, so the ratio is 102:1."
  },
  {
    question: "Which of the following should be avoided during query planning?",
    code: "",
    choices: [
      "Early selection operations",
      "Using indexes for joins",
      "Cartesian products",
      "Projection before joins"
    ],
    correct: 2,
    justification: "Cartesian products can create large intermediate results and should be avoided."
  }
];
