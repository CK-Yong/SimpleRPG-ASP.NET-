using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleRPG.MonsterFactory
{
    public class EnemyFactory
    {
        public Enemy MakeEnemy(string enemyType)
        {
            if (enemyType.Equals("Rodent", StringComparison.InvariantCultureIgnoreCase))
            {
                return new Rodent();
            }

            return null;
        }
    }
}
