export default [
  {
    question: "What is an object-oriented database management system (OODBMS)?",
    code: "",
    choices: [
      "A system that uses only relational tables",
      "A system that stores objects with unique identities and supports complex data types",
      "A system that does not support transactions",
      "A system that only stores text data"
    ],
    correct: 1,
    justification: "OODBMS stores objects with unique identities and supports complex data types[1]."
  },
  {
    question: "What is an object identifier (OID)?",
    code: "",
    choices: [
      "A user-assigned primary key",
      "A unique, system-generated identifier for each object",
      "A table name",
      "A transaction timestamp"
    ],
    correct: 1,
    justification: "An OID is a unique, system-generated identifier for each object in an OODBMS[1]."
  },
  {
    question: "Which of the following is a property of an OID?",
    code: "",
    choices: [
      "Mutable and reused",
      "Immutable and never reused",
      "Assigned by the user",
      "Visible to external users"
    ],
    correct: 1,
    justification: "OIDs are immutable and never reused, even if the object is deleted[1]."
  },
  {
    question: "What is a type constructor in object databases?",
    code: "",
    choices: [
      "A SQL command",
      "A mechanism to define how object state is constructed (e.g., tuple, set, array)",
      "A trigger",
      "A transaction protocol"
    ],
    correct: 1,
    justification: "Type constructors define how object state is constructed, such as tuple or set[1]."
  },
  {
    question: "Which of the following is NOT a type constructor?",
    code: "",
    choices: [
      "Tuple",
      "Set",
      "Array",
      "Index"
    ],
    correct: 3,
    justification: "Index is not a type constructor; tuple, set, and array are[1]."
  },
  {
    question: "What is the main advantage of object-oriented databases?",
    code: "",
    choices: [
      "They are easier to use than relational databases",
      "They support complex structures and application-specific operations",
      "They eliminate the need for transactions",
      "They do not require schema definitions"
    ],
    correct: 1,
    justification: "OODBMS support complex structures and application-specific operations[1]."
  },
  {
    question: "What is object identity used for in OODBMS?",
    code: "",
    choices: [
      "To enforce referential integrity",
      "To uniquely identify and reference objects regardless of their state",
      "To define table schemas",
      "To store user passwords"
    ],
    correct: 1,
    justification: "Object identity uniquely identifies and references objects, independent of their state[1]."
  },
  {
    question: "What is the Object Definition Language (ODL)?",
    code: "",
    choices: [
      "A language for defining object schemas and relationships",
      "A language for querying relational databases",
      "A programming language",
      "A type of index"
    ],
    correct: 0,
    justification: "ODL is used for defining object schemas and relationships in OODBMS[1]."
  },
  {
    question: "What is the Object Query Language (OQL)?",
    code: "",
    choices: [
      "A language for defining object schemas",
      "A query language for object databases",
      "A programming language",
      "A type of index"
    ],
    correct: 1,
    justification: "OQL is a query language for object databases, similar to SQL for relational databases[1]."
  },
  {
    question: "What is a class in object-oriented databases?",
    code: "",
    choices: [
      "A group of tables",
      "A user-defined type with attributes and operations",
      "A transaction protocol",
      "A system catalog entry"
    ],
    correct: 1,
    justification: "A class is a user-defined type with attributes and operations in OODBMS[1]."
  }
]
