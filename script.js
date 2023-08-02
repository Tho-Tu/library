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

// const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);

// const bookTwo = new Book(
//   "Never Split the Difference",
//   "Chris Voss",
//   "274",
//   true
// );

// const bookThree = new Book("Zero to One", "Peter Thiel", "210", true);

// addBookToLibrary(bookOne);
// addBookToLibrary(bookTwo);
// addBookToLibrary(bookThree);
// displayBooks();

const bookCardSection = document.querySelector("#book-card-section");

function displayBooks() {
  bookCardSection.textContent = "";
  for (const bookObject of myLibrary) {
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

// displays/hides the form input
const displayForm = document.querySelector("#add-new-book");
const userInputField = document.querySelector("#user-input-field");
let showForm = false;

displayForm.addEventListener("click", () => {
  if (showForm === false) {
    userInputField.style.display = "block";
    showForm = true;
  } else {
    userInputField.style.display = "none";
    showForm = false;
  }
});

// form submit
const userForm = document.querySelector("#user-input-form");
userForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    const title = document.querySelector("#book-title");
    const author = document.querySelector("#book-author");
    const pages = document.querySelector("#book-pages");
    const read = document.querySelector("#book-read");
    const bookObject = new Book(
      title.value,
      author.value,
      pages.value,
      read.checked
    );

    addBookToLibrary(bookObject);
    displayBooks();

    userForm.reset();
    title.focus();
  },
  false
);
