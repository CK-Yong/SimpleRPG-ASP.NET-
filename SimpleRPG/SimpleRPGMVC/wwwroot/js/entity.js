var Entity = (function () {
    function Entity() {
    }
    Object.defineProperty(Entity.prototype, "name", {
        get: function () {
            return this.Name;
        },
        set: function (name) {
            this.Name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "attack", {
        get: function () {
            return this.Attack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "defense", {
        get: function () {
            return this.Defense;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "life", {
        get: function () {
            return this.Life;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "mana", {
        get: function () {
            return this.Mana;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "stamina", {
        get: function () {
            return this.Stamina;
        },
        enumerable: true,
        configurable: true
    });
    return Entity;
}());
//# sourceMappingURL=entity.js.map