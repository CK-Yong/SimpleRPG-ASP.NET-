namespace SimpleRPG.Exceptions
{
    using System;

    public class NameAlreadyExistsException : Exception
    {
        public NameAlreadyExistsException()
        {
        }

        public NameAlreadyExistsException(string message) : base(message)
        {
        }

        public NameAlreadyExistsException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}