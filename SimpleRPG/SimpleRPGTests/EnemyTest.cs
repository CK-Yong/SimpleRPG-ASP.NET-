using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGTest
{
    [TestClass]
    public class EnemyTest
    {
        private Enemy oneEyedRat;
        private Player player;

        [TestInitialize]
        public void InitializeVariables()
        {
            oneEyedRat = new Rodent("One Eyed Rat");
            player = new Player { Name = "CK Yong" };
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
            for (int i = 0; i < 50; i++)
            {
                player.RegularAttack(oneEyedRat);
            }
            Assert.IsTrue(oneEyedRat.IsDead);
        }
    }
}