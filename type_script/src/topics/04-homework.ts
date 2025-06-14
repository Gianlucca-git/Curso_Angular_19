interface Address {
    street: string;
    city: string;
    cell: number;
}

interface Character {
    name: string;
    age: number;
    address: Address;
    showAddress: () => void;
}

const hero: Character =
    {
        name: 'AngularMan',
        age: 50,
        address: {
            street: 'cll 11',
            city: 'NY',
            cell: 314231234
        },
        showAddress() {
            console.log(
                `street = ${this.address.street}, 
                city = ${this.address.city}, 
                cell = ${this.address.cell}`);
        }
    }

hero.showAddress()
export {};
