import nyMusiker from "./nymusiker.js"
import fs from 'fs';
export default class Musiker {
  musikerLista = [];

  constructor() {
    this.fetchData();
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

  writeJson() {
    fs.writeFileSync('./musiker.json', JSON.stringify(this.musikerLista, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  };

  skrivUtMusiker() {
    for (let i = 0; i < this.musikerLista.length; i++) {
      console.log(`${i + 1}.${this.musikerLista[i].musikernsNamn}`);
    }
  }
  skrivUtEnMusiker(val2) {
    console.log(this.musikerLista[val2 - 1])
  }
  taBortMusiker() {
    this.musikerLista.splice(index, 1)
  }

  editMusiker(index, instrument, bandID, bandNamn, bandBildades) {
    if (!this.musikerLista[index].instrument.includes(instrument)) {
      this.musikerLista[index].instrument.push(instrument);
    }
    this.musikerLista[index].nuvarandeBand.push({ bandID: bandID, bandNamn: bandNamn, bandBildades: bandBildades })
    this.writeJson();
  }

}