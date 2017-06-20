﻿using System;

namespace SimpleRPG.Tools
{
    internal abstract class Randomizer
    {
        private static readonly Random randomizer = new Random();

        public static int getModifier(int input)
        {
            return input + randomizer.Next(0, 6) - 3;
        }
    }
}