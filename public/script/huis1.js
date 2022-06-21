import db from "/script/database.js"
let huis = document.querySelector(".zoeker").id
let volgende = document.getElementById("volgende")
let terug = document.getElementById("terug")

let photoCount = 0;
let Huis1 = document.getElementById("huis1");

for (let i = 0; i < db.length; i++) {
    if (db[i].waarde == huis) {
    huis = db[i];
    document.getElementById("contactButton").setAttribute("href", `/contact?${huis.waarde}`)
    }
}

let maxFoto = huis.fotos.length;
Huis1.style.backgroundImage = `url("${huis.fotos[0]}")`;

volgende.addEventListener("click", houseClickUp);

function houseClickUp() {
    if (photoCount != maxFoto-1){
        photoCount++;
        Huis1.style.backgroundImage = `url("${huis.fotos[photoCount]}")`
    } else {
        photoCount = 0;
        Huis1.style.backgroundImage = `url("${huis.fotos[photoCount]}")`
    }
    console.log(maxFoto);
}

terug.addEventListener("click", houseClickDown);

function houseClickDown() {
    if (photoCount != 0){
        photoCount--;
        Huis1.style.backgroundImage = `url("${huis.fotos[photoCount]}")`
    } else {
        photoCount = maxFoto-1;
        Huis1.style.backgroundImage = `url("${huis.fotos[photoCount]}")`
    }
}