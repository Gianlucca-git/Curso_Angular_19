import {taxCalculator, type Product} from './06-function-destructuring.ts'

const shoppingCart: Product[] = [
    {
        description: 'Samsung',
        price: 50,
    },
    {
        description: 'Apple',
        price: 40,
    }
];

const [total, tax] = taxCalculator({

    products: shoppingCart,
    tax: 0.15
});

console.log('TOTAL', total)
console.log('TAX', tax)