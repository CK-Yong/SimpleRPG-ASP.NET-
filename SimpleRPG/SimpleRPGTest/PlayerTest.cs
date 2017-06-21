using Microsoft.VisualStudio.TestTools.UnitTesting;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGTest
{
    [TestClass]
    public class PlayerTest
    {
        private Player player;
        private EnemyFactory enemyFactory = new EnemyFactory();

        [TestInitialize]
        public void InitializeVariables()
        {
            player = new Player("CK Yong");
        }

        [TestMethod]
        public void SetNameToCkYong()
        {
            Assert.AreEqual("CK Yong", player.Name);
        }

        [TestMethod]
        public void InsertingInvalidNameShouldThrowException()
        {
            Assert.ThrowsException<NameAlreadyExistsException>(() => player.Name = "Pietjepuk");
        }

        [TestMethod]
        public void PlayerShouldBeAbleToAttackMonster()
        {
            Enemy normalGuineaPig = enemyFactory.MakeEnemy("Rodent");
            player.RegularAttack(normalGuineaPig);
            Assert.AreEqual(20, normalGuineaPig.Life, 3);
        }

        [TestMethod]
        public void PlayerShouldBeAbleToDie()
        {
            Enemy normalGuineaPig = enemyFactory.MakeEnemy("Rodent");
            for (var i = 0; i < 100; i++)
                normalGuineaPig.RegularAttack(player);
            Assert.IsTrue(player.IsDead);
        }
    }
}