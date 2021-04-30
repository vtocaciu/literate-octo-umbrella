//chain of responsability
export const login = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    fetch('https://sandman-heroku.herokuapp.com/authenticate', {
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