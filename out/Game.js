var Force;
(function (Force) {
    Force[Force["FORCE_ZERO"] = 0] = "FORCE_ZERO";
    Force[Force["FORCE_PETITE"] = 20] = "FORCE_PETITE";
    Force[Force["FORCE_MOYENNE"] = 50] = "FORCE_MOYENNE";
    Force[Force["FORCE_GRANDE"] = 80] = "FORCE_GRANDE";
})(Force || (Force = {}));
var Personnage = /** @class */ (function () {
    function Personnage(forceInitiale) {
        if (forceInitiale === void 0) { forceInitiale = Force.FORCE_ZERO; }
        this._force = forceInitiale;
    }
    Personnage.prototype.getForce = function () {
        return this._force;
    };
    Personnage.prototype.setForce = function (force) {
        if (this._force !== force) {
            this._force = force;
        }
    };
    return Personnage;
}());
// Main pour les tests
var p1 = new Personnage(80);
console.log("La force du premier personnage est : " + p1.getForce());
//# sourceMappingURL=Game.js.map