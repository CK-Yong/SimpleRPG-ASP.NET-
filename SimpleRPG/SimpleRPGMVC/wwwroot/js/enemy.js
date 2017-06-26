var Enemy = (function(name = "Standard Guinea Pig", attack = 5, defense = 5, life = 25, mana = 100, stamina = 100) {
    var state = {
        Name: name,
        Attack: attack,
        Defense: defense,
        Life: life,
        Mana: mana,
        Stamina: stamina
    };
    return {
        setName: function(name) {
            state.Name = name;
        },
        getName: function() {
            return state.Name;
        },
        getAttack: function() {
            return state.Attack;
        },
        getDefense: function() {
            return state.Defense;
        },
        getLife: function() {
            return state.Life;
        },
        getMana: function() {
            return state.Mana;
        },
        getStamina: function() {
            return state.Stamina;
        }
    };
})