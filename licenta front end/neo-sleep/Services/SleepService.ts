import jwtDecode from "jwt-decode";
import { BaseSleep, Sleep } from "../Models/Sleep";
import { URL_APP } from "../utils/consts";
import { retrieveData } from "./Storage";

//singleton pattern
export class SleepService {
  private static __sleepService: SleepService;
  private token: string;

  private constructor() {
    this.token = "";
    retrieveData("token").then(data => this.token = data).catch(() => {});
  }

  static initSleepService(): SleepService {
    if (SleepService.__sleepService == null) {
      SleepService.__sleepService = new SleepService();
    }
    return SleepService.__sleepService;
  }


  public getSleepData(): Promise<Sleep[]>{
    const decoded_data: any = jwtDecode(this.token);
    return new Promise((resolve, reject) => {
      fetch(`${URL_APP}/sleepdata/getbyuserid`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        },
        body: JSON.stringify({ id: decoded_data.id })
      }).then((data) =>
        data.json()
          .then(processedData => {
            if (processedData.status === 400)
              reject("Invalid data")
            
            const sleepArray: Sleep[] = []
            processedData.forEach((element: any) => {
              sleepArray.push(Sleep.getSleepFromRequest(element));
              
            });
            
            resolve(sleepArray);
          })
        .catch((error) => reject(error))
      )
        .catch((error) => reject(error));
    });
  
  }
}