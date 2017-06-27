var Player = (function () {
    function Player(Name, Attack, Defense, Life, Mana, Stamina, Experience) {
        if (Name === void 0) { Name = "Unknown Player"; }
        if (Attack === void 0) { Attack = 5; }
        if (Defense === void 0) { Defense = 5; }
        if (Life === void 0) { Life = 25; }
        if (Mana === void 0) { Mana = 100; }
        if (Stamina === void 0) { Stamina = 100; }
        if (Experience === void 0) { Experience = 0; }
        this.Name = Name;
        this.Attack = Attack;
        this.Defense = Defense;
        this.Life = Life;
        this.Mana = Mana;
        this.Stamina = Stamina;
        this.Experience = Experience;
    }
    Player.prototype.setName = function (name) {
        this.Name = name;
    };
    Player.prototype.getName = function () {
        return this.Name;
    };
    Player.prototype.getAttack = function () {
        return this.Attack;
    };
    Player.prototype.getDefense = function () {
        return this.Defense;
    };
    Player.prototype.getLife = function () {
        return this.Life;
    };
    Player.prototype.getMana = function () {
        return this.Mana;
    };
    Player.prototype.getStamina = function () {
        return this.Stamina;
    };
    Player.prototype.getExperience = function () {
        return this.Experience;
    };
    return Player;
}());
//# sourceMappingURL=player.js.map