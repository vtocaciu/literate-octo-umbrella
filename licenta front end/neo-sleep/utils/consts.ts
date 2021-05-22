export const URL_APP = "https://sandman-heroku.herokuapp.com";

export const formatDate = (date: Date): string => {
  date = new Date(date);
  return date.getDate().toString() + "/" + (date.getMonth() + 1).toString()  + "/" + date.getFullYear().toString()
}

export const EMPTY_GUID: string = "00000000-0000-0000-0000-000000000000";