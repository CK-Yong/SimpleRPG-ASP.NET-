using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SimpleRPG.MonsterFactory;

namespace SimpleRPG
{
    public class Battle
    {
        public Player Player { get; private set; }
        public Enemy Monster { get; private set; }
        public bool IsBattleOver { get; private set; }

        public Battle(Player player, Enemy monster)
        {
            Player = player;
            Monster = monster;
        }

        public void RegularAttack()
        {
            Player.RegularAttack(Monster);
            CheckIfRetaliationNeeded();
        }

        private void CheckIfRetaliationNeeded()
        {
            if (Monster.IsDead)
            {
                IsBattleOver = true;
                return;
            }
            Monster.RegularAttack(Player);
        }
    }
}
