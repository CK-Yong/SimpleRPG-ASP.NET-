using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;

namespace SimpleRPG
{
    [SuppressMessage("ReSharper", "ArrangeAccessorOwnerBody")]
    public class Player
    {
        public Player(int attack = 5, int defense = 5, int life = 100, int mana = 100, int stamina = 100,
            int experience = 0)
        {
            Attack = attack;
            Defense = defense;
            Life = life;
            Mana = mana;
            Stamina = stamina;
            Experience = experience;
        }

        private string _name;

        public string Name
        {
            get { return _name; }
            set
            {
                if (_name != null)
                {
                    throw new NameAlreadyExistsException();
                }
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
            if (incomingDamage < 0)
            {
                incomingDamage = 0;
            }
            var resultingDamage = ApplyDefenseModifier(incomingDamage);
            Console.WriteLine($"{Name} took {resultingDamage} damage.");
            Life -= resultingDamage;
            Console.WriteLine($"{Name} has {Life} hitpoints left.");
            if (IsDead)
            {
                Kill();
            }
        }

        private int ApplyDefenseModifier(int incomingDamage)
        {
            return (int)Math.Round((100 - Defense) * 0.01 * incomingDamage);
        }

        //Todo: make an attack class and use polymorphism to select the right attack
        public void RegularAttack(Player targetEnemy)
        {
            Console.WriteLine($"{Name} attacked {targetEnemy.Name}.");
            targetEnemy.TakeDamage(Randomize(Attack));
        }

        protected int Randomize(int value)
        {
            var randomizer = new Random();
            return value + randomizer.Next(0, 6) - 3;
        }

        protected virtual void Kill()
        {
            Console.WriteLine($"{Name} died.");
        }
    }
}