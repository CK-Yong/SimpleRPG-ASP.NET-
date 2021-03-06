﻿namespace SimpleRPG.Tools
{
    using System;

    internal abstract class Randomizer
    {
        private static readonly Random randomizer = new Random();

        public static int getAttackModifier(int input)
        {
            return input + randomizer.Next(0, 6) - 3;
        }
    }
}