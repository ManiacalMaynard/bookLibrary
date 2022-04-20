import { bookList } from './booklist.js';

// Creates the Book object
function Book (image, title, author, link, inLibrary) {
  this.image = image
  this.title = title
  this.author = author
  this.link = link
  this.inLibrary = inLibrary
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

  bookList.forEach(item => {

  const card = document.createElement('div')
    const content = `
    <img src=${item.image} />
    <h3>${item.title}</h3>
    <p>by ${item.author}</p>
    <a href=${item.link} target="_blank"><button>Amazon</button></a>
    <p>In Library: ${item.inLibrary}</p>
    `
    card.classList.add('card')
    card.setAttribute('id', item.id)
    card.innerHTML = content;

    books.appendChild(card)

  })
}

deckBuilder()