var Enemy: any =
(function(name: string = "Standard Guinea Pig",
    attack: number = 5,
    defense: number = 5,
    life: number = 25,
    mana: number = 100,
    stamina: number = 100) {
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