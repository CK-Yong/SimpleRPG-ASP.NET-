using Microsoft.VisualStudio.TestTools.UnitTesting;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGTest
{
    [TestClass]
    public class EnemyTest
    {
        private Player player;
        private Enemy oneEyedRat;

        [TestInitialize]
        public void InitializeVariables()
        {
            oneEyedRat = new Rodent("One Eyed Rat");
            player = new Player {Name = "CK Yong"};
        }

        [TestMethod]
        public void InsertingInvalidNameShouldThrowException()
        {
            Assert.ThrowsException<NameAlreadyExistsException>(() => oneEyedRat.Name = "Pietjepuk");
        }

        [TestMethod]
        public void MonsterShouldBeAbleToAttackPlayer()
        {
            oneEyedRat.RegularAttack(player);
            Assert.AreEqual(97, player.Life, 3);
        }

        [TestMethod]
        public void EnemyShouldBeAbleToDie()
        {
            Enemy oneEyedRat = new Rodent("One Eyed Rat");
            for (var i = 0; i < 50; i++)
                player.RegularAttack(oneEyedRat);
            Assert.IsTrue(oneEyedRat.IsDead);
        }
    }
}