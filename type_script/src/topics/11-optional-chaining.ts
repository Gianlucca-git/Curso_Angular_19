export interface Passenger {
    name: string;
    children?: string[];
}

const passengers_a: Passenger = {
    name: 'Gianlucca',
}

const passengers_b: Passenger = {
    name: 'Pepito',
    children: ['junior'],
}

const printChildren = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);
}

printChildren(passengers_a);
printChildren(passengers_b);