const id = document.getElementsByClassName("id");
const naam = document.getElementsByClassName("naam");
const achternaam = document.getElementsByClassName("achternaam");
const email = document.getElementsByClassName("email");
const bericht = document.getElementsByClassName("bericht");
const bod = document.getElementsByClassName("bod");
const villa = document.getElementsByClassName("villa");

window.onload = fetch();

function fetch() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "myData.json", true);
    xmlhttp.getResponseHeader("Content-type", "application/json");

    xmlhttp.onload = function() {
        const object = JSON.parse(this.responseText);
        Array.from(id).forEach((id, index) => {
            id.innerText = object.myData[index].id;
        });
        Array.from(naam).forEach((naam, index) => {
            naam.innerText = object.myData[index].naam;
        });
        Array.from(achternaam).forEach((achternaam, index) => {
            achternaam.innerText = object.myData[index].achternaam;
        });
        Array.from(email).forEach((email, index) => {
            email.innerText = object.myData[index].email;
        });
        Array.from(bericht).forEach((bericht, index) => {
            bericht.innerText = object.myData[index].bericht;
        });
        Array.from(bod).forEach((bod, index) => {
            bod.innerText = object.myData[index].bod;
        });
        Array.from(villa).forEach((villa, index) => {
            villa.innerText = object.myData[index].villa;
        });
    }

    xmlhttp.send();
}