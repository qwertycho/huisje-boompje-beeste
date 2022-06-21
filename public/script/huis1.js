import db from "/database.js"
let huis = document.querySelector(".zoeker").id
let volgende = document.getElementById("volgende")
let terug = document.getElementById("terug")

let photoCount = 0;
let Huis1 = document.getElementById("huis1");

console.log(huis);

for (let i = 0; i < db.length; i++) {
    if (db[i].naam == huis) {
      huis = db[i];
    document.getElementById("contactButton").setAttribute("href", `/contact?${huis.waarde}`)
    // getelem.style.img = huis.fotos[0]
    }
}


Huis1.style.backgroundImage = `url("${huis.fotos[0]}")`;

volgende.addEventListener("click", houseClickUp);

function houseClickUp() {
    if (photoCount !== 7){
        photoCount++;
        Huis1.style.backgroundImage = `url("${huis.fotos[photoCount]}")`
    } else {
        photoCount = 0;
        Huis1.style.backgroundImage = `url("${huis.fotos[photoCount]}")`
    }
}

terug.addEventListener("click", houseClickDown);

function houseClickDown() {
    if (photoCount !== 0){
        photoCount--;
        Huis1.style.backgroundImage = `url("${huis.fotos[photoCount]}")`
    } else {
        photoCount = 7;
        Huis1.style.backgroundImage = `url("${huis.fotos[photoCount]}")`
    }
}

console.log(huis);