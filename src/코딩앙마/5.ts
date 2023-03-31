// Literal Types

const userName1 = "Mark";
let userName2 = "Mark";

// userName2 = 3; // Error TS2322: Type '3' is not assignable to type 'string'.

type Job = "Polic" | "Developer" | "Teacher";

interface User {
    name: string;
    job: Job;
}

const user: User = {
    name: "Mark",
    job: "Developer"
}

