class Player {
    constructor(
        private Name: string = "Unknown Player",
        private Attack: number = 5,
        private Defense: number = 5,
        private Life: number = 100,
        private Mana: number = 100,
        private Stamina: number = 100,
        private Experience: number = 0) {
    }

    set name(name:string){
        this.Name = name;
    }

    get name(): string {
        return this.Name;
    }

    get attack(): number {
        return this.Attack;
    }

    get defense(): number {
        return this.Defense;
    }

    get life(): number {
        return this.Life;
    }

    get mana(): number {
        return this.Mana;
    }

    get stamina(): number {
        return this.Stamina;
    }

    get experience(): number {
        return this.Experience;
    }
}