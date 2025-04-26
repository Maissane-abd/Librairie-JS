// Module pour les livres
export class Book {
    title 
    author 

    // Un constructeur acceptant un titre de livre et un auteur 
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    // Méthode getDetails() qui retourne une chaîne de caractères formatée avec le titre et l’auteur du livre
    getDetails() {
        return `Titre : "${this.title}" / Auteur : ${this.author}`;
    }

}