using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleRPG.MonsterFactory
{
    public sealed class Rodent : Enemy
    {
        public Rodent(string name, int attack = 3, int defense = 3, int life = 25, int mana = 0, int stamina = 0,
            int experience = 0)
        {
            Name = name;
            Attack = attack;
            Defense = defense;
            Life = life;
            Mana = mana;
            Stamina = stamina;
            Experience = experience;
        }
    }
}