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

  skapaBand(bandNamn, bandBildades) {
    const band = new nyBand(bandNamn, bandBildades);
    this.bandLista.push(band.dataInfo());
    this.writeJson();
  }
  writeJson() {
    fs.writeFileSync('./band.json', JSON.stringify(this.bandLista, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
}
