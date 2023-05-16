import {afterMehtod, beforeMehtod} from './TestDecorator';

export class DecoratorTestClass {

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