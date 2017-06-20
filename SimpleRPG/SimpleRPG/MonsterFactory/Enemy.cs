using System;

namespace SimpleRPG.MonsterFactory
{
    public abstract class Enemy : Player
    {
        public override int Attack { get; protected set; }
        public override int Defense { get; protected set; }
        public override int Life { get; protected set; }
        public override int Mana { get; protected set; }
        public override int Stamina { get; protected set; }
        public override int Experience { get; protected set; }
        public override bool IsDead => Life <= 0;

        protected override void Kill()
        {
            Console.WriteLine($"{Name} died.");
        }
    }
}