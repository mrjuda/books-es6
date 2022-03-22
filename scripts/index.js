/* eslint-disable max-classes-per-file */

// branch books-es6-refactor

import Library from '../modules/libraryModule.js';

const libraryBtn = document.getElementById('LibraryBtn');
const newBtn = document.getElementById('NewBtn');
const contactBtn = document.getElementById('ContactBtn');
const libraryPage = document.getElementById('Library');
const newPage = document.getElementById('New');
const contactPage = document.getElementById('Contact');
const libraryStr = 'library';
const hidden = 'hidden';
const newStr = 'new';
const contactStr = 'contact';

const pageSetup = () => {
  newPage.className = hidden;
  contactPage.className = hidden;
};

pageSetup();

contactBtn.addEventListener('click', () => {
  libraryPage.className = hidden;
  newPage.className = hidden;
  contactPage.className = contactStr;
});

newBtn.addEventListener('click', () => {
  libraryPage.className = hidden;
  contactPage.className = hidden;
  newPage.className = newStr;
});

libraryBtn.addEventListener('click', () => {
  libraryPage.className = libraryStr;
  newPage.className = hidden;
  contactPage.className = hidden;
});

const dt = new Date();
document.getElementById('date-time').innerHTML = dt;

const library = new Library();
library.setUpAddListener();
