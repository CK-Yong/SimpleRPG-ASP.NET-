namespace SimpleRPG
{
    using System;
    using System.Diagnostics.CodeAnalysis;
    using Exceptions;
    using Tools;

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

        public int Attack { get; set; }
        public int Defense { get; set; }
        public int Life { get; set; }
        public int Mana { get; set; }
        public int Stamina { get; set; }
        public bool IsDead => Life <= 0;

        protected virtual void TakeDamage(int incomingDamage, Entity attacker = null)
        {
            if (incomingDamage <= 0)
            {
                incomingDamage = 0;
            }
            var resultingDamage = ApplyDefenseModifier(incomingDamage);
            Life -= resultingDamage;
            Battlelog.addEntry($"{Name} took {resultingDamage} damage.");
            Battlelog.addEntry($"{Name} has {Life} hitpoints left.");
            if (this.IsDead)
            {
                Kill();
            }
        }

        private int ApplyDefenseModifier(int incomingDamage)
        {
            return (int)Math.Round((100 - Defense) * 0.01 * incomingDamage);
        }

        //Todo: make an attack class and use polymorphism to select the right attack
        public void RegularAttack(Entity targetEnemy)
        {
            Battlelog.addEntry($"{Name} attacked {targetEnemy.Name}.");
            var adjustedAttack = DetermineCrit(Attack);

            if (adjustedAttack == 0)
            {
                Battlelog.addEntry($"{Name}'s attack missed!");
            }
            targetEnemy.TakeDamage(adjustedAttack, this);
        }

        protected int DetermineCrit(int value)
        {
            return Randomizer.getAttackModifier(value);
        }

        protected void Kill()
        {
            Battlelog.addEntry($"{Name} died.");
        }
    }
}