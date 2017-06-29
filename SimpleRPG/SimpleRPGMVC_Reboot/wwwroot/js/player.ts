class Player extends Entity {
    private Experience = 0;

    constructor(name = "Unknown Player",
        attack = 5,
        defense = 5,
        life = 100,
        mana = 100,
        stamina = 100) {
        super();
        this.Name = name;
        this.Attack = attack;
        this.Defense = defense;
        this.Life = life;
        this.Mana = mana;
        this.Stamina = stamina;
    }

    get experience(): number {
        return this.Experience;
    }
}