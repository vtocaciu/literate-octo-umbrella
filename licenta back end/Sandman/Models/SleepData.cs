using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class SleepData
    {
        public Guid ID { get; set; }
        public Guid UserID { get; set; }
        public int DeepSleepTime { get; set; }
        public int ShallowSleepTime { get; set; }
        public int WakeSleepTime { get; set; }
        public int StartTime { get; set; }
        public int StopTime { get; set; } 
    }
}
