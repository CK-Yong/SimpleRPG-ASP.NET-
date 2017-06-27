var Enemy = (function (name, attack, defense, life, mana, stamina) {
    if (name === void 0) { name = "Standard Guinea Pig"; }
    if (attack === void 0) { attack = 5; }
    if (defense === void 0) { defense = 5; }
    if (life === void 0) { life = 25; }
    if (mana === void 0) { mana = 100; }
    if (stamina === void 0) { stamina = 100; }
    var state = {
        Name: name,
        Attack: attack,
        Defense: defense,
        Life: life,
        Mana: mana,
        Stamina: stamina
    };
    return {
        setName: function (name) {
            state.Name = name;
        },
        getName: function () {
            return state.Name;
        },
        getAttack: function () {
            return state.Attack;
        },
        getDefense: function () {
            return state.Defense;
        },
        getLife: function () {
            return state.Life;
        },
        getMana: function () {
            return state.Mana;
        },
        getStamina: function () {
            return state.Stamina;
        }
    };
});
//# sourceMappingURL=enemy.js.map