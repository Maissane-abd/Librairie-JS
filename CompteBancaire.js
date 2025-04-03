export class CompteBancaire {
    titulaire
    solde

    constructor(titu, solde){
        this.titulaire = titu;
        this.solde = solde;
    }

    crediter(a){
        return this.solde += a;
    }

    debiter(a){
        return this.solde -= a;
    }
    
    getSolde(){
        console.log(this.solde)
    }

}