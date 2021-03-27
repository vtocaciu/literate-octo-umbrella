using Models;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public class SleepDataRepository : BaseRepository<SleepData>
    {
        private const string SELECT_STMT = "SELECT* FROM sleepdata";
        private const string INSERT_STMT = "INSERT INTO sleepdata values (@id, @userid, @deepsleeptime, @shallowsleeptime, @waketime, @starttime, @stoptime)";
        private const string UPDATE_STMT = "UPDATE sleepdata SET deepsleeptime=@deepsleeptime, shallowsleeptime=@shallowsleeptime, waketime=@waketime, starttime=@starttime, stoptime=@stoptime where sleepdataid=@id";
        private const string DELETE_STMT = "DELETE FROM sleepdata WHERE sleepdataid=@id";

        public override void Add(SleepData sleepData)
        {
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(INSERT_STMT, connection);
                pgcom.Parameters.AddWithValue("@id", sleepData.ID);
                pgcom.Parameters.AddWithValue("@userid", sleepData.UserID);
                pgcom.Parameters.AddWithValue("@deepsleeptime", sleepData.DeepSleepTime);
                pgcom.Parameters.AddWithValue("@shallowsleeptime", sleepData.ShallowSleepTime);
                pgcom.Parameters.AddWithValue("@waketime", sleepData.WakeSleepTime);
                pgcom.Parameters.AddWithValue("@starttime", sleepData.StartTime);
                pgcom.Parameters.AddWithValue("@stoptime", sleepData.StopTime);
                pgcom.ExecuteNonQuery();
            }
        }

        public override void Delete(Guid dataId)
        {
            throw new NotImplementedException();
        }

        public override List<SleepData> GetAll()
        {
            throw new NotImplementedException();
        }

        public override SleepData GetById(Guid dataId)
        {
            throw new NotImplementedException();
        }

        public override void Update(SleepData data)
        {
            throw new NotImplementedException();
        }
    }
}
