import { bookList } from './booklist.js';

let currentBook = Math.floor(Math.random() * bookList.length)

function tester() {
  document.querySelector('.bookImage').src = bookList[currentBook].image;
  document.querySelector('.bookTitle').innerText = bookList[currentBook].title;
  document.querySelector('.bookAuthor').innerText = bookList[currentBook].author;
  document.querySelector('.bookLink').href = bookList[currentBook].link;
}

tester()