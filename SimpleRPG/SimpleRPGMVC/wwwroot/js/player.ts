class Player {
    constructor(
        private Name: string = "Unknown Player",
        private Attack: number = 5,
        private Defense: number = 5,
        private Life: number = 25,
        private Mana: number = 100,
        private Stamina: number = 100,
        private Experience: number = 0) {
    }

    setName(name): void {
        this.Name = name;
    }

    getName(): string {
        return this.Name;
    }

    getAttack(): number {
        return this.Attack;
    }

    getDefense(): number {
        return this.Defense;
    }

    getLife(): number {
        return this.Life;
    }

    getMana(): number {
        return this.Mana;
    }

    getStamina(): number {
        return this.Stamina;
    }

    getExperience(): number {
        return this.Experience;
    }
}