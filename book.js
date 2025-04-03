export class Book {
    title 
    autor 

    constructor(title, autor){
        this.title = title;
        this.autor = autor;
    }

    getDetails() {
        return `"${this.title}" est un livre de ${this.autor}.`;
    }

}