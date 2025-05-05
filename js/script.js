import { Book } from "./book.js";
import { Library } from "./library.js"

// Créer une instance globale de la bibliothèque
const library = new Library();

// Récupération des éléments HTML
const addBookForm = document.getElementById('addBookForm');
const listBooksBtn = document.getElementById('listBooksBtn');
const bookList = document.getElementById('bookList');
const searchForm = document.getElementById('searchForm');
const searchResult = document.getElementById('searchResult');

// Ajouter un livre
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();

  if (!title || !author) {
    alert('Veuillez remplir tous les champs');
    return;
  }

  const newBook = new Book(title, author);
  library.addBook(newBook);

  // Clear inputs
  addBookForm.reset();
  alert(`Livre "${title}" ajouté à la bibliothèque.`);
});

// Lister les livres
listBooksBtn.addEventListener('click', () => {
  bookList.innerHTML = ''; // vider la liste
  library.list.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = book.getDetails();
    bookList.appendChild(li);
  });
});

// Rechercher un livre par titre
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTitle = document.getElementById('searchTitle').value.trim();
  const result = library.findBookByTitle(searchTitle);
  searchResult.textContent = result;
  
  if (result.includes('n\'a pas été trouvé')) {
    searchResult.classList.add('error'); 
  } else {
    searchResult.classList.remove('error'); 
  }
});