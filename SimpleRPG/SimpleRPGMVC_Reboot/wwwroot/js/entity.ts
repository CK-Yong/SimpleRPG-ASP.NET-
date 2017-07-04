abstract class Entity {
    public Name: string;
    public Attack: number;
    public Defense: number;
    public Life: number;
    public Mana: number;
    public Stamina: number;

    set name(name: string) {
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
}