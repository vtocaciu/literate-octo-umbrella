using System;

namespace Models
{
    public class SleepData
    {
        public Guid ID { get; set; }
        public Guid UserID { get; set; }
        public DateTime date { get; set; }
        public float totalDuration { get; set; }
        public DateTime inBedTime { get; set; }
        public DateTime outBedTime { get; set; }
        public float sleepEfficiency { get; set; }
        public float actualSleepDuration { get; set; }
        public float wakeSleepTime { get; set; }
        public float REMDuration { get; set; }
        public float lightSleepDuration { get; set; }
        public float deepSleepTime { get; set; }
        public float inBedAwakePercentage { get; set; }
        public float REMPercentage { get; set; }
        public float lightSleepPercentage { get; set; }
        public float deepSleepPercentage { get; set; }
        public float sleepScore { get; set; }

        public SleepData()
        {

        }

        public SleepData(Guid iD, Guid userID, DateTime date, int totalDuration, DateTime inBedTime, DateTime outBedTime, 
            float sleepEfficiency, float actualSleepDuration, float wakeSleepTime, float rEMDuration, float lightSleepDuration, 
            float deepSleepTime, float inBedAwakePercentage, float rEMPercentage, float lightSleepPercentage, float deepSleepPercentage, float sleepScore)
        {
            ID = iD;
            UserID = userID;
            this.date = date;
            this.totalDuration = totalDuration;
            this.inBedTime = inBedTime;
            this.outBedTime = outBedTime;
            this.sleepEfficiency = sleepEfficiency;
            this.actualSleepDuration = actualSleepDuration;
            this.wakeSleepTime = wakeSleepTime;
            REMDuration = rEMDuration;
            this.lightSleepDuration = lightSleepDuration;
            this.deepSleepTime = deepSleepTime;
            this.inBedAwakePercentage = inBedAwakePercentage;
            REMPercentage = rEMPercentage;
            this.lightSleepPercentage = lightSleepPercentage;
            this.deepSleepPercentage = deepSleepPercentage;
            this.sleepScore = sleepScore;
        }

    }
}
