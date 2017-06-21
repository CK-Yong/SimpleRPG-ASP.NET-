using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGTest
{
    [TestClass]
    public class BattleTest
    {
        private EnemyFactory enemyFactory = new EnemyFactory();
        private Player player = new Player("CK Yong");
        private Enemy enemy;
        private Battle battle;

        [TestInitialize]
        public void Initialize()
        {
            enemy = enemyFactory.MakeEnemy("rodent");
            battle = new Battle(player, enemy);
        }

        [TestMethod]
        public void TestIfBattleExists()
        {
            Assert.IsNotNull(battle);
        }

        [TestMethod]
        public void PerformingRegularAttackShouldWork()
        {
            for (int i = 0; i < 10; i++)
            {
                battle.RegularAttack();
            }
            Assert.AreNotEqual(100, battle.Player.Life);
            Assert.AreNotEqual(25, battle.Monster.Life);
        }
    }
}