enum Force {
    FORCE_ZERO = 0,
    FORCE_PETITE = 20,
    FORCE_MOYENNE = 50,
    FORCE_GRANDE = 80
}

class Personnage {
    private _force: Force

    public constructor(forceInitiale: Force = Force.FORCE_ZERO) {
        this._force = forceInitiale
    }

    public getForce(): Force {
        return this._force
    }

    public setForce(force: Force): void {
        if (this._force !== force) {
            this._force = force
        }
    }
}

// Main pour les tests
let p1 = new Personnage(80)
console.log("La force du premier personnage est : " + p1.getForce())