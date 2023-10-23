import Musiker from "./musiker.js"
import Band from "./band.js"

export default class Index2 {
  constructor() {
    this.musiker = new Musiker();
    this.band = new Band();
  }

  skapaBand(val, instrument, bandNamn, bandBildades) {
    let tempID = this.band.skapaBand(instrument, bandNamn, bandBildades, this.musiker.musikerLista[val - 1].musikerID, this.musiker.musikerLista[val - 1].musikernsNamn);
    this.musiker.editMusiker(val - 1, instrument, tempID, bandNamn, bandBildades);
  }

}