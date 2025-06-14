function add_numbers(a: number, b: number): number {

    return a + b;
}

// lambda functions
const add_nums = (a: number, b: number): string => {
    return `${a + b}`;
}

// parametros opcionales y predefinidas
function multiply(x: number, y?: number, base: number = 2): number {
    if (y != undefined) {
        return y * x;
    }
    return x * base;
}


const result: number = add_numbers(1, 2)
const result_2: string = add_nums(1, 2)
const result_3: number = multiply(1, 2)

console.log({result, result_2, result_3})

interface Character {
    name: string;
    hp: number;
    showUp: () => void;
}

const heal_character = (character: Character, amount: number) => {

    character.hp += amount;
}

const hero: Character =
    {
        name: 'AngularMan',
        hp: 50,
        showUp() {
            console.log(
                `Heal ${this.hp}`);
        }
    }

heal_character(hero, 40)
hero.showUp();


export {};


