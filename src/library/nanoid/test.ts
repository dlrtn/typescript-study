import {customAlphabet, nanoid} from 'nanoid';
import {randomBytes} from 'crypto';


const nanoidTest = (size = 21) => randomBytes(size).reduce(((t, e) => t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_"), "");
const nanoidTest1 = nanoidTest(10);
const nanoidTest2 = customAlphabet('ABCDEF', 20);

console.log(nanoid());
console.log(nanoidTest1);
console.log(nanoidTest2());