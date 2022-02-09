// function getArray<T>(items : T[]) : T[] {
//     return new Array<T>().concat(items);
// }

// let numberArray = getArray<number>([5, 10, 15, 20]);
// numberArray.push(25);                      // OK
// numberArray.push('This is not a number');  // Generates a compile time type check error - Argument of type 'string' is not assignable to parameter of type 'number'.

// let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
// stringArray.push('Rabbits');               // OK
// stringArray.push(30);                      // Generates a compile time type check error - Argument of type 'number' is not assignable to parameter of type 'string'.

// function identity<T, U> (value: T, message: U) : T {
//     console.log(message);
//     return value
// }

// let returnNumber = identity<number, string>(100, 'Hello!');
// let returnString = identity<string, string>('100', 'Hola!');
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!');
// returnNumber = returnNumber * 100;   // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'


// function identity<T, U> (value: T, message: U) : T {
//     let result: T = value + value;    // Operator '+' cannot be applied to types 'T' and 'T'.
//     console.log(message);
//     return result
// }

// type ValidTypes = string | number;

// function identity<T extends ValidTypes, U> (value: T, message: U) : T {
//     let result: T = value + value;    // Error
//     console.log(message);
//     return result
// }

// let returnNumber = identity<number, string>(100, 'Hello!');      // OK
// let returnString = identity<string, string>('100', 'Hola!');     // OK
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

// function getPets<T, K extends keyof T>(pet: T, key: K) {
//   return pet[key];
// }
// let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
// let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}
// console.log(getPets(pets1, "fish"));  // Returns 6
// console.log(getPets(pets2, "3"));     // Error

// type ValidTypes = string | number;
// function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
//     let result: ValidTypes = '';
//     let typeValue: string = typeof value;

//     if (typeof value === 'number') {           // Is it a number?
//         result = value + value;                // OK
//     } else if (typeof value === 'string') {    // Is it a string?
//         result = value + value;                // OK
//     }

//     console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

//     return result
// }

// let numberValue = identity<number, string>(100, 'Hello');
// let stringValue = identity<string, string>('100', 'Hello');

// console.log(numberValue);       // Returns 200
// console.log(stringValue);       // Returns 100100


// interface Identity<T, U> {
//     value: T;
//     message: U;
// }

// let returnNumber: Identity<number, string> = {
//     value: 25,
//     message: 'Hello!'
// }
// let returnString: Identity<string, number> = {
//     value: 'Hello!',
//     message: 25
// }

// interface ProcessIdentity<T, U> {
//     (value: T, message: U): T;
// }

// function processIdentity<T, U> (value: T, message: U) : T {
//     console.log(message);
//     return value;
// }

// let processor: ProcessIdentity<number, string> = processIdentity;
// let returnNumber1 = processor(100, 'Hello!');   // OK
// let returnString1 = processor('Hello!', 100);   // Argument of type 'string' is not assignable to parameter of type 'number'.

// interface ProcessIdentity<T, U> {
//     value: T;
//     message: U;
//     process(): T;
// }

// class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
//     value: X;
//     message: Y;
//     constructor(val: X, msg: Y) {
//         this.value = val;
//         this.message = msg;
//     }
//     process() : X {
//         console.log(this.message);
//         return this.value
//     }
// }

// let processor = new processIdentity<number, string>(100, 'Hello');
// processor.process();           // Displays 'Hello'
// processor.value = '100';       // Type check error

// class processIdentity<T, U> {
//     private _value: T;
//     private _message: U;
//     constructor(value: T, message: U) {
//         this._value = value;
//         this._message = message;
//     }
//     getIdentity() : T {
//         console.log(this._message);
//         return this._value
//     }
// }
// let processor = new processIdentity<number, string>(100, 'Hello');
// processor.getIdentity();      // Displays 'Hello'


class Cart {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCart extends Cart {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Cart {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Cart> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCart;
accelerate<ElectricCart>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);