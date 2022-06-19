const id = document.getElementsByClassName("id");
const naam = document.getElementsByClassName("naam");
const achternaam = document.getElementsByClassName("achternaam");
const email = document.getElementsByClassName("email");
const bericht = document.getElementsByClassName("bericht");
const bod = document.getElementsByClassName("bod");
const villa = document.getElementsByClassName("villa");

windows.onload = fetch();

function fetch() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "myData.json", true);
    xmlhttp.getResponseHeader("Content-type", "application/json");

    xmlhttp.onload = function() {
        const object = JSON.parse(this.responseText);
        Array.from(id).forEach(id, index) => {
            id.innerText = obj.myData[index].id;
        }
        Array.from(naam).forEach(naam, index) => {
            naam.innerText = obj.myData[index].naam;
        }
        Array.from(achternaam).forEach(achternaam, index) => {
            achternaam.innerText = obj.myData[index].achternaam;
        }
        Array.from(email).forEach(email, index) => {
            email.innerText = obj.myData[index].email;
        }
        Array.from(bericht).forEach(bericht, index) => {
            bericht.innerText = obj.myData[index].bericht;
        }
        Array.from(bod).forEach(bod, index) => {
            bod.innerText = obj.myData[index].bod;
        }
        Array.from(villa).forEach(villa, index) => {
            villa.innerText = obj.myData[index].villa;
        }
    }

    xmlhttp.send();
}