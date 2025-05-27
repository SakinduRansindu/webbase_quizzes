export default [
  {
    question: "What is RAID in disk systems?",
    code: "",
    choices: [
      "A type of file system",
      "Redundant Arrays of Independent Disks for reliability and performance",
      "A database query language",
      "A type of index"
    ],
    correct: 1,
    justification: "RAID stands for Redundant Arrays of Independent Disks, providing reliability and performance[1]."
  },
  {
    question: "What is disk mirroring?",
    code: "",
    choices: [
      "Storing data on a single disk",
      "Duplicating every disk for redundancy",
      "Splitting data across multiple disks",
      "Storing data in memory"
    ],
    correct: 1,
    justification: "Mirroring duplicates every disk to provide redundancy and prevent data loss[1]."
  },
  {
    question: "What is disk striping?",
    code: "",
    choices: [
      "Storing data sequentially on one disk",
      "Splitting data across multiple disks for parallel access",
      "Duplicating data for backup",
      "Storing data in cache memory"
    ],
    correct: 1,
    justification: "Disk striping splits data across disks for better throughput and parallel access[1]."
  },
  {
    question: "What is hot swapping in RAID systems?",
    code: "",
    choices: [
      "Replacing disks while the system is running",
      "Cooling disks during operation",
      "Swapping memory modules",
      "Rebooting the system to replace disks"
    ],
    correct: 0,
    justification: "Hot swapping allows replacing failed disks without shutting down the system[1]."
  },
  {
    question: "What is the main advantage of hardware RAID over software RAID?",
    code: "",
    choices: [
      "Requires no special hardware",
      "Provides better performance and reliability",
      "Is easier to configure",
      "Uses more CPU resources"
    ],
    correct: 1,
    justification: "Hardware RAID offers better performance and reliability than software RAID[1]."
  },
  {
    question: "What is the main risk of not using journaling file systems?",
    code: "",
    choices: [
      "Data corruption during power failure",
      "Increased performance",
      "Reduced storage space",
      "Improved reliability"
    ],
    correct: 0,
    justification: "Without journaling, file systems risk corruption if power fails during writes[1]."
  },
  {
    question: "What is the typical block size used in modern disk systems?",
    code: "",
    choices: [
      "128 bytes",
      "1 kilobyte",
      "4 to 16 kilobytes",
      "64 kilobytes"
    ],
    correct: 2,
    justification: "Typical block sizes are in the range of 4 to 16 kilobytes[1]."
  },
  {
    question: "What is the elevator algorithm used for?",
    code: "",
    choices: [
      "Scheduling disk arm movements to minimize seek time",
      "Managing buffer memory",
      "Allocating storage space",
      "Encrypting disk data"
    ],
    correct: 0,
    justification: "The elevator algorithm schedules disk arm movements efficiently[1]."
  },
  {
    question: "What is the effect of file fragmentation on disk access?",
    code: "",
    choices: [
      "It improves sequential access speeds",
      "It increases disk arm movement and slows down access",
      "It reduces the need for defragmentation",
      "It has no effect on performance"
    ],
    correct: 1,
    justification: "Fragmentation increases disk arm movement, slowing down sequential access[1]."
  },
  {
    question: "What is the main purpose of a buffer manager in a DBMS?",
    code: "",
    choices: [
      "To allocate buffer space in main memory for disk blocks",
      "To manage user accounts",
      "To store SQL queries",
      "To enforce referential integrity"
    ],
    correct: 0,
    justification: "The buffer manager allocates main memory for disk blocks and manages their access[1]."
  }
]
