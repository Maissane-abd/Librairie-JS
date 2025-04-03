import { book } from "./book.js";
import { CompteBancaire } from "./CompteBancaire.js";

book();

const Maiss = new CompteBancaire("Msn", 100);
console.log(Maiss.getSolde());
console.log(Maiss.crediter(200));
console.log(Maiss.getSolde());