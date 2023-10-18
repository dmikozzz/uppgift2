export default class Band {
  bandetsNamn;
  bandetsMedlemmar;
  tidigareMedlemmar;

  constructor (bandetsNamn, bandetsMedlemmar = [], tidigareMedlemmar = []) {
    this.bandetsNamn = bandetsNamn
    this.bandetsMedlemmar = bandetsMedlemmar
    this.tidigareMedlemmar = tidigareMedlemmar

  }
}