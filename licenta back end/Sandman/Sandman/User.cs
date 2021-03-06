using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    class User
    {
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Guid ID { get; }

        public User(string username, string firstName, string lastName, DateTime dateOfBirth, string email, string password)
        {
            ID = Guid.NewGuid();
            Username = username;
            FirstName = firstName;
            LastName = lastName;
            DateOfBirth = dateOfBirth;
            Email = email;
            Password = password;
        }
    }
}
