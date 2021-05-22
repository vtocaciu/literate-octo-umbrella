using Models;
using Npgsql;
using System;
using System.Collections.Generic;

namespace Repository
{
    public class SleepDiaryRepository : BaseRepository<SleepDiary>
    {
        private const string SELECT_STMT = "SELECT * FROM sleep_diary";
        private const string INSERT_STMT = "INSERT INTO public.sleep_diary(date, userid, sleepdiaryid, entry, rating) VALUES(@date, @userid, @id, @entry, @rating);";
        private const string UPDATE_STMT = "UPDATE sleep_diary SET date=@date, entry=@entry, rating=@rating where sleepdiaryid=@id ";
        private const string DELETE_STMT = "DELETE FROM sleep_diary WHERE sleepdiaryid=@id";
        private const string GET_BY_ID_STMT = "SELECT * FROM sleep_diary WHERE sleepdiaryid=@id";

        public override void Add(SleepDiary sleepDiary)
        {
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(INSERT_STMT, connection);
                pgcom.Parameters.AddWithValue("@date", sleepDiary.Date);
                pgcom.Parameters.AddWithValue("@userid", sleepDiary.UserID);
                pgcom.Parameters.AddWithValue("@id", sleepDiary.ID);
                pgcom.Parameters.AddWithValue("@entry", sleepDiary.Entry);
                pgcom.Parameters.AddWithValue("@rating", sleepDiary.Rating);
                pgcom.ExecuteNonQuery();
            }
        }

        public override void Update(SleepDiary sleepDiary)
        {
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(UPDATE_STMT, connection);
                pgcom.Parameters.AddWithValue("@date", sleepDiary.Date);
                pgcom.Parameters.AddWithValue("@entry", sleepDiary.Entry);
                pgcom.Parameters.AddWithValue("@rating", sleepDiary.Rating);
                pgcom.Parameters.AddWithValue("@id", sleepDiary.ID);
                pgcom.ExecuteNonQuery();
            }
        }

        public override void Delete(Guid sleepDiaryId)
        {
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(DELETE_STMT, connection);
                pgcom.Parameters.AddWithValue("@id", sleepDiaryId);
                pgcom.ExecuteNonQuery();
            }
        }

        public override List<SleepDiary> GetAll()
        {
            List<SleepDiary> allSleepDiarys = new List<SleepDiary>();
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(SELECT_STMT, connection);
                NpgsqlDataReader pgreader = pgcom.ExecuteReader();
                while (pgreader.Read())
                {
                    allSleepDiarys.Add(new SleepDiary()
                    {
                        Date = pgreader.GetDateTime(0),
                        UserID = pgreader.GetGuid(1),
                        ID = pgreader.GetGuid(2),
                        Entry = pgreader.GetString(3),
                        Rating = pgreader.GetInt32(4)
                    });
                }
            }
            return allSleepDiarys;
        }

        public override SleepDiary GetById(Guid sleepDiaryId)
        {
            SleepDiary sleepDiary = null;
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(GET_BY_ID_STMT, connection);
                pgcom.Parameters.AddWithValue("@id", sleepDiaryId);
                NpgsqlDataReader pgreader = pgcom.ExecuteReader();
                pgreader.Read();
                sleepDiary = new SleepDiary()
                {
                    Date = pgreader.GetDateTime(0),
                    UserID = pgreader.GetGuid(1),
                    ID = pgreader.GetGuid(2),
                    Entry = pgreader.GetString(3),
                    Rating = pgreader.GetInt32(4)
                };


            }
            return sleepDiary;
        }

    }
}
