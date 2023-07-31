let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);

const bookTwo = new Book(
  "Never Split the Difference",
  "Chris Voss",
  "274",
  true
);

const bookThree = new Book("Zero to One", "Peter Thiel", "210", true);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

const bookCardSection = document.querySelector("#book-card-section");

function displayBooks() {
  for (const bookObject of myLibrary) {
    // display each book
    const newBook = document.createElement("div");
    newBook.classList.add("book");

    const newTitle = document.createElement("div");
    newTitle.classList.add("display-title");
    newTitle.textContent = `${bookObject.title}`;
    newBook.appendChild(newTitle);

    const newAuthor = document.createElement("div");
    newAuthor.classList.add("display-author");
    newAuthor.textContent = `${bookObject.author}`;
    newBook.appendChild(newAuthor);

    const newPages = document.createElement("div");
    newPages.classList.add("display-pages");
    newPages.textContent = `${bookObject.pages} Pages`;
    newBook.appendChild(newPages);

    const newRead = document.createElement("div");
    newRead.classList.add("display-read");
    newRead.textContent = `Read: ${bookObject.read}`;
    newBook.appendChild(newRead);

    bookCardSection.appendChild(newBook);
  }
}

displayBooks();

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
  },
  false
);

const formButton = document.querySelector("#add-new-book");
const userInputForm = document.querySelector("#user-input-form");
let showForm = false;

formButton.addEventListener("click", () => {
  if (showForm === false) {
    userInputForm.style.display = "block";
    showForm = true;
  } else {
    userInputForm.style.display = "none";
    showForm = false;
  }
});
