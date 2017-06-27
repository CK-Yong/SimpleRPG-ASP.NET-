class Player extends Entity {
    private Experience = 0;
    //Todo: fix instantiation
    constructor() {
        super();
        this.Name = "Unknown Player";
        this.Attack = 5;
        this.Defense = 5;
        this.Life = 100;
        this.Mana = 100;
        this.Stamina = 100;
    }

    get experience(): number {
        return this.Experience;
    }
}