//1

interface IVehicle {
    getDetails(): string,
    start(): string,
}

//2

abstract class Vehicle implements IVehicle {
  
    constructor (public make: string, public model: string){}
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting`;
    }

    public abstract getDetails(): string;
}

//3

class Car extends Vehicle {
    
    constructor(make: string, model: string, public year: number) {
        super(make, model);
    }

    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}

//4

const myCar = new Car("Volvo", "XC-90", 2025);
console.log(myCar.start());
console.log(myCar.getDetails());