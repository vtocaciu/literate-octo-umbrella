using Models;
using Npgsql;
using System;
using System.Collections.Generic;

namespace Repository
{
    public class SleepDataRepository : BaseRepository<SleepData>
    {
        private const string SELECT_STMT = "select * from sleep inner join sleep_data on sleep.sleepid = sleep_data.sleepid";
        private const string INSERT_STMT_SLEEP = "INSERT INTO public.sleep(date, userid, sleepid) VALUES(@date, @userid, @sleepid);";
        private const string INSERT_STMT_SLEEP_DATA = "INSERT INTO public.sleep_data(sleepid, totalduration, sleepefficiency, actualsleepduration, wakesleeptime, remduration, lightsleepduration, deepsleeptime, inbedawakepercentage, " +
            "rempercentage, lightsleeppercentage, deepsleeppercentage, sleepscore, inbedtime, outbedtime) VALUES(@sleepid, @totalduration, @sleepefficiency, " +
            "@actualsleepduration, @wakesleeptime, @remduration, @lightsleepduration, @deepsleeptime, @inbedawakepercentage, @rempercentage, @lightsleeppercentage, " +
            "@deepsleeppercentage, @sleepscore, @inbedtime, @outbedtime)";
        private const string UPDATE_STMT = "";
        private const string DELETE_STMT = "DELETE FROM public.sleep_data WHERE sleepid=@id";

        public override void Add(SleepData sleepData)
        {
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(INSERT_STMT_SLEEP_DATA, connection);
                pgcom.Parameters.AddWithValue("@sleepid", sleepData.ID);
                pgcom.Parameters.AddWithValue("@totalduration", sleepData.totalDuration);
                pgcom.Parameters.AddWithValue("@sleepefficiency", sleepData.sleepEfficiency);
                pgcom.Parameters.AddWithValue("@actualsleepduration", sleepData.actualSleepDuration);
                pgcom.Parameters.AddWithValue("@wakesleeptime", sleepData.wakeSleepTime);
                pgcom.Parameters.AddWithValue("@remduration", sleepData.REMDuration);
                pgcom.Parameters.AddWithValue("@lightsleepduration", sleepData.lightSleepDuration);
                pgcom.Parameters.AddWithValue("@deepsleeptime", sleepData.deepSleepTime);
                pgcom.Parameters.AddWithValue("@inbedawakepercentage", sleepData.inBedAwakePercentage);
                pgcom.Parameters.AddWithValue("@rempercentage", sleepData.REMPercentage);
                pgcom.Parameters.AddWithValue("@lightsleeppercentage", sleepData.lightSleepPercentage);
                pgcom.Parameters.AddWithValue("@deepsleeppercentage", sleepData.deepSleepPercentage);
                pgcom.Parameters.AddWithValue("@sleepscore", sleepData.sleepScore);
                pgcom.Parameters.AddWithValue("@inBedTime", sleepData.inBedTime);
                pgcom.Parameters.AddWithValue("@outBedTime", sleepData.outBedTime);

                pgcom.ExecuteNonQuery();
                pgcom = new NpgsqlCommand(INSERT_STMT_SLEEP, connection);
                pgcom.Parameters.AddWithValue("@date", sleepData.date);
                pgcom.Parameters.AddWithValue("@userid", sleepData.UserID);
                pgcom.Parameters.AddWithValue("@sleepid", sleepData.ID);
                pgcom.ExecuteNonQuery();
            }
        }

        public override void Delete(Guid dataId)
        {
            throw new NotImplementedException();
        }

        public override List<SleepData> GetAll()
        {
            List<SleepData> sleepData = new List<SleepData>();
            using (var connection = new NpgsqlConnection(CONNECTION_STRING))
            {
                connection.Open();
                NpgsqlCommand pgcom = new NpgsqlCommand(SELECT_STMT, connection);

                NpgsqlDataReader pgreader = pgcom.ExecuteReader();
                while (pgreader.Read())
                {
                    sleepData.Add(new SleepData
                    {
                        date = pgreader.GetDateTime(0),
                        UserID = pgreader.GetGuid(1),
                        ID = pgreader.GetGuid(2),
                        totalDuration = pgreader.GetFloat(4),
                        sleepEfficiency = pgreader.GetFloat(5),
                        actualSleepDuration = pgreader.GetFloat(6),
                        wakeSleepTime = pgreader.GetFloat(7),
                        REMDuration = pgreader.GetFloat(8),
                        lightSleepDuration = pgreader.GetFloat(9),
                        deepSleepTime = pgreader.GetFloat(10),
                        inBedAwakePercentage = pgreader.GetFloat(11),
                        REMPercentage = pgreader.GetFloat(12),
                        lightSleepPercentage = pgreader.GetFloat(13),
                        deepSleepPercentage = pgreader.GetFloat(14),
                        sleepScore = pgreader.GetFloat(15),
                        inBedTime = pgreader.GetDateTime(16),
                        outBedTime = pgreader.GetDateTime(17)
                    });
                }

            }
            return sleepData;
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
