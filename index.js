import Musiker from "./musiker.js"
import Band from "./band.js"
import Index2 from "./index2.js";

import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });


console.log(`Meny
1. Lägg till en musiker
2. Skriv ut information om en musiker
3. Ta bort en musiker
4. Lägg till ett band
5. Skriv ut information om band`);

const val = prompt();
const musik = new Musiker();
const band = new Band();
const index2 = new Index2();
switch (val) {
  case "1":
    let musikernsNamn = prompt("Musikerns namn: ")
    let musikernsBD = prompt("Musikerns födelseår: ");
    musik.skapaMusiker(musikernsNamn, musikernsBD);
    break;
  case "2":
    musik.skrivUtMusiker();
    let val2 = prompt();
    musik.skrivUtEnMusiker(val2);
    break;
  case "3":
    musik.taBortMusiker();
    break;
  case "4":
    if (musik.musikerLista.length === 0) {
      console.log("Din musiker lista är tom, skapa en musiker!");
    } else {
      musik.skrivUtMusiker();
      let val = prompt();
      if (val < 1 || val > musik.musikerLista.length || isNaN(val)) {
        console.log("Valet finns inte");
      } else {
        let instrument = prompt("Vilket instrument spelar musikern?: ").toLowerCase();
        let bandNamn = prompt("Bandets namn: ");
        let bandBildades = prompt("Vilket år bildades bandet?: ");
        index2.skapaBand(val, instrument, bandNamn, bandBildades);
      }
    }

    break;
  case "5":
    band.skrivUtBand();
    console.log("Välj med siffror vilket band du vill ha mer information om: ");
    let val2band = prompt();
    band.skrivUtEttBand(val2band);






}


