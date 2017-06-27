var Player = (function (name, attack, defense, life, mana, stamina, experience) {
    if (name === void 0) { name = "Unknown Player"; }
    if (attack === void 0) { attack = 5; }
    if (defense === void 0) { defense = 5; }
    if (life === void 0) { life = 25; }
    if (mana === void 0) { mana = 100; }
    if (stamina === void 0) { stamina = 100; }
    if (experience === void 0) { experience = 0; }
    var state = {
        Name: name,
        Attack: attack,
        Defense: defense,
        Life: life,
        Mana: mana,
        Stamina: stamina,
        Experience: experience
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
        },
        getExperience: function () {
            return state.Experience;
        }
    };
});
//# sourceMappingURL=player.js.map