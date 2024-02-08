let JsonBook = {
  id: 1,
  isbn: "12345678",
  cover: "Bear and snow",
};

let jsonString = JSON.stringify(JsonBook);

console.log(jsonString);
// Result:  {"id":1,"isbn":"12345678","cover":"Bear and snow"}

localStorage.setItem("message", "I just stored something in localstorage");
console.log(localStorage.getItem("message"));
// Result: (Key)Message (Value)I just stored something in localstorage

//Localstorage.clear

let name;

if (4 > 9) {
  // If condition is true, this block will be executed
} else {
  name = "Dean";
}

console.log(name);


// modules

let duck = {
  id: 1,
  name: "tim",
  habitat: "swamp",
  height: 25,
  diet: "green stuff"
}

let { name: duckName,habitat: duckHabitat, height: duckHeight } = duck;
