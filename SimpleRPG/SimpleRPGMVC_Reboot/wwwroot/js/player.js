class Player extends Entity {
    constructor(name = "Unknown Player", attack = 5, defense = 5, life = 100, mana = 100, stamina = 100, experience = 0) {
        super();
        this.Experience = 0;
        this.Name = name;
        this.Attack = attack;
        this.Defense = defense;
        this.Life = life;
        this.Mana = mana;
        this.Stamina = stamina;
        this.Experience = experience;
    }
    get experience() {
        return this.Experience;
    }
}
//# sourceMappingURL=player.js.map