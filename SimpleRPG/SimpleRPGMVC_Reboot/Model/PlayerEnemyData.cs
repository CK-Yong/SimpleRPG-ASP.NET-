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
        public Player Player { get; set; }
        public Enemy Enemy { get; set; }
    }
}