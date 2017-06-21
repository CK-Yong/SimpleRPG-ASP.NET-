using Microsoft.VisualStudio.TestTools.UnitTesting;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGTest
{
    [TestClass]
    public class EnemyTest
    {
        private Player player;
        private readonly EnemyFactory enemyfactory = new EnemyFactory();
        private Enemy normalGuineaPig;

        [TestInitialize]
        public void InitializeVariables()
        {
            normalGuineaPig = enemyfactory.MakeEnemy("Rodent");
            player = new Player("CK Yong");
        }

        [TestMethod]
        public void InsertingInvalidNameShouldThrowException()
        {
            Assert.ThrowsException<NameAlreadyExistsException>(() => normalGuineaPig.Name = "Pietjepuk");
        }

        [TestMethod]
        public void MonsterShouldBeAbleToAttackPlayer()
        {
            normalGuineaPig.RegularAttack(player);
            Assert.AreEqual(97, player.Life, 3);
        }

        [TestMethod]
        public void EnemyShouldBeAbleToDie()
        {
            for (var i = 0; i < 50; i++)
                player.RegularAttack(normalGuineaPig);
            Assert.IsTrue(normalGuineaPig.IsDead);
        }
    }
}