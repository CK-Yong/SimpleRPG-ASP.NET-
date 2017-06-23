namespace SimpleRPG.MonsterFactory
{
    using System;

    public class EnemyFactory
    {
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