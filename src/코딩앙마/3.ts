/*
let user:object;

user = {
    name: "Max",
    age: 27
}

console.log(user.name); // Error: Property 'name' does not exist on type 'object'.
 */

// So We Use Interface
interface User {
    name: string;
    age: number;
    gender?: string; // Optional
}

let user: User = {
    name: "Max",
    age: 27
}

user.age = 28;
user.gender = "male"

// readonly property
interface User2 {
    name: string;
    age: number;
    gender?: string; // Optional
    readonly birthYear: number;
    [grade: number]: string; // indexable
}

let user2: User2 = {
    name: "Max",
    age: 27,
    birthYear: 1992,
    1: "A",
    2: 'B'
}

// type
type Score = 'A' | 'B' | 'C' | 'D' | 'F';
type User3 = {
    name: string;
    age: number;
    gender?: string; // Optional
    readonly birthYear: number;
    [grade: number]: Score; // indexable
}

let user3: User3 = {
    name: "Max",
    age: 27,
    birthYear: 1992,
    1: "A",
    2: "B"
}

// function type interface
interface AddFn {
    (a: number, b: number): number;
}

const add: AddFn = (n1: number, n2: number) => {
    return n1 + n2;
}

add(10, 20);

interface IsAdultFn {
    (age: number): boolean;
}

const a:IsAdultFn = (age) => {
    return age >= 19;
}

// class type interface
interface Car {
    color: string;
    start(): void;
    wheel(): void;

}

class Bmw implements Car {
    wheels = 4;

    constructor(color: string) {
        this.color
    }

    start() {
        console.log("go..");
    }

}