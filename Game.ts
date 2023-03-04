import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Définition d'un type union pour les forces possibles
type Force =
    typeof Personnage.FORCE_ZERO
    | typeof Personnage.FORCE_PETITE
    | typeof Personnage.FORCE_MOYENNE
    | typeof Personnage.FORCE_GRANDE
    | number;

    class Personnage {
        // Définition de constantes statiques pour les forces possibles
        static readonly FORCE_PETITE = 20;
        static readonly FORCE_MOYENNE = 50;
        static readonly FORCE_GRANDE = 80;
        static readonly FORCE_ZERO = 0;
    
        // Déclaration des attributs de la classe
        private _force: number; // La force du personnage
        private _nom: string | null; // Le nom du personnage, peut être null
    
        // Constructeur de la classe, prenant une force initiale et un nom optionnels
        public constructor(forceInitiale: Force = Personnage.FORCE_ZERO, nom: string = "") {
            // Initialisation de l'attribut _force avec la valeur passée en paramètre ou la valeur par défaut FORCE_ZERO
            this._force = forceInitiale;
            // Initialisation de l'attribut _nom avec la valeur passée en paramètre ou null
            this._nom = nom !== null && nom !== "" ? nom : null;
        }
    
        // Définition d'un getter pour l'attribut _force
        public getForce(): number {
            return this._force;
        }
    
        // Définition d'un setter pour l'attribut _force
        public setForce(force: number): void {
            this._force = force;
        }
    
        // Définition d'un getter pour l'attribut _nom
        public getNom(): string {
            return this._nom;
        }
    
        // Définition d'un setter pour l'attribut _nom, vérifiant que le nom n'est pas null ou une chaîne vide
        public setNom(nom: string | null): void {
            if (nom !== null && nom !== "") {
                this._nom = nom;
            }
        }
    
        // Méthode permettant à un personnage d'entrer en contact avec une chose
        public entrerEnContact(chose: Chose): void {
            this.modifierForce(chose);
        }
    
        // Méthode privée qui modifie la force du personnage en fonction de la chose en contact
        private modifierForce(chose: Chose): void {
            if (chose instanceof ChoseBienveillante) {
                this._force += chose.getPotentielDeContact();
            } else if (chose instanceof ChoseHostile) {
                this._force -= chose.getPotentielDeContact();
            }
        }
    }
    

// Définition de la classe Chose
class Chose {
    // Définition de la propriété potentielDeContact
    private _potentielDeContact: number;

    // Constructeur de la classe Chose
    constructor(potentielDeContact: number) {
        // Initialisation de la propriété potentielDeContact
        this._potentielDeContact = potentielDeContact;
    }

    // Méthode qui renvoie la valeur de potentielDeContact
    public getPotentielDeContact(): number {
        return this._potentielDeContact;
    }
}

// Définition de la classe ChoseBienveillante, qui hérite de la classe Chose
class ChoseBienveillante extends Chose {
    // Méthode qui modifie la force du personnage en ajoutant la valeur de potentielDeContact de la chose
    public entrerEnContact(personnage: Personnage): void {
        personnage.setForce(personnage.getForce() + this.getPotentielDeContact());
    }
}

// Définition de la classe ChoseHostile, qui hérite de la classe Chose
class ChoseHostile extends Chose {
    // Méthode qui modifie la force du personnage en soustrayant la valeur de potentielDeContact de la chose
    public entrerEnContact(personnage: Personnage): void {
        personnage.setForce(personnage.getForce() - this.getPotentielDeContact());
    }
}


// Création de deux instances de la classe Personnage avec des paramètres différents
let p2 = new Personnage(10, "Alice"); // Personnage avec une force de 10 et un nom "Alice"
let p1 = new Personnage(Personnage.FORCE_MOYENNE); // Personnage avec une force moyenne (5) et sans nom

// Création de deux instances des classes ChoseBienveillante et ChoseHostile avec des paramètres différents
const choseBienveillante = new ChoseBienveillante(5); // ChoseBienveillante avec une puissance de 5
const choseHostile = new ChoseHostile(3); // ChoseHostile avec une puissance de 3

// Appel de la méthode entrerEnContact sur les deux instances de la classe Personnage avec les instances des classes ChoseBienveillante et ChoseHostile en paramètres respectivement
p2.entrerEnContact(choseBienveillante);
p1.entrerEnContact(choseHostile);

// Affichage de la force des deux instances de la classe Personnage avec leur nom respectif s'il y en a un, sinon seulement la force
console.log("La force de " + (p2.getNom() !== null ? p2.getNom() + " " : "") + "est : " + p2.getForce());
console.log("La force de " + (p1.getNom() !== null ? p2.getNom() + " " : "") + "est : " + p1.getForce());

// Demande de saisie du nom d'un nouveau personnage et création d'une nouvelle instance de la classe Personnage avec la force moyenne et le nom saisi
rl.question('Quel est votre nom ? ', (nom: string) => {
    let p3 = new Personnage(Personnage.FORCE_GRANDE, nom);
    console.log(`La force de ${p3.getNom()} est : ${p3.getForce()}`);
    rl.close();
});
