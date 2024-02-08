// let JsonBook = {
//   id: 1,
//   isbn: "12345678",
//   cover: "Bear and snow",
// };

// let jsonString = JSON.stringify(JsonBook);

// console.log(jsonString);
// // Result:  {"id":1,"isbn":"12345678","cover":"Bear and snow"}

// localStorage.setItem("message", "I just stored something in localstorage");
// console.log(localStorage.getItem("message"));
// // Result: (Key)Message (Value)I just stored something in localstorage

// //Localstorage.clear

// let name;

// if (4 > 9) {
//   // If condition is true, this block will be executed
// } else {
//   name = "Dean";
// }

// console.log(name);

// // modules

// let duck = {
//   id: 1,
//   name: "tim",
//   habitat: "swamp",
//   height: 25,
//   diet: "green stuff",
// };

// //destructuring assignment to extract specific porperties from the duck object
// let { name: duckName, habitat: duckHabitat, height: duckHeight } = duck;

// //log info about the duck to the console
// console.log;

// //Rest and spread operators

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(1, 6));

// function sum(...numbers) {
//   let total = 0;
//   for (const iterator of numbers) {
//     total += number;
//   }
//   return total;
// }

let numbers = [1, 7, 8, 4, 3, 1, 0, 9, 6, 8];

function sum(...numbers) {
  let total = 0;
  for (const iterator of numbers) {
    total += iterator; // Use iterator instead of number
  }
  return total;
}

console.log(sum(...numbers));
