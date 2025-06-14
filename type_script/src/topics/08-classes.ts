export class Person {
    public name: string;
    public address: string;

    // constructor() {
    //     this.name = 'name';
    //     this.address = 'address';
    // }
    constructor(
        name: string, address: string = 'USA'
    ) {
        this.name = name;
        this.address = address;
    }
}

// FORMA CORTA (pero no compatible con erasableSyntaxOnly
// export class Person {
//
//     constructor(
//         public name: string,
//         private address: string = 'USA'
//     ) {
//     }
// }

// Herencia
// export class Hero extends Person {
//
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         private realName: string
//     ) {
//         super(realName, 'NY');
//     }
// }

// Herencia con composicion
export class Hero {

    public alterEgo: string;
    public age: number;
    public realName: string;

    public person: Person;

    constructor(
        alterEgo: string,
        age: number,
        realName: string,
        person: Person,
    ) {
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
        this.person = person;
    }
}


const tony = new Person('Tony Stark', 'NY');
const ironMAn = new Hero(
    'ironMan',
    45,
    'tony',
    tony
);

console.log(ironMAn);