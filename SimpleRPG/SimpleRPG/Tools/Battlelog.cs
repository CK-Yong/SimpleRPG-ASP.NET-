namespace SimpleRPG.Tools
{
    using System;
    using System.Text;

    public class Battlelog
    {
        private Battlelog()
        {
        }

        private static StringBuilder log = new StringBuilder();

        public static void addEntry(String input)
        {
            log.Append(input + "\n");
        }

        public static String getLogAndClear()
        {
            String result = log.ToString();
            log.Clear();
            if (result.Length == 0)
            {
                result = "null";
            }
            return result;
        }
    }
}