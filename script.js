let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// toggle book's read status on object
Book.prototype.toggleRead = function () {
  if (this.read === true) {
    this.read = false;
  } else {
    this.read = true;
  }
};

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

// DEMO BOOKS //
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

function displayBooks() {
  const bookCardSection = document.querySelector("#book-card-section");
  bookCardSection.textContent = "";

  let bookIndex = 0;
  for (const bookObject of myLibrary) {
    const newBook = document.createElement("div");
    newBook.classList.add("book");

    // title
    const newTitle = document.createElement("div");
    newTitle.classList.add("display-title");
    newTitle.textContent = `${bookObject.title}`;
    newBook.appendChild(newTitle);

    // author
    const newAuthor = document.createElement("div");
    newAuthor.classList.add("display-author");
    newAuthor.textContent = `${bookObject.author}`;
    newBook.appendChild(newAuthor);

    // pages
    const newPages = document.createElement("div");
    newPages.classList.add("display-pages");
    newPages.textContent = `${bookObject.pages} Pages`;
    newBook.appendChild(newPages);

    // read status
    const newRead = document.createElement("div");
    const newReadLabel = document.createElement("label");
    const newReadCheckBox = document.createElement("input");

    newRead.classList.add("display-read");
    newReadLabel.setAttribute(
      "for",
      `${bookObject.title.replace(/\s+/g, "-").toLowerCase()}-read`
    );
    newReadLabel.textContent = `Read: `;

    newReadCheckBox.setAttribute("type", "checkbox");
    newReadCheckBox.setAttribute("data-index", `${bookIndex}`);
    newReadCheckBox.setAttribute(
      "id",
      `${bookObject.title.replace(/\s+/g, "-").toLowerCase()}-read`
    );
    newReadCheckBox.checked = bookObject.read;

    newRead.appendChild(newReadLabel);
    newRead.appendChild(newReadCheckBox);
    newBook.appendChild(newRead);

    // delete button
    const newDelete = document.createElement("button");
    newDelete.classList.add("display-delete");
    newDelete.setAttribute("type", "button");
    newDelete.textContent = "Delete";
    newDelete.setAttribute("data-index", `${bookIndex}`);

    newBook.appendChild(newDelete);

    bookCardSection.appendChild(newBook);
    bookIndex += 1;
  }
  // delete book
  const bookDeleteButtons = document.querySelectorAll("button[data-index]");

  bookDeleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      let index = deleteButton.getAttribute("data-index");
      myLibrary.splice(index, 1);
      displayBooks();
    });
  });

  const readCheckBoxes = document.querySelectorAll("input[data-index]");
  readCheckBoxes.forEach((readCheckBox) => {
    readCheckBox.addEventListener("change", () => {
      let index = readCheckBox.getAttribute("data-index");
      myLibrary[index].toggleRead();
    });
  });
}

displayBooks();

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
