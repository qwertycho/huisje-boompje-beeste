import db from './database.js';
console.log("2");
// get the url parameters
const queryString = window.location.search;
let paramString = queryString.split('?');
console.log("start");
console.log(paramString[1]);

// zoeken naar het juiste huis in de "database"
var huis = paramString[1];
console.log("string: " + huis);
if (huis == undefined || huis == "") {
  console.log("geen huis gevonden");
  document.getElementById("kop").innerHTML = "Selecteer een huis";

} else {
  // huis omzetten naar het huis object
  for (let i = 0; i < db.length; i++) {
    if (db[i].naam == huis) {
      huis = db[i];
    }
  }
  
  const userSelect = document.getElementById("villa");
  userSelect.value = huis.naam;
  console.log("select value = " + userSelect.value);

}