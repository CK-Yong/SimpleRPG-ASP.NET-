using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleRPGMVC.Model
{
    using SimpleRPG;
    using SimpleRPG.MonsterFactory;

    public class PlayerEnemyData
    {
        public Player player { get; set; }
        public Enemy enemy { get; set; }
    }
}