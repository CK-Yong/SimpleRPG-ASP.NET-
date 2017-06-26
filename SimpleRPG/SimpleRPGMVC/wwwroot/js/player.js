var Player = (function() {
    var state = {
        Name: "Unknown Player",
        Attack: 5,
        Defense: 5,
        Life: 100,
        Mana: 100,
        Stamina: 100,
        Experience: 0
    };
    return{
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
        },
        getExperience: function() {
            return state.Experience;
        }
    };
})