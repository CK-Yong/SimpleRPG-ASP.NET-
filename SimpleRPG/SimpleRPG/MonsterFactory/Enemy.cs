namespace SimpleRPG.MonsterFactory
{
    using System;
    using SimpleRPG;

    public abstract class Enemy : Entity
    {
        public override int Attack { get; set; }
        public override int Defense { get; set; }
        public override int Life { get; set; }
        public override int Mana { get; set; }
        public override int Stamina { get; set; }
        public override int Experience { get; set; }
        public override bool IsDead => Life <= 0;

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