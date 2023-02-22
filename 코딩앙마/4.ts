// 함수
function add(num1: number, num2: number): number {
    return num1 + num2;
}

function isAdult(age: number): boolean {
    return age >= 20;
}

function hello(name?: string): string {
    return `hello, ${name || "world"}`;
}

const hello1 = hello();
const hello2 = hello("Max");

// 나머지 매개변수
function addAll(...num: number[]): number {
    return num.reduce((a, b) => a + b, 0);
}

addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// this
interface User {
    name: string;
}

const Sam: User = {name: "Sam"};

function showName(this: User) {
    console.log(this.name);
}

const a = showName.bind(Sam);
a();