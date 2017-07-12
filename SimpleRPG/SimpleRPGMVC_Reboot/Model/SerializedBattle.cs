using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleRPGMVC.Model
{
    using Newtonsoft.Json;
    using SimpleRPG;
    using SimpleRPG.MonsterFactory;

    public class SerializedBattle
    {
        public Player player { get; set; }
        public Enemy enemy { get; set; }
        public String log { get; set; }
    }
}