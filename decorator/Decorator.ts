export function beforeMehtod() {
    return function (target: Object, methodName: string, propertyDescriptor: PropertyDescriptor) {
        console.log(`${methodName} is decorated`);
    };
}

export function afterMehtod() {
    return function (target: Object, methodName: string, propertyDescriptor: PropertyDescriptor) {
        console.log(`before`);
        propertyDescriptor.value();
        console.log(`after`);
    };
}
