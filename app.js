import { bookList } from './booklist.js';

// Creates the Book object
function Book (image, title, author, link, inLibrary) {
  this.image = image
  this.title = title
  this.author = author
  this.link = link
  this.inLibrary = inLibrary
};


// Need to add a removeBook() button that removes that book instance from the current working array and calls BUILDER to redraw the display
// const removeBook = (id) => {
//   bookList.splice(id, 1);
//   deckBuilder()
// };

// Need to add a libraryToggle() button that toggles the currentBook.inLibrary state
const libraryToggle = (item) => {

};

// The mighty BUILDER function: Iterates through bookList array to build each card and add it to the cardDeck div container
function deckBuilder() {
  const books = document.getElementById('cardDeck')

  bookList.forEach(item => {

    const card = document.createElement('div')

    const img = document.createElement('img')
    img.src = item.image

    const title = document.createElement('h3')
    title.innerText = item.title

    const author = document.createElement('p')
    author.innerText = item.author

    const buttons = document.createElement('div')
    const toggle = document.createElement('button')
    toggle.innerText = item.inLibrary === true ? '🗹' : '□' ;
    toggle.className = 'toggle'
    buttons.appendChild(toggle)

    // card.innerHTML = cardContent(item);
    card.classList.add('card')
    card.setAttribute('id', item.id)
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(buttons)
    books.appendChild(card)


  })
};

deckBuilder()