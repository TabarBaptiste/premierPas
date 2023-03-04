// Définition de la classe Personnage
var Personnage = /** @class */ (function () {
    // Définition du constructeur de la classe Personnage, prenant une force initiale et un nom optionnels
    function Personnage(forceInitiale, nom) {
        if (forceInitiale === void 0) { forceInitiale = Personnage.FORCE_ZERO; }
        if (nom === void 0) { nom = ""; }
        this._force = forceInitiale; // Initialisation de l'attribut _force avec la valeur passée en paramètre ou la valeur par défaut FORCE_ZERO
        this._nom = nom; // Initialisation de l'attribut _nom avec la valeur passée en paramètre ou une chaîne vide
    }
    // Définition d'un getter pour l'attribut _force
    Personnage.prototype.getForce = function () {
        return this._force;
    };
    // Définition d'un setter pour l'attribut _force
    Personnage.prototype.setForce = function (force) {
        if (this._force !== force) { // Si la nouvelle force est différente de l'ancienne
            this._force = force; // On met à jour l'attribut _force avec la nouvelle force
        }
    };
    // Définition d'un getter pour l'attribut _nom
    Personnage.prototype.getNom = function () {
        return this._nom;
    };
    // Définition d'un setter pour l'attribut _nom
    Personnage.prototype.setNom = function (nom) {
        if (this._nom !== nom) { // Si le nouveau nom est différent de l'ancien
            this._nom = nom; // On met à jour l'attribut _nom avec le nouveau nom
        }
    };
    // Définition de constantes statiques pour les forces possibles
    Personnage.FORCE_PETITE = 20;
    Personnage.FORCE_MOYENNE = 50;
    Personnage.FORCE_GRANDE = 80;
    Personnage.FORCE_ZERO = 0;
    return Personnage;
}());
// Main pour les tests
var p1 = new Personnage(80, "Alice");
var p2 = new Personnage(); // c. Personne = 0 variable p2
p2.setForce(p1.getForce()); // e. p2 prends Force p1
p1.setForce(Personnage.FORCE_MOYENNE); //i. Moyenne = 50
console.log("La force du premier personnage est : " + p1.getForce());
console.log("La force du deuxième personnage est : " + p2.getForce());
//# sourceMappingURL=Game.js.map