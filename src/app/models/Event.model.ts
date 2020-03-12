export class Event {
  type: string;
  user: string;
  date: string;
  constructor(type, user, date) {
    this.type = type;
    this.user = user;
    this.date = date;
  }
}
