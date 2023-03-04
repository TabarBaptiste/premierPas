"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Personnage = /** @class */ (function () {
    function Personnage(forceInitiale, nom) {
        if (forceInitiale === void 0) { forceInitiale = Personnage.FORCE_ZERO; }
        if (nom === void 0) { nom = ""; }
        this._force = forceInitiale; // Initialisation de l'attribut _force avec la valeur passée en paramètre ou la valeur par défaut FORCE_ZERO
        this._nom = nom !== null && nom !== "" ? nom : null;
    }
    Personnage.prototype.getForce = function () {
        return this._force;
    };
    Personnage.prototype.setForce = function (force) {
        this._force = force;
    };
    // Définition d'un getter pour l'attribut _nom
    Personnage.prototype.getNom = function () {
        return this._nom;
    };
    // Définition d'un setter pour l'attribut _nom
    Personnage.prototype.setNom = function (nom) {
        if (nom !== null && nom !== "") {
            this._nom = nom;
        }
    };
    Personnage.prototype.entrerEnContact = function (chose) {
        this.modifierForce(chose);
    };
    Personnage.prototype.modifierForce = function (chose) {
        if (chose instanceof ChoseBienveillante) {
            this._force += chose.getPotentielDeContact();
        }
        else if (chose instanceof ChoseHostile) {
            this._force -= chose.getPotentielDeContact();
        }
    };
    // Définition de constantes statiques pour les forces possibles
    Personnage.FORCE_PETITE = 20;
    Personnage.FORCE_MOYENNE = 50;
    Personnage.FORCE_GRANDE = 80;
    Personnage.FORCE_ZERO = 0;
    return Personnage;
}());
var Chose = /** @class */ (function () {
    function Chose(potentielDeContact) {
        this._potentielDeContact = potentielDeContact;
    }
    Chose.prototype.getPotentielDeContact = function () {
        return this._potentielDeContact;
    };
    return Chose;
}());
var ChoseBienveillante = /** @class */ (function (_super) {
    __extends(ChoseBienveillante, _super);
    function ChoseBienveillante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChoseBienveillante.prototype.entrerEnContact = function (personnage) {
        personnage.setForce(personnage.getForce() + this.getPotentielDeContact());
    };
    return ChoseBienveillante;
}(Chose));
var ChoseHostile = /** @class */ (function (_super) {
    __extends(ChoseHostile, _super);
    function ChoseHostile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChoseHostile.prototype.entrerEnContact = function (personnage) {
        personnage.setForce(personnage.getForce() - this.getPotentielDeContact());
    };
    return ChoseHostile;
}(Chose));
// Création de deux instances de la classe Personnage avec des paramètres différents
var p2 = new Personnage(10, "Alice"); // Personnage avec une force de 10 et un nom "Alice"
var p1 = new Personnage(Personnage.FORCE_MOYENNE); // Personnage avec une force moyenne (5) et sans nom
// Création de deux instances des classes ChoseBienveillante et ChoseHostile avec des paramètres différents
var choseBienveillante = new ChoseBienveillante(5); // ChoseBienveillante avec une puissance de 5
var choseHostile = new ChoseHostile(3); // ChoseHostile avec une puissance de 3
// Appel de la méthode entrerEnContact sur les deux instances de la classe Personnage avec les instances des classes ChoseBienveillante et ChoseHostile en paramètres respectivement
p2.entrerEnContact(choseBienveillante);
p1.entrerEnContact(choseHostile);
// Affichage de la force des deux instances de la classe Personnage avec leur nom respectif s'il y en a un, sinon seulement la force
console.log("La force de " + (p2.getNom() !== null ? p2.getNom() + " " : "") + "est : " + p2.getForce());
console.log("La force de " + (p1.getNom() !== null ? p2.getNom() + " " : "") + "est : " + p1.getForce());
// Demande de saisie du nom d'un nouveau personnage et création d'une nouvelle instance de la classe Personnage avec la force moyenne et le nom saisi
rl.question('Quel est votre nom ? ', function (nom) {
    var p3 = new Personnage(Personnage.FORCE_GRANDE, nom);
    console.log("La force de ".concat(p3.getNom(), " est : ").concat(p3.getForce()));
    rl.close();
});
//# sourceMappingURL=Game.js.map