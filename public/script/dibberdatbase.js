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
    xmlhttp.open("GET", "/datar", true);
    xmlhttp.getResponseHeader("Content-type", "application/json");

    xmlhttp.onload = function() {

        

        let data = JSON.parse(this.responseText);

        console.log(data);

        for(let i = 0; i < data.length; i++){
            console.log(i);
            const naamElem = document.createElement("div")
            naamElem.innerHTML = data[i].naam;
            document.body.appendChild(naamElem);

            const surElem = document.createElement("div")
            surElem.innerHTML = data[i].surname;
            document.body.appendChild(surElem);

            const emailElem = document.createElement("div")
            emailElem.innerHTML = data[i].email;
            document.body.appendChild(emailElem);

            const berichtElem = document.createElement("div")
            berichtElem.innerHTML = data[i].bericht;
            document.body.appendChild(berichtElem);

            const bodElem = document.createElement("div")
            bodElem.innerHTML = data[i].bod;
            document.body.appendChild(bodElem);

            const villaElem = document.createElement("div")
            villaElem.innerHTML = data[i].villa;
            document.body.appendChild(villaElem);
        };
        }
        xmlhttp.send();
    }
