import db from './database.js';

console.log(db);

// get the url parameters
const queryString = window.location.search;
let paramString = queryString.split('?');

let huisFoto1;
let huisFoto2;

console.log(paramString[1]);

// zoeken naar het juiste huis in de "database"
var huis = paramString[1];
console.log("string: " + huis);
if (huis == undefined || huis == "") {
  console.log("geen huis gevonden");

} else {
  // huis omzetten naar het huis object
  for (let i = 0; i < db.length; i++) {
    if (db[i].waarde == huis) {
      huis = db[i];
      huisFoto1 = huis.fotos[0];
      huisFoto2 = huis.fotos[1];
    }
  }
  
  const userSelect = document.getElementById("villa");
  const bod = document.getElementById("bod");
  userSelect.value = huis.waarde;
  bod.value = huis.prijs;
  document.getElementById("foto1").style.backgroundImage = "url(" + huisFoto1 + ")";
  document.getElementById("foto2").style.backgroundImage = "url(" + huisFoto2 + ")";

}

// event listener voor de slect element
const userSelect = document.getElementById("villa");
userSelect.addEventListener("change", function() {
  window.location.href = "/contact?" + userSelect.value;
});
