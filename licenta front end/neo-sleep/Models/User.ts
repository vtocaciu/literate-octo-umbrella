export class User {
  ID: string;
  username: string;
  firstName  : string;
  lastName  : string;
  dateOfBirth: Date;
  email  : string;
  constructor(ID: string, username: string, firstName: string, lastName: string, dateOfBirth: Date, email: string) {
    this.ID = ID;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
  }
}