var Enemy: any =
(function(name = "Standard Guinea Pig", attack = 5, defense = 5, life = 25, mana = 100, stamina = 100) {
    var state = {
        Name: name,
        Attack: attack,
        Defense: defense,
        Life: life,
        Mana: mana,
        Stamina: stamina
    };
    return {
        setName(name): void {
            state.Name = name;
        },
        getName(): string {
            return state.Name;
        },
        getAttack(): number {
            return state.Attack;
        },
        getDefense(): number {
            return state.Defense;
        },
        getLife(): number {
            return state.Life;
        },
        getMana(): number {
            return state.Mana;
        },
        getStamina(): number {
            return state.Stamina;
        }
    };
})