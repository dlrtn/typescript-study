////////////////////////////// 기본 //////////////////////////////
let car:string = "bmw";

let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ["mon", "tue", "wed"];
let week2:Array<string> = ["mon", "tue", "wed"];

// 숫자를 넣으려 시도 x, week1.pop(1);

////////////////////////////// 튜플 //////////////////////////////
let b:[string, number] = ["hello", 10];

b = ['z', 1];
// 안됨, b = [1, 'z'];

b[0].toLowerCase();
// 안됨, b[1].toLowerCase();

////////////////////////////// void. never //////////////////////////////

function sayHello():void {
    console.log("hello");
}

function showError():never {
    throw new Error();
}

function infiniteLoop():never {
    while(true) {

    }
}

////////////////////////////// enum //////////////////////////////
enum Os {
    Windows,
    Ios,
    Android
}

////////////////////////////// null, undefined //////////////////////////////
let a:null = null;
let b:undefined = undefined;

