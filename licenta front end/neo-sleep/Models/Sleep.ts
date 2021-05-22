export class BaseSleep {
  ID: string;
  userID: string;
  totalDuration: number;
  sleepScore: number;
  date: Date;

  constructor(ID: string, userID: string, totalDuration: number, sleepScore: number, date: Date) {
    this.ID = ID;
    this.userID = userID;
    this.totalDuration = totalDuration;
    this.sleepScore = sleepScore;
    this.date = date;
  }
 
}

export class Sleep extends BaseSleep{
  inBedTime: Date;
  outBedTime: Date;
  sleepEfficiency: number;
  actualSleepDuration: number;
  wakeSleepTime: number;
  REMDuration: number;
  lightSleepDuration: number;
  deepSleepTime: number;
  inBedAwakePercentage: number;
  REMPercentage: number;
  lightSleepPercentage: number;
  deepSleepPercentage: number;


  constructor(ID: string, userID: string, totalDuration: number, sleepScore: number, date: Date,
    inBedTime: Date, outBedTime: Date, sleepEfficency: number,
    actualSleepDuration: number, wakeSleepTime: number,
    REMDuration: number, lightSleepDuration: number, deepSleepTime: number,
    inBedAwakePercentage: number, percentageREM: number, percentageLightSleep: number,
    percentageDeepSleep: number)
  {
    super(ID, userID, totalDuration, sleepScore, date);
    this.inBedTime = inBedTime;
    this.outBedTime = outBedTime;
    this.sleepEfficiency = sleepEfficency;
    this.actualSleepDuration = actualSleepDuration;
    this.wakeSleepTime = wakeSleepTime;
    this.REMDuration = REMDuration;
    this.lightSleepDuration = lightSleepDuration;
    this.deepSleepTime = deepSleepTime;
    this.inBedAwakePercentage = inBedAwakePercentage;
    this.REMPercentage = percentageREM;
    this.lightSleepPercentage = percentageLightSleep;
    this.deepSleepPercentage = percentageDeepSleep;
  }

  

  public static getSleepFromRequest(element: any): Sleep {
    return new Sleep(element.id, element.userID, element.totalDuration, element.sleepScore, element.date,
      new Date(element.inBedTime), new Date(element.outBedTime), element.sleepEfficiency,
      element.actualSleepDuration, element.wakeSleepTime,
      element.remDuration, element.lightSleepDuration, element.deepSleepTime,
      element.inBedAwakePercentage, element.remPercentage, element.lightSleepPercentage,
      element.deepSleepPercentage);
  }

  
}

// export class GeneratedSleep extends BaseSleep{
//   aproxLightSleepDuration: number;
//   aproxDeepSleepDuration: number;


//   constructor(ID: string, userID: string, totalDuration: number, sleepScore: number,
//     aproxLightSleepDuration: number, aproxDeepSleepDuration: number) {
//     super(ID, userID, totalDuration, sleepScore);
//     this.aproxLightSleepDuration = aproxLightSleepDuration;
//     this.aproxDeepSleepDuration = aproxDeepSleepDuration;
//   }  

 
//}
