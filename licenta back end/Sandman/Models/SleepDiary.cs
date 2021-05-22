using System;

namespace Models
{
    public class SleepDiary
    {
        public Guid ID { get; set; }
        public Guid UserID { get; set; }
        public DateTime Date { get; set; }
        public string Entry { get; set; }
        public int Rating { get; set; }

        public SleepDiary()
        {

        }

        public SleepDiary(Guid iD, Guid userID, DateTime date, string entry, int rating)
        {
            this.ID = iD;
            this.UserID = userID;
            this.Date = date;
            this.Entry = entry;
            this.Rating = rating;
        }
    }
}
