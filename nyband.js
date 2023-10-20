export default class NyBand {
  bandNamn = "";
  bandBildades = "";

  constructor(bandNamn, bandBildades) {
    this.bandNamn = bandNamn;
    this.bandBildades = bandBildades;
  }

  get bandNamn() {
    return this.bandNamn;
  }
  get bandBildades() {
    return this.bandBildades;
  }
  set bandNamn(nyBandNamn) {
    if (nyBandNamn.length >= 1) {
      this.bandNamn = nyBandNamn;
    }
    else {
      console.log("Du måste ange minst en bokstav");
    }
  }
  set bandBildades(nyBandBildades) {
    if (nyBandBildades.length != 4) {
      console.log("Du måste ange året bandet bildades");
    }
    else if (isNaN(nyBandBildades)) {
      console.log("Får bara innehålla siffror");
    } else {
      this.bandBildades = nyBandBildades
    }
  }
  dataInfo() {
    return {
      bandNamn: this.bandNamn,
      bandBildades: this.bandBildades
    };
  }
}