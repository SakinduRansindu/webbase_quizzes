export default [
  {
    question: "What is the main purpose of RAID in disk systems?",
    code: "",
    choices: [
      "To increase storage cost",
      "To provide reliability and performance through redundancy",
      "To reduce disk capacity",
      "To slow down data access"
    ],
    correct: 1,
    justification: "RAID provides fault tolerance and improves performance by using redundant disks."
  },
  {
    question: "What is mirroring in RAID?",
    code: "",
    choices: [
      "Storing data on a single disk",
      "Duplicating every disk for redundancy",
      "Using only solid-state drives",
      "Storing data in memory"
    ],
    correct: 1,
    justification: "Mirroring duplicates every disk to provide redundancy and prevent data loss."
  },
  {
    question: "What is the purpose of disk striping?",
    code: "",
    choices: [
      "To store data sequentially on one disk",
      "To split data across multiple disks for parallel access",
      "To increase seek time",
      "To reduce data transfer rates"
    ],
    correct: 1,
    justification: "Disk striping splits data across disks for better throughput and parallel access."
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
    justification: "Hot swapping allows replacing failed disks without shutting down the system."
  },
  {
    question: "Which of the following is a benefit of hardware RAID over software RAID?",
    code: "",
    choices: [
      "Requires no special hardware",
      "Provides better performance and reliability",
      "Is easier to configure",
      "Uses more CPU resources"
    ],
    correct: 1,
    justification: "Hardware RAID offers better performance and reliability than software RAID."
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
    justification: "Without journaling, file systems risk corruption if power fails during writes."
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
    justification: "Typical block sizes are in the range of 4 to 16 kilobytes."
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
    justification: "The elevator algorithm schedules disk arm movements efficiently."
  },
  {
    question: "What is the main advantage of using non-volatile RAM buffers?",
    code: "",
    choices: [
      "They speed up disk writes and protect data during power loss",
      "They increase the number of disk accesses",
      "They reduce the need for disk controllers",
      "They are cheaper than volatile RAM"
    ],
    correct: 0,
    justification: "Non-volatile RAM buffers speed up writes and safeguard data during outages."
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
    justification: "Fragmentation increases disk arm movement, slowing down sequential access."
  }
]
