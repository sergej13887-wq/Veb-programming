export default class Time {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }

  static fromString(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return new Time(hours, minutes);
  }
}