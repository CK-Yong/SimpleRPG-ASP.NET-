namespace SimpleRPG.MonsterFactory
{
    using System;

    public class EnemyFactory
    {
        public Enemy MakeEnemy<TEnemy>()
            where TEnemy : Enemy, new()
        {
            return new TEnemy();
        }

        public Enemy MakeEnemy(string enemyType)
        {
            if (enemyType.Equals("Rodent", StringComparison.CurrentCultureIgnoreCase))
            {
                return new Rodent();
            }

            return null;
        }
    }
}