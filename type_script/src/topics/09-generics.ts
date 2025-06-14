// @ts-ignore
export function whatsMyType<T>(argument: T): T {


    return argument;
}

let amIString: string = whatsMyType<string>('hi');
let amIBool: boolean = whatsMyType<boolean>(true);
let amINumber: number = whatsMyType<number>(123);


console.log(amIString);
console.log(amINumber);
console.log(amIBool);
