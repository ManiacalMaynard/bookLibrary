import { bookList } from './booklist.js';

// Creates the Book object constructor
function Book (image, title, author, link, inLibrary) {
  this.image = image
  this.title = title
  this.author = author
  this.link = link
  this.inLibrary = inLibrary
};

// Adds functionality to Book.prototype for cleaner code!
Book.prototype.info = function() {
  console.log(`${this.title} by ${this.author}`)
};

let thang = bookList[6] // just for testing

const book1 = new Book(thang.image, thang.title, thang.author)

book1.info()

// Need to add a removeBook() button that removes that book instance from the current working array and calls BUILDER to redraw the display

// Need to add a inLibrary() button that toggles the currentBook.inLibrary state

// Need to add a button that will add a new book object to the end of the bookList array, needs to call BUILDER again to re-populate the cardDeck div container

// The mighty BUILDER function: Iterates through bookList array to build each card and add it to the cardDeck div container