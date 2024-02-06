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
