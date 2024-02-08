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

// let numbers = [1, 7, 8, 4, 3, 1, 0, 9, 6, 8];

// function sum(...numbers) {
//   let total = 0;
//   for (const iterator of numbers) {
//     total += iterator; // Use iterator instead of number
//   }
//   return total;
// }

// console.log(sum(...numbers));

//filter list, example for CA task
// !! Need the shelf help JSON server to be running on http://localhost:3000
const bookListDiv = document.getElementById("book-list");

let bookData = [];
// fetch the book data.
fetch("http://localhost:3000/books")
  .then((response) => {
    return response.json();
  })
  .then((bookResultData) => {
    bookData = bookResultData;

    for (const book of bookData) {
      displayBook(book);
    }
    // remove loading message
    document.getElementById("loader").remove();
  });

// Defines a function to display a book's information in the DOM
function displayBook(book) {
  // Creates a new div element to hold the book's details
  const bookDiv = document.createElement("div");

  // Creates a new paragraph element for the book's title
  const bookTitlePara = document.createElement("p");
  // Sets the text of the paragraph to the book's title
  bookTitlePara.innerText = book.title;

  // Creates a new img element for the book's cover image
  const bookImg = document.createElement("img");
  // Sets the source of the image to the URL path of the book's cover image
  bookImg.src = `http://localhost:3000/assets/images/${book.coverImg}`;
  // Sets the alt text for the image for accessibility purposes
  bookImg.alt = "a picture of a book";

  const bookButton = document.createElement("button");
  bookButton.innerText = "Details";
  bookButton.addEventListener("click", () => getById(book.id));

  // Appends the image element to the book div
  bookDiv.appendChild(bookImg);
  // Appends the title paragraph to the book div
  bookDiv.appendChild(bookTitlePara);

  bookDiv.appendChild(bookButton);

  // Finally, appends the book div to a parent div in the DOM,
  // represented here as `bookListDiv`, which should be predefined in the broader scope
  bookListDiv.appendChild(bookDiv);
}

// Alternative function to create and insert the HTML to display a book but with templating
function displayBookAlt(book) {
  // Create the div element for the book
  const bookDiv = document.createElement("div");
  // Use template literals to construct the inner HTML of the bookDiv
  bookDiv.innerHTML = `
    <img src="http://localhost:3000/assets/images/${book.coverImg}" alt="a picture of a book">
    <p>${book.title}</p>
  `;
  // Append the bookDiv to the bookListDiv
  bookListDiv.appendChild(bookDiv);
}

function getById(id) {
  console.log(id);
}
