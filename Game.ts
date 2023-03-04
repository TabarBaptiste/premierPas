// Définition d'un type union pour les forces possibles
type Force =
    typeof Personnage.FORCE_ZERO
    | typeof Personnage.FORCE_PETITE
    | typeof Personnage.FORCE_MOYENNE
    | typeof Personnage.FORCE_GRANDE;

// Définition de la classe Personnage
class Personnage {

    // Définition de constantes statiques pour les forces possibles
    static readonly FORCE_PETITE = 20;
    static readonly FORCE_MOYENNE = 50;
    static readonly FORCE_GRANDE = 80;
    static readonly FORCE_ZERO = 0;

    // Définition des attributs privés de la classe
    private _force: Force;
    private _nom: string;

    // Définition du constructeur de la classe Personnage, prenant une force initiale et un nom optionnels
    public constructor(forceInitiale: Force = Personnage.FORCE_ZERO, nom: string = "") {
        this._force = forceInitiale; // Initialisation de l'attribut _force avec la valeur passée en paramètre ou la valeur par défaut FORCE_ZERO
        this._nom = nom; // Initialisation de l'attribut _nom avec la valeur passée en paramètre ou une chaîne vide
    }

    // Définition d'un getter pour l'attribut _force
    public getForce(): Force {
        return this._force;
    }

    // Définition d'un setter pour l'attribut _force
    public setForce(force: Force): void {
        if (this._force !== force) { // Si la nouvelle force est différente de l'ancienne
            this._force = force; // On met à jour l'attribut _force avec la nouvelle force
        }
    }

    // Définition d'un getter pour l'attribut _nom
    public getNom(): string {
        return this._nom;
    }

    // Définition d'un setter pour l'attribut _nom
    public setNom(nom: string): void {
        if (this._nom !== nom) { // Si le nouveau nom est différent de l'ancien
            this._nom = nom; // On met à jour l'attribut _nom avec le nouveau nom
        }
    }
}
// Main pour les tests
let p1 = new Personnage(80, "Alice");
let p2 = new Personnage(); // c. Personne = 0 variable p2

p2.setForce(p1.getForce());// e. p2 prends Force p1
p1.setForce(Personnage.FORCE_MOYENNE); //i. Moyenne = 50

console.log("La force du premier personnage est : " + p1.getForce());
console.log("La force du deuxième personnage est : " + p2.getForce());