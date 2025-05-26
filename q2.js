export default [
  {
    question: "What is the first step in Query Execution Plan 1 (unoptimized)?",
    code: "",
    choices: [
      "Project Student names",
      "Join Student and Lending on StudNo",
      "Select Lending rows for Book B1",
      "Sort the tuples by BookNo"
    ],
    correct: 1,
    justification: "Plan 1 starts by performing a join between Student and Lending."
  },
  {
    question: "How many I/O operations occur during the join in Plan 1?",
    code: "",
    choices: [
      "10,000",
      "100,000",
      "1,000,000",
      "1,010,000"
    ],
    correct: 3,
    justification: "100 students × 10,000 lending records = 1,000,000 + 10,000 writes = 1,010,000 I/Os."
  },
  {
    question: "How many tuples are selected for BookNo = 'B1' after the join in Plan 1?",
    code: "",
    choices: [
      "10",
      "50",
      "100",
      "10,000"
    ],
    correct: 1,
    justification: "Only 50 Lending records match BookNo = 'B1'."
  },
  {
    question: "What is the total number of I/Os in Query Plan 1?",
    code: "",
    choices: [
      "10,000",
      "100,000",
      "1,020,000",
      "1,200,000"
    ],
    correct: 2,
    justification: "Join (1,010,000) + Select (10,000) + Project (0) = 1,020,000 I/Os."
  },
  {
    question: "What is the first operation in Query Plan 2 (optimized)?",
    code: "",
    choices: [
      "Join Student and Lending",
      "Project Student names",
      "Select Lending rows for Book B1",
      "Sort Lending by BookNo"
    ],
    correct: 2,
    justification: "Plan 2 begins by filtering Lending rows for BookNo = 'B1'."
  },
  {
    question: "How many I/Os are used for the select operation in Plan 2?",
    code: "",
    choices: [
      "0",
      "50",
      "100",
      "10,000"
    ],
    correct: 3,
    justification: "All 10,000 Lending records must be scanned to filter for Book B1."
  },
  {
    question: "What is the total number of I/Os in Query Plan 2?",
    code: "",
    choices: [
      "10,000",
      "10,050",
      "10,100",
      "1,020,000"
    ],
    correct: 2,
    justification: "Select (10,000) + Join (100) = 10,100 total I/Os."
  },
  {
    question: "What is the performance ratio of Plan 1 to Plan 2?",
    code: "",
    choices: [
      "10:1",
      "20:1",
      "100:1",
      "102:1"
    ],
    correct: 3,
    justification: "Plan 1: 1,020,000 I/Os vs. Plan 2: 10,100 I/Os → 102:1 ratio."
  },
  {
    question: "Which principle helps reduce intermediate tuple count?",
    code: "",
    choices: [
      "Perform joins before selects",
      "Use Cartesian products",
      "Perform selects before joins",
      "Use more relations"
    ],
    correct: 2,
    justification: "Selecting early reduces the number of tuples involved in joins."
  },
  {
    question: "Which optimization stage produces query trees and algebra expressions?",
    code: "",
    choices: [
      "Evaluation",
      "Parsing and Translating",
      "Catalog Lookup",
      "Physical Storage"
    ],
    correct: 1,
    justification: "The Parser & Translator convert SQL into internal relational algebra form."
  }
];
