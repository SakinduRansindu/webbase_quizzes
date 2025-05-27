export default [
  {
    question: "Which scheduling algorithm gives the minimum average waiting time?",
    code: "",
    choices: [
      "First Come First Serve (FCFS)",
      "Shortest Job First (SJF)",
      "Round Robin",
      "Priority Scheduling"
    ],
    correct: 1,
    justification: "Shortest Job First (SJF) scheduling is proven to give the minimum average waiting time for a given set of processes."
  },
  {
    question: "What is thrashing in operating systems?",
    code: "",
    choices: [
      "A situation where the CPU utilization is very high",
      "A situation where the CPU spends more time in context switching than execution",
      "A situation where the system spends more time paging than executing",
      "A situation where deadlock occurs frequently"
    ],
    correct: 2,
    justification: "Thrashing occurs when the system spends more time paging (swapping pages between memory and disk) than executing application code, severely degrading system performance."
  },
  {
    question: "Which of the following is NOT a solution to the critical section problem?",
    code: "",
    choices: [
      "Mutex Locks",
      "Peterson's Solution",
      "Round Robin Scheduling",
      "Semaphores"
    ],
    correct: 2,
    justification: "Round Robin is a CPU scheduling algorithm, not a solution to the critical section problem. The other options are synchronization mechanisms used to solve the critical section problem."
  },
  {
    question: "In which memory allocation strategy would the operating system allocate the smallest free partition that is big enough to accommodate a process?",
    code: "",
    choices: [
      "First Fit",
      "Best Fit",
      "Worst Fit",
      "Next Fit"
    ],
    correct: 1,
    justification: "Best Fit allocates the smallest free partition that is large enough to accommodate the process, minimizing wasted space but potentially leading to fragmentation."
  },
  {
    question: "What does the following code demonstrate?",
    code: `
// Process 1
wait(mutex);
// Critical Section
signal(mutex);

// Process 2
wait(mutex);
// Critical Section
signal(mutex);`,
    choices: [
      "Race condition",
      "Deadlock",
      "Mutual exclusion",
      "Starvation"
    ],
    correct: 2,
    justification: "The code demonstrates mutual exclusion using semaphores (wait/signal operations) to ensure that only one process can enter its critical section at a time."
  }
]
