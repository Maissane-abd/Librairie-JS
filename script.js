import { Book } from "./book.js";
import { Library } from "./library.js"

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
//   console.log(form.elements.title.value);
//   console.log(event.target.autheur.value);
  const newBook = new Book (form.elements.title.value, event.target.autheur.value)
  const librairie = new Library();
  librairie.addBook(newBook);
  librairie.listBooks();

});

// const Cyrano = new Book ("Cyrano de Bergerac", "Edmond Rostand")
// const Malade = new Book ("Le Malade imaginaire", "Moliere")
// const librairie = new Library();
// console.log(Cyrano.getDetails());
// librairie.addBook(Cyrano);
// librairie.addBook(Malade);
// librairie.listBooks();

// console.log(librairie.findBookByTitle("Cyrano de Bergerac")); 
// console.log(librairie.findBookByTitle("L'Étranger")); 