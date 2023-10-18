import Band from "./band.js";
import Musiker from ".musiker.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });


console.log(`Meny
1. Skapa nytt band
2. Ta bort ett band
3. Skapa musiker
4. Ta bort musiker
5. Lägga till/ta bort musiker till band
6. Lägga till/ta bort band från musiker`); 
