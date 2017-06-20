using Microsoft.VisualStudio.TestTools.UnitTesting;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGTest
{
    [TestClass]
    public class PlayerTest
    {
        private Player player;

        [TestInitialize]
        public void InitializeVariables()
        {
            player = new Player();
            player.Name = "CK Yong";
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
            Enemy oneEyedRat = new Rodent("One Eyed Rat");
            player.RegularAttack(oneEyedRat);
            Assert.AreEqual(20, oneEyedRat.Life, 3);
        }

        [TestMethod]
        public void PlayerShouldBeAbleToDie()
        {
            Enemy oneEyedRat = new Rodent("One Eyed Rat");
            for (var i = 0; i < 100; i++)
                oneEyedRat.RegularAttack(player);
            Assert.IsTrue(player.IsDead);
        }
    }
}