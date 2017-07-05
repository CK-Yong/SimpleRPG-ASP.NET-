namespace SimpleRPG.MonsterFactory
{
    using System;
    using SimpleRPG;

    public class Enemy : Entity
    {
        public Enemy(string name = "Normal Guinea Pig", int attack = 3, int defense = 3, int life = 25, int mana = 0, int stamina = 0)
        {
            Name = name;
            Attack = attack;
            Defense = defense;
            Life = life;
            Mana = mana;
            Stamina = stamina;
        }

        protected override void Kill()
        {
            Console.WriteLine($"{Name} died.");
        }

        public void PerformAttackOn(Entity target)
        {
            RegularAttack(target);
        }
    }
}