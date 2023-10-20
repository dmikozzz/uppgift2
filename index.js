import Musiker from "./musiker.js"

import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });


console.log(`Meny
1. lägg till en musiker
2. Skriv ut information om en musiker`);

const val = prompt();
const musik = new Musiker();
switch (val) {
  case "1":
    let musikernsNamn = prompt("Musikerns namn: ")
    let musikernsBD = prompt("Musikerns födelseår: ");
    musik.skapaMusiker(musikernsNamn, musikernsBD);
    break;
  case "2":
    
    
    
}


