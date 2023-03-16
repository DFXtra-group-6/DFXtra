export default class ExperienceModel {
  constructor(employer, position, startDate, endDate, id = null) {
    this.employer = employer;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.id = id;
  }
}