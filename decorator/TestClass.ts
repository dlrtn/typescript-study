import {afterMehtod, beforeMehtod} from './Decorator';

export class TestClass {

    @beforeMehtod()
    printHelloWorld() {
        console.log('Hello, world!')
    }

    @beforeMehtod()
    @afterMehtod()
    printHelloWorldWithMyName(name: string) {
        console.log(`Hello, world! My name is ${name}.`)
    }

}