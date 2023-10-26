import Musiker from "./musiker.js"
import Band from "./band.js"

import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });


console.log(`Meny
1. Lägg till en musiker
2. Skriv ut information om en musiker
3. Ta bort en musiker
4. Lägg till ett band
5. Skriv ut information om band
6. Lägg till musiker till ett band`);

const val = prompt();
const musik = new Musiker();
const band = new Band();
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
        musik.skapaBand(val, instrument, bandNamn, bandBildades);
      }
    }

    break;
  case "5":
    band.skrivUtBand();
    console.log("Välj med siffror vilket band du vill ha mer information om: ");
    let val2band = prompt();
    band.skrivUtEttBand(val2band);
    break;
  case "6":
    if (musik.musikerLista.length === 0) {
      console.log("Din musiker lista är tom, skapa en musiker!");
    } else if (band.bandLista.length === 0) {
      console.log("Din band lista är tom, du måste skapa en lista!");
    } else {
      musik.skrivUtMusiker();
      let val = prompt("Välj vilken musiker du vill lägga till i ditt band: ");
      if (val < 1 || val > musik.musikerLista.length || isNaN(val)) {
        console.log("Valet finns inte");
      } else {
        {
          const a = band.visaAktivtBand();
          if (a.length === 0) {
            console.log("Det finns inga aktiva band!");
          } else {
            const val2 = prompt("Vilket band vill du lägga musikern till? ")
            if (val2 < 0 || val2 > a.length || isNaN(val2)) {
              console.log("Valet finns inte!");
            } else {
              let instrument = prompt("Vilket instrument spelar musikern?: ").toLowerCase();
              musik.musikerTillBand(val, instrument, a[val2].bandID, a[val2].bandNamn)
            }
          }
        }
      }
    }







}


