export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia',

    price: 5,
}

const tablet: Product = {
    description: 'Ipad',
    price: 50,
}

interface TaxCalculatorOptions {
    tax: number;
    products: Product[];
}

// function taxCalculator(options: TaxCalculatorOptions): [number, number] {
//
//     let total = 0;
//     options.products.forEach(product => {
//         total += product.price;
//     })
//
//     return [total, total * options.tax];
// }

// function taxCalculator({tax, products}: TaxCalculatorOptions): [number, number] {
//
//     let total = 0;
//      products.forEach(({price}) => {
//          total += price;
//      })
//
//     return [total, total * options.tax];
// }

export function taxCalculator(options: TaxCalculatorOptions): [number, number] {

    const {tax, products} = options;
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    })

    return [total, total * tax];
}

const shoppingCard: Product[] = [phone, tablet]
const taxDefine = 0.15

// const result: number[] = taxCalculator({
//     products: shoppingCard,
//     tax,
// })
//
// console.log('TOTAL', result[0])
// console.log('TAX', result[1])

const [total, tax] = taxCalculator({
    products: shoppingCard,
    tax: taxDefine,
})

console.log('TOTAL', total)
console.log('TAX', tax)