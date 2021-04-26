using Models;
using Npgsql;
using System;
using System.Collections.Generic;

namespace Repository
{
    public class UserRepository : BaseRepository<User>
    {
        private const string SELECT_STMT = "SELECT * FROM users";
        private const string INSERT_STMT = "INSERT INTO users values (@id, @username, @email, @firstname, @lastname, @password, @dateofbirth)";
        private const string UPDATE_STMT = "UPDATE users SET username=@username, email=@email, firstname=@firstname, lastname=@lastname, password=@password, dateofbirth=@dateofbirth where userid=@id ";
        private const string DELETE_STMT = "DELETE FROM users WHERE userid=@id";
        private const string GET_BY_ID_STMT = "SELECT * FROM users WHERE userid=@id";

        public override void Add(User user)
        {
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(INSERT_STMT, connection);
                pgcom.Parameters.AddWithValue("@id", user.ID);
                pgcom.Parameters.AddWithValue("@username", user.Username);
                pgcom.Parameters.AddWithValue("@email", user.Email);
                pgcom.Parameters.AddWithValue("@firstname", user.FirstName);
                pgcom.Parameters.AddWithValue("@lastname", user.LastName);
                pgcom.Parameters.AddWithValue("@password", user.Password);
                pgcom.Parameters.AddWithValue("@dateofbirth", user.DateOfBirth);
                pgcom.ExecuteNonQuery();
            }
        }

        public override void Update(User user)
        {
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(UPDATE_STMT, connection);
                pgcom.Parameters.AddWithValue("@id", user.ID);
                pgcom.Parameters.AddWithValue("@username", user.Username);
                pgcom.Parameters.AddWithValue("@email", user.Email);
                pgcom.Parameters.AddWithValue("@firstname", user.FirstName);
                pgcom.Parameters.AddWithValue("@lastname", user.LastName);
                pgcom.Parameters.AddWithValue("@password", user.Password);
                pgcom.Parameters.AddWithValue("@dateofbirth", user.DateOfBirth);
                pgcom.ExecuteNonQuery();
            }
        }

        public override void Delete(Guid userId)
        {
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(DELETE_STMT, connection);
                pgcom.Parameters.AddWithValue("@id", userId);
                pgcom.ExecuteNonQuery();
            }
        }

        public override List<User> GetAll()
        {
            List<User> allUsers = new List<User>();
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(SELECT_STMT, connection);
                NpgsqlDataReader pgreader = pgcom.ExecuteReader();
                while (pgreader.Read())
                {
                    allUsers.Add(new User()
                    {
                        ID = pgreader.GetGuid(0),
                        Username = pgreader.GetString(1),
                        Email = pgreader.GetString(2),
                        FirstName = pgreader.GetString(3),
                        LastName = pgreader.GetString(4),
                        Password = pgreader.GetString(5),
                        DateOfBirth = pgreader.GetDateTime(6)
                    });
                }
            }
            //allUsers.Add(new User() { ID = Guid.NewGuid(), Username = "username", Email = "email", FirstName = "firstname", LastName = "lastname", Password = "parola", DateOfBirth = new DateTime() });
            return allUsers;
        }

        public override User GetById(Guid userId)
        {
            User user = null;
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(GET_BY_ID_STMT, connection);
                pgcom.Parameters.AddWithValue("@id", userId);
                NpgsqlDataReader pgreader = pgcom.ExecuteReader();
                pgreader.Read();
                user = new User()
                {
                    ID = pgreader.GetGuid(0),
                    Username = pgreader.GetString(1),
                    Email = pgreader.GetString(2),
                    FirstName = pgreader.GetString(3),
                    LastName = pgreader.GetString(4),
                    Password = pgreader.GetString(5),
                    DateOfBirth = pgreader.GetDateTime(6)
                };


            }
            return user;
        }
    }
}
