import { AsyncStorage } from 'react-native';

export const storeData =  (key: string, data: any) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, data)
      .then(data => {
        resolve("");
      })
      .catch(error => {
        reject(error);
    })
  })
 
};

export const retrieveData = (key: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
    })
  })
  
}