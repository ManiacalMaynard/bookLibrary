import { bookList } from './booklist.js';

let currentBook = Math.floor(Math.random() * bookList.length)

console.log(bookList[currentBook])

function tester() {
  document.querySelector('.bookImage').src = bookList[currentBook].image;
  document.querySelector('.bookTitle').innerText = bookList[currentBook].title;
  document.querySelector('.bookAuthor').innerText = bookList[currentBook].author;
  document.querySelector('.bookLink').href = bookList[currentBook].link;
  bookList[currentBook].isRead == 'yes' ?
  document.querySelector('.isRead').innerText = 'yes' :
  document.querySelector('.isRead').innerText = 'no';
}

tester()