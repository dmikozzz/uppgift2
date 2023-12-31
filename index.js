import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
import Musiker from "./musiker.js";
import Band from "./band.js";

const musiker = new Musiker();
const band = new Band();
console.log
  (`Meny:
  1. Lägg till en musiker
  2. Visa en specifik musiker
  3. Skapa ett band
  4. Lägg till musiker till ett band
  5. Skriv ut information om band
  6. Ta bort musiker från ett band
  7. Ta bort ett band
  8. Ta bort en musiker
  `);

const alternativ = prompt();
switch (alternativ) {
  case "1":
    let musikerNamn = prompt("Vad heter musikern?: ")
    let birthYear = prompt("Vilket år är musikern född?(YYYY): ");
    let birthMonth = prompt("Vilken månad är musikern född?(MM): ");
    let birthDay = prompt("Vilken dag i månaden är musikern född?(DD): ");

    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthYear;
    if (currentDate.getMonth() < birthMonth - 1 || (currentDate.getMonth() == birthMonth - 1 && currentDate.getDate() < birthDay)) {
      age--;
    }

    let info = prompt("Information om musikern: ")
    musiker.skapaMusiker(musikerNamn, age, info, birthYear, birthMonth, birthDay); 
    break;
  
  case "2":
    if (musiker.musikerLista.length <= 0) {
      console.log("Musiker finns inte!")
    }
    else {
      musiker.visaAllaMusiker();
      let val = prompt("Skriv siffran på personen du vill veta mer om: ")

      if (val < 0 || val > musiker.musikerLista.length || isNaN(val)) {
        console.log("Valet finns inte")
      } else {
        musiker.visaEnMusiker(val);
      }
    }
    break;
  
  case "3":
    if (musiker.musikerLista.length <= 0) {
      console.log("Din musiker lista är tom, skapa en musiker!")
    } else {
      musiker.visaAllaMusiker();
      let val = prompt("Välj bandmedlem: ");
      if (val < 0 || val > musiker.musikerLista.length || isNaN(val)) {
        console.log("Valet finns inte!");
      } else {
        let instrument = prompt("Vilket instrument spelar musikern?: ");
        let bandNamn = prompt("Vad heter bandet?: ");
        let bandAge = prompt("När skapades bandet?: ");
        musiker.skapaEttBand(val, instrument, bandNamn, bandAge);
      }
    }
    break;
  
  case '4':
    if (musiker.musikerLista.length === 0) {
      console.log("Det finns inga musiker!")
    } else if (band.bandLista.length === 0) {
      console.log("Det finns inga band!")
    } else {
      musiker.visaAllaMusiker();
      const val = prompt("Vilken musiker vill du lägga till i bandet: ");
      if (val < 0 || val > musiker.musikerLista.length || isNaN(val)) {
        console.log("Valet finns inte!");
      } else {
        const instrument = prompt("Vilket instrument spelar musikern: ");
        const temp = band.displayOngoingBand();
        if (temp.length === 0) {
          console.log("Finns inga tillgängliga band")
        } else {
          const val2 = prompt("Vilket band vill du lägga musikern till?: ")
          if (val2 < 0 || val2 > temp.length || isNaN(val2)) {
            console.log("Valet finns inte!");
          } else {
            if (!band.bandLista[temp[val2].index].currentBand.some(x => x.memberID === musiker.musikerLista[val].musikerID)) {
              musiker.addMTB(val, instrument, temp[val2].bandID, temp[val2].bandNamn)
            } else {
              console.log("Musikern finns redan i bandet.")
            }
          }
        }
      }
    }
    break;

  case '5':
    const bandVal = band.displayOngoingBand();
    if (bandVal.length === 0) {
      console.log("Det finns inga aktiva band just nu.");
      break;
    }
    const bandIndex = prompt("Välj band genom att ange siffran: ");
    if (bandIndex < 0 || bandIndex >= bandVal.length || isNaN(bandIndex)) {
      console.log("Ogiltigt val!");
      break;
    }
    musiker.visaDetaljeradInfo(bandVal[bandIndex].index);
    break;

  case '6':
    if (musiker.musikerLista.length === 0) {
      console.log("Det finns inga musiker!")
    } else if (band.bandLista.length === 0) {
      console.log("Det finns inga band!")
    } else {
      const tempBand = band.displayOngoingBand();
      if (tempBand.length === 0) {
        console.log("Det finns inga tillgängliga band.")
      } else {
        const val1 = prompt("Vilket band vill du ta bort en musiker ifrån?: ")
        if (val1 < 0 || val1 > tempBand.length || isNaN(val1)) {
          console.log("Valet finns inte!");
        } else {
          const tempMusiker = band.displayCurrentMember(tempBand[val1].index)
          const val2 = prompt("Vilken musiker vill du ta bort:  ")
          if (val2 < 0 || val2 > tempMusiker.length || isNaN(val2)) {
            console.log("Valet finns inte!");
          } else {
            musiker.removeOneMusician(tempBand[val1].bandID, tempBand[val1].index, tempMusiker[val2]);
          }
        }
      }
    }
  case '7':
    const bandList = band.displayOngoingBand();
    if (bandList.length === 0) {
      console.log("Det finns inga aktiva band just nu.");
      break;
    }
    const bandChoice = prompt("Välj band att ta bort genom att ange siffran: ");
    if (bandChoice < 0 || bandChoice >= bandList.length || isNaN(bandChoice)) {
      console.log("Ogiltigt val!");
      break;
    }
    const bandIDToRemove = bandList[bandChoice].bandID;
    if (band.taBortBand(bandIDToRemove)) {
      band.skrivTillJson();
      console.log("Bandet togs bort framgångsrikt.");
    } else {
      console.log("Kunde inte hitta bandet med angivet bandID.");
    }
    break;

  case '8':
    musiker.visaAllaMusiker();
    const musikerIndex = prompt("Vilken musiker vill du ta bort? Ange siffran: ");
    if (musikerIndex < 0 || musikerIndex >= musiker.musikerLista.length || isNaN(musikerIndex)) {
      console.log("Ogiltigt val!");
      break;
    }
    const musikerIDToRemove = musiker.musikerLista[musikerIndex].musikerID;
    if (musiker.taBortMusiker(musikerIDToRemove)) {
      musiker.skrivTillJson();
      console.log("Musikern togs bort framgångsrikt.");
    } else {
      console.log("Kunde inte hitta musikern med angivet ID.");
    }
    break;
  default:
    console.log("Valet finns ej");
}

