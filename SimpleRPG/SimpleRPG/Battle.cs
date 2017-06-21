using SimpleRPG.MonsterFactory;

namespace SimpleRPG
{
    public class Battle
    {
        public Player Player { get; }
        public Enemy Monster { get; }
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
