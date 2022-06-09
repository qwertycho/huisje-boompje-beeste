import db from './database.js';
let bergkip
// get the url parameters
const queryString = window.location.search;
let paramString = queryString.split('?');

console.log(paramString[1]);

// zoeken naar het juiste huis in de "database"
var huis = paramString[1];
console.log("string: " + huis);
if (huis == undefined || huis == "") {
  console.log("geen huis gevonden");
  // create a dropdown list
  const huisSelector = document.createElement("select");
  huisSelector.id = "huisSelector";
  huisSelector.name = "huisSelector";
  huisSelector.className = "huisSelector";
  huisSelector.onchange = function () {
    let huis = document.getElementById("huisSelector").value;
    window.location.href = "contact?" + huis;
  };
  for (let i = 0; i < db.length; i++) {
    const option = document.createElement("option");
    option.value = db[i].naam;
    option.text = db[i].naam;
    huisSelector.appendChild(option);
  }
  document.querySelector("main").appendChild(huisSelector);
} else {
  // huis omzetten naar het huis object
  for (let i = 0; i < db.length; i++) {
    if (db[i].naam == huis) {
      huis = db[i];
    }
  }
  // de gegevens op de pagina invullen vanuit huis object
document.getElementById("kop").innerHTML = huis.naam;
  const adres = document.createElement("p");
    adres.innerHTML = huis.adres;
    document.querySelector("main").appendChild(adres);
  const prijs = document.createElement("p");
    prijs.innerHTML = huis.prijs;
    document.querySelector("main").appendChild(prijs);
  const fotos = document.createElement("div");
    fotos.className = "fotos";
    fotos.style.width = "300px";
    fotos.style.height = "100px";
    for (let i = 0; i < huis.fotos.length; i++) {
        let foto = document.createElement("img");
        foto.src = huis.fotos[i];
        fotos.appendChild(foto);
        console.log(huis.fotos[i]);
    }
    document.querySelector("main").appendChild(fotos);
  const contact = document.createElement("p");
    contact.innerHTML = huis.contact;
    document.querySelector("main").appendChild(contact);

  fotos.style.backgroundImage = "url(" + huis.fotos[0] + ")";
}
document.getElementById("kop").innerHTML = "Selecteer een huis";

