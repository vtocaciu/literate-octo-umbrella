import { BaseSleep, GeneratedSleep, Sleep } from "../Models/Sleep";

//singleton pattern
export class SleepService {
  private static __sleepService: SleepService;
  private userUid: string;

  private constructor() {
    this.userUid = "5e9f357d-d41f-4ff3-bc3c-dd610174e7c4";
  }

  static initSleepService(): SleepService {
    if (SleepService.__sleepService == null)
      SleepService.__sleepService = new SleepService();
    return SleepService.__sleepService;
  }


  public getSleepData(): BaseSleep[]{
    return [
      new Sleep("1", this.userUid, 15, 80, new Date(), new Date, 15, 7, 8, 9, 10, 11, 12, 13, 14, 15),
      new Sleep("2", this.userUid, 20, 71, new Date(), new Date, 16, 7, 8, 9, 10, 11, 12, 13, 14, 15),
      new Sleep("3", this.userUid, 58, 90, new Date(), new Date, 17,  7, 8, 9, 10, 11, 12, 13, 14, 15),
      new Sleep("4", this.userUid, 36, 60, new Date(), new Date, 18, 7, 8, 9, 10, 11, 12, 13, 14, 15),
      new Sleep("5", this.userUid, 47, 82, new Date(), new Date, 19,  7, 8, 9, 10, 11, 12, 13, 14, 15),
      new Sleep("6", this.userUid, 51, 84, new Date(), new Date, 20, 7, 8, 9, 10, 11, 12, 13, 14, 15),
      new GeneratedSleep("7", this.userUid, 254, 41, 15, 25),
      new BaseSleep("7", this.userUid, 122, 12)
    ]
  }
}