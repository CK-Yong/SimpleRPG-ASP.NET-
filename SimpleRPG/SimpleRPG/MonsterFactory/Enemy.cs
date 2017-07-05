namespace SimpleRPG.MonsterFactory
{
    using System;
    using SimpleRPG;

    public class Enemy : Entity
    {
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