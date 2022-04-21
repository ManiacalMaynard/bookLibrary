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
function addBook(input) {
  // let book = new Book(image, title, author, link, inLibrary);
  // bookList.push(book)
  console.log(input)
};

// Need to add a removeBook() button that removes that book instance from the current working array and calls BUILDER to redraw the display
const removeBook = (id) => {
  bookList.splice(id, 1);
  deckBuilder()
}

// Need to add a libraryToggle() button that toggles the currentBook.inLibrary state
const libraryToggle = (thing) => {


};

const libraryDisplay = (item) => {
  return item.inLibrary === true ?
  '🗹' :
  '□' ;
};

// The mighty BUILDER function: Iterates through bookList array to build each card and add it to the cardDeck div container

function deckBuilder() {
  const books = document.getElementById('cardDeck')

  bookList.forEach(item => {

  const card = document.createElement('div')
    const content = `
    <img src=${item.image} />
    <div>
      <h3>${item.title}</h3>
      <p>by ${item.author}</p>
    </div>
    <div class="btnRow">
      <button class="deleteBtn" tooltip="DELETE">✖</button>
      <a href=${item.link} target="_blank"><button>Amazon</button></a>
      <button class="toggleBtn">${libraryDisplay(item)}</button>
    </div>
    `
    
    card.classList.add('card')
    card.setAttribute('id', item.id)
    card.innerHTML = content;
    
    books.appendChild(card)

  })
};

deckBuilder()