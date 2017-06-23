namespace SimpleRPG
{
    public sealed class Player : Entity
    {
        public Player(string name, int attack = 5, int defense = 5, int life = 100, int mana = 100, int stamina = 100,
            int experience = 0)
        {
            Name = name;
            Attack = attack;
            Defense = defense;
            Life = life;
            Mana = mana;
            Stamina = stamina;
            Experience = experience;
        }
    }
}