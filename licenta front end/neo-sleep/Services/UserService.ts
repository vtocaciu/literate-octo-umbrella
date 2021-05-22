import jwtDecode from "jwt-decode";
import { User } from "../Models/User";
import { URL_APP } from "../utils/consts";

export const auth = (username: string, password: string, email: string, dateOfBirth: Date, firstName: string, lastName: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_APP}/auth/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password, email: email, dateOfBirth: new Date(dateOfBirth), firstName: firstName, lastName: lastName })
    }).then((data) =>
      data.json()
        .then(processedData => {
          if (processedData.status === 400)
            reject("User already exists!")
          if (processedData.message === "User already exists!")
            reject("User already exists!")
          resolve(processedData);
        })
      .catch((error) => reject(error))
    )
      .catch((error) => reject("User already exists!"));
  });

}


export const login = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_APP}/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password })
    }).then((data) =>
      data.json()
        .then(processedData => {
          if (processedData.status === 400)
            reject("Invalid username and password")
          if (processedData.message === "Username or password is incorrect")
            reject("Username or password is incorrect")
          resolve(processedData);
        })
      .catch((error) => reject(error))
    )
      .catch((error) => reject("Invalid username and password"));
  });

}

export const getuserbyid = (token: string): Promise<any> => {
  const decoded_data: any = jwtDecode(token);
  return new Promise((resolve, reject) => {
    fetch(`${URL_APP}/user/getById`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ id: decoded_data.id })
    }).then((data) =>
      data.json()
        .then(processedData => {
          
          if (processedData.status === 400)
            reject("Invalid id")
          
          resolve(new User(processedData.id, processedData.username, processedData.firstName, processedData.lastName, new Date(processedData.dateOfBirth), processedData.email));
        })
      .catch((error) => reject(error))
    )
      .catch((error) => reject(error));
  });

}