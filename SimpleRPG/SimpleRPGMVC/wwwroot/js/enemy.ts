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
        }
    };
})