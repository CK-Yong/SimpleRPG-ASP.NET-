﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGTest
{
    [TestClass]
    public class EnemyTest
    {
        private Entity _entity;
        private Enemy oneEyedRat;

        [TestInitialize]
        public void InitializeVariables()
        {
            oneEyedRat = new Rodent("One Eyed Rat");
            _entity = new Entity {Name = "CK Yong"};
        }

        [TestMethod]
        public void InsertingInvalidNameShouldThrowException()
        {
            Assert.ThrowsException<NameAlreadyExistsException>(() => oneEyedRat.Name = "Pietjepuk");
        }

        [TestMethod]
        public void MonsterShouldBeAbleToAttackPlayer()
        {
            oneEyedRat.RegularAttack(_entity);
            Assert.AreEqual(97, _entity.Life, 3);
        }

        [TestMethod]
        public void EnemyShouldBeAbleToDie()
        {
            Enemy oneEyedRat = new Rodent("One Eyed Rat");
            for (var i = 0; i < 50; i++)
                _entity.RegularAttack(oneEyedRat);
            Assert.IsTrue(oneEyedRat.IsDead);
        }
    }
}