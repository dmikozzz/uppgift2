export default class NyBand {
  bandNamn = "";
  bandBildades = "";

  constructor(instrument, bandNamn, bandBildades, musikerID, musikernsNamn) {
    this.instrument = instrument;
    this.bandNamn = bandNamn;
    this.bandBildades = bandBildades;
    this.musikerID = musikerID;
    this.musikernsNamn = musikernsNamn;
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
      bandID: "id" + new Date().getTime(),
      bandNamn: this.bandNamn,
      bandBildades: this.bandBildades,
      nuvarandeMedlemmar: [{ musikerID: this.musikerID, musikernsNamn: this.musikerID, instrument: this.instrument, gickMed: this.bandBildades }],
      bandSplit: null
    }
  }
}