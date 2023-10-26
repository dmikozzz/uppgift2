import nyBand from "./nyband.js"
import fs from "fs"
export default class Band {
  bandLista = [];

  constructor() {
    this.fetchData();
  }
  get bandLista() {
    return this.bandLista;
  }
  fetchData() {
    const jsonString = fs.readFileSync("band.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      this.bandLista.push(data[i]);
    }
  }

  skapaBand(instrument, bandNamn, bandBildades, musikerID, musikernsNamn) {
    const band = new nyBand(instrument, bandNamn, bandBildades, musikerID, musikernsNamn);
    this.bandLista.push(band.dataInfo());
    this.writeJson();
    return band.dataInfo().bandID;
  }

  writeJson() {
    fs.writeFileSync('./band.json', JSON.stringify(this.bandLista, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

  skrivUtBand() {
    for (let i = 0; i < this.bandLista.length; i++) {
      console.log(`${i}.${this.bandLista[i].bandNamn}`);
    }
  }
  skrivUtEttBand(val2band) {
    console.log(this.bandLista[val2band])
  }

  aktivtBand() {
    let a = []
    for (let i = 0; i < this.bandLista.length; i++) {
      if (this.bandLista[i].bandSplit === null) {
        a.push({ bandID: this.bandLista[i].bandID, bandNamn: this.bandLista[i].bandNamn })
      }
    }
    return a;

  }
  visaAktivtBand() {
    let a = this.aktivtBand();
    if (a.length != 0)
      for (let i = 0; i < a.length; i++) {
        console.log(`${i}. ${a[i].bandNamn}`);
      }
    return a;
  }
  editBand(index, musikerID, musikernsNamn, instrument, datum) {
    this.bandLista[index].nuvarandeMedlemmar.push({ musikerID: musikerID, musikernsNamn: musikernsNamn, instrument: instrument, gickMed: datum })
  }
}
