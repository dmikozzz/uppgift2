import nyMusiker from "./nymusiker.js"
import fs from 'fs';
import Band from "./band.js"

export default class Musiker {
  musikerLista = [];

  constructor() {
    this.fetchData();
    this.band = new Band()
  }

  get musikerLista() {
    return this.musikerLista;
  }

  fetchData() {
    const jsonString = fs.readFileSync("musiker.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      this.musikerLista.push(data[i]);
    }
  }

  skapaMusiker(musikernsNamn, musikernsBD) {
    const musiker = new nyMusiker(musikernsNamn, musikernsBD);
    this.musikerLista.push(musiker.dataInfo());
    this.writeJson();
  }

  skapaBand(val, instrument, bandNamn, bandBildades) {
    const tempID = this.band.skapaBand(bandNamn, bandBildades, this.musikerLista[val].musikerID, this.musikerLista[val].name, instrument);
    this.editMusikerLista(val, instrument, tempID, bandNamn, bandBildades);
    this.band.writeJson();
    this.writeJson();
  }

  writeJson() {
    fs.writeFileSync('./musiker.json', JSON.stringify(this.musikerLista, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  };

  skrivUtMusiker() {
    for (let i = 0; i < this.musikerLista.length; i++) {
      console.log(`${i}.${this.musikerLista[i].musikernsNamn}`);
    }
  }
  skrivUtEnMusiker(val2) {
    console.log(this.musikerLista[val2])
  }
  taBortMusiker() {
    this.musikerLista.splice(index, 1)
  } index

  editMusiker(index, instrument, bandID, bandNamn, bandBildades) {
    if (!this.musikerLista[index].instrument.includes(instrument)) {
      this.musikerLista[index].instrument.push(instrument);
    }
    this.musikerLista[index].nuvarandeBand.push({ bandID: bandID, bandNamn: bandNamn, bandBildades: bandBildades })
    this.writeJson();
  }

  musikerTillBand(musikerIndex, instrument, bandID, bandNamn) {
    let datum = new Date().getFullYear();
    this.editMusiker(musikerIndex, instrument, bandID, bandNamn, datum);
    this.band.editBand(this.band.bandLista.findIndex(a => a.bandID === bandID), this.musikerLista[musikerIndex].musikerID, this.musikerLista[musikerIndex].musikernsNamn, instrument, datum)
    this.band.writeJson();
    this.writeJson();
  }

}