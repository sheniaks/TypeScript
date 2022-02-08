// function addNumbers (x: number, y: number): number {
//     return x + y;
//  }
//  console.log(addNumbers(1, 2));


// let addNumberz = function (x: number, y: number): number {
//    return x + y;
// }
//  console.log(addNumberz(3, 2));


// let total = function (input: number[]): number {
//     let total: number =  0;
//     for(let i = 0; i < input.length; i++) {
//         if(isNaN(input[i])) {
//             continue;
//         }
//         total += Number(input[i]);
//     }
//     return total;
// }
// console.log(total([1, 2, 3]));

// // Anonymous function
// let addNumbers1 = function (x: number, y: number): number {
//    return x + y;
// }

// // Arrow function
// let addNumbers2 = (x: number, y: number): number => x + y;


// let total2 = (input: number[]): number => {
//     let total: number =  0;
//     for(let i = 0; i < input.length; i++) {
//         if(isNaN(input[i])) {
//             continue;
//         }
//         total += Number(input[i]);
//     }
//     return total;
// }


function displayAlert(message: string | number):void {
    alert('The message is ' + message);
}
// displayAlert("test");
// displayAlert(1);


function sum(input: number[] ) : number {
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
// sum(5); //Argument of type 'number' is not assignable to parameter of type 'number[]'
console.log(sum([1, 2, 3]));


function addNumbers (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1


function addNumberss (x: number, y = 25): number {
    return x + y;
 }
 
 addNumberss(1, 2);  // Returns 3
 addNumberss(1);     // Returns 26


 let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
 }
addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5


interface Message {
    text: string;
    sender: string;
 }
 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
 }
 displayMessage({sender: 'Christopher', text: 'hello, world'});

 let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if((z === undefined)) {
        return x + y;
    } else {
        return x + y + z;
    }
};
console.log(addThreeNumbers(10, 20)); // Expected 3 arguments, but got 2.
//addThreeNumbers(10, 20, 30, 40) //Expected 3 arguments, but got 4.


let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

console.log(subtractThreeNumbers(10, 20));       // returns -110 because 'z' has been assigned the value 100
console.log(subtractThreeNumbers(10, 20, 15));   // returns -25


// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}

let addNumberssz: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;
console.log(addNumberssz(1, 2));
console.log(subtractNumbers(1, 2));


let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
    if (operation === 'add') {
        return addNumberssz;
    } else {
        return subtractNumbers;
    }
}
console.log(doCalculation('add')(1, 2));

let addNumbersz: Calculator = (x: number, y: number): number => x + y;
let addNumberszs: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumberszz: Calculator = (num1, num2) => num1 + num2;

