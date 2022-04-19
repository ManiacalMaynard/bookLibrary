import { bookList } from './booklist.js';

// Creates the Book object deckBuilder()
function Book (image, title, author, link, inLibrary) {
  this.image = image
  this.title = title
  this.author = author
  this.link = link
  this.inLibrary = inLibrary
};

// Adds build function to the Book.prototype
Book.prototype.build = function() {
  cardDeck.appendChild('div')
  // document.appendChild('.bookImage').src = this.image
  // document.appendChild('.bookTitle').innerText = this.title
  // document.appendChild('.bookAuthor').innerText = this.author
  // document.appendChild('.bookLink').href = this.link
  // document.appendChild('.inLibrary').innerText = this.inLibrary
};

// Need to add a button that will add a new book object to the end of the bookList array, needs to call BUILDER again to re-populate the cardDeck div container
function addBook(image, title, author, link, inLibrary) {
  let book = new Book(image, title, author, link, inLibrary);
  bookList.push(book)
}

// Need to add a removeBook() button that removes that book instance from the current working array and calls BUILDER to redraw the display
// const removeBook = (id) => {
//   bookList.splice(id, 1);
//   // deckBuilder()
// }

// Need to add a libraryToggle() button that toggles the currentBook.inLibrary state
// const libraryToggle = (id) => {
//   let bookInLibrary = bookList.id.inLibrary;
//   bookInLibrary === true ?
//   bookInLibrary = false :
//   bookInLibrary = true ;
// }

// The mighty BUILDER function: Iterates through bookList array to build each card and add it to the cardDeck div container

function deckBuilder() {
  const books = document.getElementById('cardDeck')

  bookList.forEach(bookList => {
    const card = document.createElement('div')
    card.classList.add('card')
    books.appendChild(card)
    for (let key in bookList) {
      // console.log(`${key}: ${bookList[key]}`)
      const text = document.createElement('p')
      text.innerHTML = (`${key}: ${bookList[key]}`)
      card.appendChild(text)
    }
  })
}

deckBuilder()