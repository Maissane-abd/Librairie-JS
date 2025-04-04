export class Book {
    title 
    autor 

    // Un constructeur acceptant un titre de livre et un auteur 
    constructor(title, autor){
        this.title = title;
        this.autor = autor;
    }

    // Méthode getDetails() qui retourne une chaîne de caractères formatée avec le titre et l’auteur du livre
    getDetails() {
        return `"${this.title}" est un livre de ${this.autor}.`;
    }

}