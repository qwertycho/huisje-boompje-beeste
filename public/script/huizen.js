import db from "./Database.js"
let huis = document.getElementsByTagName("main").id;

for (let i = 0; i < db.length; i++) {
    if (db[i].naam == huis) {
      huis = db[i];
    document.getElementById("contactButton").setAttribute("href", `/contact? ${+huis.waarde}`)
    // getelem.style.img = huis.fotos[0]
    }
}