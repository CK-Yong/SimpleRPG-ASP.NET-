using System;
using System.Runtime.Serialization;

namespace SimpleRPG
{
    [Serializable]
    internal class NegativeAttackAttemptException : Exception
    {
        public NegativeAttackAttemptException()
        {
        }

        public NegativeAttackAttemptException(string message) : base(message)
        {
        }

        public NegativeAttackAttemptException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected NegativeAttackAttemptException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}