import jwtDecode from "jwt-decode";
import { BaseSleep, Sleep } from "../Models/Sleep";
import { SleepDiary } from "../Models/SleepData";
import { URL_APP } from "../utils/consts";
import { retrieveData } from "./Storage";

export const getSleepDiaryData = (): Promise<SleepDiary[]> => {

  return new Promise((resolve, reject) => {
    retrieveData("token")
      .then(data => {
        const decoded_data: any = jwtDecode(data);
        fetch(`${URL_APP}/sleepdiary/getbyuserid`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data
          },
          body: JSON.stringify({ id: decoded_data.id })
        }).then((data) =>
          data.json()
            .then(processedData => {
              if (processedData.status === 400)
                reject("Invalid data")

              const sleepArray: SleepDiary[] = []
              processedData.forEach((element: any) => {
                sleepArray.push(SleepDiary.getSleepDiaryDataFromRequest(element));

              });

              resolve(sleepArray.reverse());
            })
            .catch((error) => reject(error))
        )
          .catch((error) => reject(error));
      });
  });
}


export const addSleepDiary = (sleepDiary: SleepDiary): Promise<void> => {
  return retrieveData("token")
    .then(data => {
      const decoded_data: any = jwtDecode(data);
      sleepDiary = { ...sleepDiary, userID: decoded_data.id }
      fetch(`${URL_APP}/sleepdiary/add`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + data
        },
        body: JSON.stringify(sleepDiary)
      })
    });
}

export const updateSleepDiary = (sleepDiary: SleepDiary): Promise<void> => {
  return retrieveData("token")
    .then(data => {
      const decoded_data: any = jwtDecode(data);
      sleepDiary = {...sleepDiary, userID: decoded_data.id}
      fetch(`${URL_APP}/sleepdiary/update`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + data
        },
        body: JSON.stringify(sleepDiary)
      })
    });
}

export const deleteSleepDiary = (sleepDiary: SleepDiary): Promise<void> => {
  return retrieveData("token")
    .then(data => {
      const decoded_data: any = jwtDecode(data);
      sleepDiary = {...sleepDiary, userID: decoded_data.id}
      fetch(`${URL_APP}/sleepdiary/delete`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + data
        },
        body: JSON.stringify({id: sleepDiary.ID})
      })
    });
}


export const getSleepData = (): Promise<Sleep[]> => {

  return new Promise((resolve, reject) => {
    retrieveData("token")
      .then(data => {
        const decoded_data: any = jwtDecode(data);
        fetch(`${URL_APP}/sleepdata/getbyuserid`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data
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

              resolve(sleepArray.reverse());
            })
            .catch((error) => reject(error))
        )
          .catch((error) => reject(error));
      });
  });
}
