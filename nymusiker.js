export default class NyMusiker {
  musikernsNamn = "";
  musikernsBD = "";

  constructor(musikernsNamn, musikernsBD) {
    this.musikernsNamn = musikernsNamn;
    this.musikernsBD = musikernsBD;
  }

  get musikernsNamn() {
    return this.musikernsNamn;
  }
  get musikernsBD() {
    return this.musikernsBD;
  }

  set musikernsNamn(nyMusiker) {
    if (nyMusiker.length >= 1) {
      this.musikernsNamn = nyMusiker;
    }
    else {
      console.log("Du måste ange minst en bokstav")
    }
  }
  set musikernsBD(nyMusikerBD) {
    if (nyMusikerBD.length != 4) {
      console.log("Du måste ange födelseåret");
    } else if (isNaN(nyMusikerBD)) {
      console.log("får bara innehålla siffror");
    } else {
      this.musikernsBD = nyMusikerBD
    }
  }
  dataInfo() {
    return {
      musikernsNamn: this.musikernsNamn,
      musikernsBD: this.musikernsBD
    };
  }
}
