var Player = (function () {
    var state = {
        Name: "Unknown Player",
        Attack: 5,
        Defense: 5,
        Life: 100,
        Mana: 100,
        Stamina: 100,
        Experience: 0
    };
    return {
        setName(name) {
            state.Name = name;
        },
        getName() {
            return state.Name;
        },
        getAttack() {
            return state.Attack;
        },
        getDefense() {
            return state.Defense;
        },
        getLife() {
            return state.Life;
        },
        getMana() {
            return state.Mana;
        },
        getStamina() {
            return state.Stamina;
        },
        getExperience() {
            return state.Experience;
        }
    };
})