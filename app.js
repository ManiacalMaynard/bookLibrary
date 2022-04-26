const bookList = [
  {
    id: '0001',
    image: './images/zenmind.jpg',
    title: 'Zen Mind, Beginner\'s Mind',
    author: 'Shunryu Suzuki',
    inLibrary: true
  },
  {
    id: '0002',
    image: './images/eachmoment.jpg',
    title: 'Each Moment is the Universe',
    author: 'Dainin Katagiri Roshi',
    inLibrary: false
  },
  {
    id: '0003',
    image: './images/miracleofmindfulness.jpg',
    title: 'The Miracle of Mindfulness',
    author: 'Thich Nhat Hanh',
    inLibrary: true
  }
]; // NOTE - Tried to import the bookList but ran into issues with functions, need to research

// Creates the Book object
function Book (image, title, author, inLibrary) {
  this.image = image
  this.title = title
  this.author = author
  this.inLibrary = inLibrary
};

//     -----     ALL THE MODAL BOOK FORM STUFF HERE     -----     //
// Show and hide the book form modal
const showModal = () => {
  document.getElementById('bookForm').style.visibility = 'visible' ;
}
const hideModal = () => {
  document.getElementById('bookForm').style.visibility = 'hidden' ;
};

// Add book object to the array and rebuild the cardDeck div
function addBook() {
  let image = document.getElementById('bookImage').value
  let title = document.getElementById('bookTitle').value
  let author = document.getElementById('bookAuthor').value
  let inLibrary = document.getElementById('bookInLibrary').value
  bookList.push(new Book(image, title, author, inLibrary))
  hideModal()
  deckBuilder()
}

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
  books.innerHTML = '' // Clears out the div before re-drawing it

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