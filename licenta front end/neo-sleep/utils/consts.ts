export const URL_APP = "https://sandman-heroku.herokuapp.com";

export const formatDate = (date: Date): string => {
  return date.getDate().toString() + "/" + (date.getMonth() + 1).toString()  + "/" + date.getFullYear().toString()
}
