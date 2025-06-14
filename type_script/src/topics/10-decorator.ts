function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T) {
    return class extends constructor {
        newProperty = 'newProperty';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {

    public myProperty: string = 'ABC123';

    print() {
        console.log('Hi world');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);