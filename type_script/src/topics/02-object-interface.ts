const skills: string[] = ['counter', 'fly'];


// definir tipado
interface Character {
    name: string;
    hp: number;
    skills: string[] ;
    hometown?: string;
    // hometown: string | undefined
}

const hero: Character = {
    name: 'AngularMan',
    skills: skills,
    hp : 100
}

hero.hometown = 'Tulua';

console.table(hero);

export {};