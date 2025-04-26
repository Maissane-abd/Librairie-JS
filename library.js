// Module pour la gestion de la bibliothèque.
export class Library {

    // Un tableau pour stocker une liste de livres, il contient tous les livres ajoutés à la bibliothèque
    list = []

    // Une méthode addBook(book) qui permet d’ajouter un livre à la bibliothèque
    addBook(book){
        this.list.push(book);
    }
    
    // Une méthode listBooks() qui affiche dans la console tous les livres de la bibliothèque (1 point).
    listBooks(){
        this.list.forEach(element => {
            console.log(element.title - element.author);
        });
    }

    // Une méthode findBookByTitle(title) qui recherche un livre par son titre (sensible à la casse) 
    // et retourne ses détails si trouvé, ou un message d’erreur si non trouvé (3 points).
    findBookByTitle(title){
        const book = this.list.find(book => book.title === title);
        return book ? book.getDetails() : `Le livre "${title}" n'a pas été trouvé`;
    }
}