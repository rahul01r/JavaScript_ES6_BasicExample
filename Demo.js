//The ... Operator
//Ex.1
const cars1 = ["Saab", "Volvo", ..."BMW"];
const cars2 = ["Fiat", "Toyota"];

const combined = [cars1, ...cars2];
console.log(combined);

//Ex.2
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
console.log(maxValue);

//The For/Of Loop
//Ex.1-Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  console.log(x);
}

//Ex.2-Looping over a String
let language = "JavaScript";
let text1 = "";

for (let x of language) {
    console.log(x);
}

//Map-Ex
const fruits = new Map([             //createMap
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
var a = fruits.get("bananas");      
console.log(a);

//Sets-Ex
const letters = new Set();          // Create a Set  
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("d");

console.log(letters.size);         // Display set.size

//Classes-Ex
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("BMW", 2016);
console.log(myCar1.name + " " + myCar1.year);
console.log(myCar2.name + " " + myCar2.year);

//Ex.2
class Cars {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
let myCar = new Cars("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");

//Symbol Type -Ex
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
let id = Symbol('id');
person[id] = 140353;
console.log(person[id] + " " + person.id);

//Default Parameter Values - Ex
function myFunction(x, y = 10) {
    return x * y;
  }
console.log(myFunction(6));

//Function Rest Parameter - Ex
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
        return sum;
    }
let x = sum(4, 9, 13, 25, 29, 50, 76, 33);
console.log(x);

//String.includes() - Ex
var str = "Welcome to The Beautiful World.";
var check = str.includes("World");          //return true
console.log(check)
var check1 = str.includes("Hii");           //return false
console.log(check1)

//String.startsWith() - Ex
function func() {
    // Original string
    var str = 'It is a great day.';
     // Checking the condition
    var value = str.startsWith('It');
    console.log(value);
}
func();

//String.endsWith(searchString, length) - Ex.1
let test = "John Doe";
console.log(text.endsWith("Doe"));        //return false

//Ex.2
function func() {
    // Original string
    var str = "Welcome World";
    // Finding the search string in the
    // given string
    var value = str.endsWith('World',13);
    console.log(value);
}
func();