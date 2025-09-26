//1
const num1: number = 42;
const str: string = "Hello, TypeScript!";
const isComplete: boolean = true;
const numbers: number[] = [1, 2, 3, 4, 5];
const cities: string[] = ["Minsk", "Warsaw", "London"];
const person: {name: string; age: number; city: string} = {
    name: "Alice",
    age: 30,
    city: "Minsk",
};

//2

type User = {
    name: string;
    age: number;
    email?: string;
};

type Grade = 'junior' | 'middle' | 'senior';

//3

interface ICar {
    brand: string;
    model: string;
    year?: number;
}

const car: ICar = {
    brand: "Volvo",
    model: "XC-90",
    year: 2025,
};

//4

interface IAddress {
    street: string;
    city: string;
    zipCode: number;
} 

interface IFullAddress extends IAddress {
    country: string;
}

//5

type Product = {
    id: number;
    name: string;
    price: number;
};

type DiscountProduct = Product & {
    discount: number;
};

//6 

function calculateDiscount (product: DiscountProduct) {
    return (product.price - product.price * (product.discount / 100));
};

const product :DiscountProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
};

console.log(calculateDiscount(product));
