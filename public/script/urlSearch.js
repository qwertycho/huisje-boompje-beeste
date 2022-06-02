// data import
import db from './database.js';

// get the url parameters
const queryString = window.location.search;
let paramString = queryString.split('?');

// zoeken naar het juiste huis in de database
let huis = paramString[1];
if (huis == undefined) {
    huis = "index";
} else{
    // huis omzetten naar het huis object
    for (let i = 0; i < db.length; i++) {
        if (db[i].naam == huis) {
            huis = db[i];
            break;
        }
    }
}

// de gegevens op de pagina invullen vanuit huis object
try{
const titel = document.getElementById('titel');
const adres = document.getElementById('adres');
const prijs = document.getElementById('prijs');
const fotos = document.getElementById('fotos');
const contact = document.getElementById('contact');

titel.innerHTML = huis.naam;
adres.innerHTML = huis.adres;
prijs.innerHTML = huis.prijs;
fotos.innerHTML = huis.fotos;
contact.innerHTML = huis.contact;
} catch(error){
    console.log(error);
}