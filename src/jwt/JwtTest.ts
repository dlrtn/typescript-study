import {JwtTestConstants} from "./JwtTestConstants";

const jwt = require('jsonwebtoken');


console.log(jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJOYW1lIjoiZGxydG4iLCJpYXQiOjE2Nzg4Njk0NTAsImV4cCI6MTY3ODk1NTg1MH0.YLDHsjtdjc2unbiQc6hCi5KXaDJmFLSnz5zlxQlMiqo'));
console.log(jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJuaWNrbmFtZSI6InRlc3Qi' +
    'LCJlbWFpbCI6ImluZGpAdGVzdC50ZXN0IiwiaWF0IjoxNjgwNzQ0NDQyLCJleHAiOjE3NjcxNDQ0N' +
    'DJ9.e5pltLYc06LLz7dkq_fNDXcC7MGKVczBuVilYtsG_Fk'));

const token = jwt.sign({ userId: 215 }, 'test', {
    expiresIn: '1000d',
});

console.log(token);

