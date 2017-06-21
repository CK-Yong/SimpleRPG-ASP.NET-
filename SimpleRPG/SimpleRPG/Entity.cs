using System;
using System.Diagnostics.CodeAnalysis;
using SimpleRPG.Tools;

namespace SimpleRPG
{
    [SuppressMessage("ReSharper", "ArrangeAccessorOwnerBody")]
    public abstract class Entity
    {
        private string _name;

        public string Name
        {
            get { return _name; }
            set
            {
                if (_name != null)
                    throw new NameAlreadyExistsException();
                _name = value;
            }
        }

        public virtual int Attack { get; protected set; }
        public virtual int Defense { get; protected set; }
        public virtual int Life { get; protected set; }
        public virtual int Mana { get; protected set; }
        public virtual int Stamina { get; protected set; }
        public virtual int Experience { get; protected set; }
        public virtual bool IsDead => Life <= 0;

        private void TakeDamage(int incomingDamage)
        {
            if (incomingDamage <= 0)
            {
                incomingDamage = 0;
            }
            var resultingDamage = ApplyDefenseModifier(incomingDamage);
            Life -= resultingDamage;
            Console.WriteLine($"{Name} took {resultingDamage} damage.");
            Console.WriteLine($"{Name} has {Life} hitpoints left.");
            if (IsDead)
                Kill();
        }

        private int ApplyDefenseModifier(int incomingDamage)
        {
            return (int) Math.Round((100 - Defense) * 0.01 * incomingDamage);
        }

        //Todo: make an attack class and use polymorphism to select the right attack
        public void RegularAttack(Entity targetEnemy)
        {
            Console.WriteLine($"{Name} attacked {targetEnemy.Name}.");
            var adjustedAttack = DetermineCrit(Attack);

            if (adjustedAttack == 0)
                Console.WriteLine($"{Name}'s attack missed!");

            targetEnemy.TakeDamage(adjustedAttack);
        }

        protected int DetermineCrit(int value)
        {
            return Randomizer.getAttackModifier(value);
        }

        protected virtual void Kill()
        {
            Console.WriteLine($"{Name} died.");
        }
    }
}