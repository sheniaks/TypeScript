// interface User {
//  readonly name : string;
//   age? : number;
//   [propName: string] : any ; // можно будет добавлять любые произвольные свойства любых типов 
// }
// const alex : User = {
//   name : "Alex",
//   age : 28,
//  // nickName : "test", // Type '{ name: string; age: number; nickName: string; }' is not assignable to type 'User'.
//   test : 123,
//   rest : "abracadabra",
// }
// // alex.name = "Oleksandr"; // Cannot assign to 'name' because it is a read-only property.

// interface User {
//   name : string;
//   age : number;
//  getPW(): string,
// }
// class Alex implements User {   // обязательно реализовать минимальный набор параметров из интерфейса, так же можно добавить новые параметры.
//   name : string = "Alex";
//   age : number = 28;
//   nickName : string = "ashe";
//   getPW(){
//     return `${this.name}${this.age}`;
//   }
// }

// interface User {
//   name : string,
//   age : number,
// }
// interface Pass {
//   getPW():string,
// }
// class Aex implements User, Pass {
//   name : string = "Alex";
//   age :number = 31;
//   getPW(){
//     return `${this.age}331341`;
//   }
// }

interface User {
    name : string,
    age : number,
  }
  interface Pass extends User {
    getPW():string,
  }
  class Alexxxx implements Pass {
    name : string = "Alex";
    age : number = 31;
    getPW(){
      return `${this.age}5555`;
    }
  }
  




// // Simple interface example
// interface User {
//     name: string,
//     age: number,
// }

// // Interface & Type
// interface User {
//     name: string,
//     age: number,
// }

// type User {
//     name: string,
//     age: number,
// }

// // Create object based on Interface
// interface User {
//     name: string,
//     age: number,
// }

// const yauhen: User = {
//     name: 'Yauhen',
//     age: 31,
// }

// // Interface optional property
// interface User {
//     name: string,
//     age?: number,	// <--- Optional
// }

// // Creation with a required property
// const yauhen: User = {
//     name: 'Yauhen',
// }

// // Creation with missing a required property
// /*
//   Error:
//   Property 'name' is missing in type '{ age: number; }' but required in type 'User'
// */
// const max: User = {
//     age: 20,
// }

// // Interface 'readonly' modifier
// interface User {
//     readonly name: string,
//     age: number,
// }

// const yauhen: User = {
//     name: 'Yauhen',
//     age: 31,
// }

// yauhen.age = 30;
// yauhen.name = 'Max'; // Cannot assign to 'name' because it is a read-only property

// // Compare interface type and object
// interface User {
//     name: string,
//     age: number,
// }

// const yauhen: User = {
//     name: 'Yauhen',
//     age: 31,
//   	/*
//       Error:
//       Object literal may only specify known properties, and 'nickName' does not exist in type 'User'
//     */
//     nickName: 'webDev',		// <--- Didn't described in interface "User"
// }

// // Interface extension
// interface User {
//     name: string,
//     age: number,
//     [propName: string]: any;
// }

// const yauhen: User = {
//     name: 'Yauhen',
//     age: 31,
//     nickName: 'webDev',
//     justTest: 'test',
// }

// // Class Interface
// interface User {
//     name: string,
//     age: number,
//     getPass(): string,
// }

// class Yauhen implements User {
//     name: string = 'Yauhen';
//     age: number = 31;
//     nickName: string = 'webDev';

//     getPass() {
//         return `${this.name}${this.age}`;
//     }
// }

// // Create Class based on multiple interfaces
// interface User {
//     name: string,
//     age: number,
// }

// // Separate interface with one method
// interface Pass {
//     getPass(): string,
// } 

// class Yauhen implements User, Pass {
//     name: string = 'Yauhen';
//     age: number = 31;

//     getPass() {
//         return `${this.name}${this.age}`;
//     }
// }

// // Interface extends
// interface User {
//     name: string,
//     age: number,
// }

// // Interface extends
// interface Admin extends User {
//     getPass(): string,
// }

// class Yauhen implements Admin {
//     name: string = 'Yauhen';
//     age: number = 31;

//     getPass() {
//         return `${this.name}${this.age}`;
//     }
// }