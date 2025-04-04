import { Book } from "./book.js";
import { Library } from "./library.js"

const Cyrano = new Book ("Cyrano de Bergerac", "Edmond Rostand")
const Malade = new Book ("Le Malade imaginaire", "Moliere")
const librairie = new Library();
console.log(Cyrano.getDetails());
librairie.addBook(Cyrano);
librairie.addBook(Malade);
librairie.listBooks();

console.log(librairie.findBookByTitle("Cyrano de Bergerac")); 
console.log(librairie.findBookByTitle("L'Étranger")); 