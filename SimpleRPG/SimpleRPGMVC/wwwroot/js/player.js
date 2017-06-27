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
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this.Name;
        },
        set: function (name) {
            this.Name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "attack", {
        get: function () {
            return this.Attack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "defense", {
        get: function () {
            return this.Defense;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "life", {
        get: function () {
            return this.Life;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "mana", {
        get: function () {
            return this.Mana;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "stamina", {
        get: function () {
            return this.Stamina;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "experience", {
        get: function () {
            return this.Experience;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
//# sourceMappingURL=player.js.map