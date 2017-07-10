namespace SimpleRPG.MonsterFactory
{
    using System;
    using SimpleRPG;

    public class Enemy : Entity
    {
        public Enemy(Entity enemy = null, string name = "Normal Guinea Pig", int attack = 3, int defense = 3, int life = 25, int mana = 0, int stamina = 0)
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

        protected override void TakeDamage(int incomingDamage, Entity attacker = null)
        {
            base.TakeDamage(incomingDamage);
            if (attacker != null)
            {
                base.RegularAttack(attacker);
            }
        }
    }
}