using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleRPG
{
    public sealed class Player:Entity
    {
        public Player(int attack = 5, int defense = 5, int life = 100, int mana = 100, int stamina = 100,
            int experience = 0)
        {
            Attack = attack;
            Defense = defense;
            Life = life;
            Mana = mana;
            Stamina = stamina;
            Experience = experience;
        }
    }
}
