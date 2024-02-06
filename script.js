let JsonBook = {
  id: 1,
  isbn: "12345678",
  cover: "Bear and snow",
};

let jsonString = JSON.stringify(JsonBook);

console.log(jsonString);
// Result:  {"id":1,"isbn":"12345678","cover":"Bear and snow"}
