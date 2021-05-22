export class SleepDiary {
  ID: string;
  userID: string;
  date: Date;
  entry: string;
  rating: number;

  constructor(ID: string, userID: string, date: Date, entry: string, rating: number) {
    this.ID = ID;
    this.userID = userID;
    this.date = date;
    this.entry = entry;
    this.rating = rating;
  }

  public static getSleepDiaryDataFromRequest(element: any): SleepDiary {
    return new SleepDiary(element.ID, element.UserID, new Date(element.Date), element.Entry, element.Rating);
  }
}