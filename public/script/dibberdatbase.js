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
            // new elem
            const container = document.createElement("div");
            container.className = "container";
            container.id = `container${i}`;

            const naamElem = document.createElement("div")
            naamElem.innerHTML = data[i].naam;
            container.appendChild(naamElem);

            const surElem = document.createElement("div")
            surElem.innerHTML = data[i].surname;
            container.appendChild(surElem);

            const emailElem = document.createElement("div")
            emailElem.innerHTML = data[i].email;
            container.appendChild(emailElem);

            const berichtElem = document.createElement("div")
            berichtElem.innerHTML = data[i].bericht;
            container.appendChild(berichtElem);

            const bodElem = document.createElement("div")
            bodElem.innerHTML = data[i].bod;
            container.appendChild(bodElem);

            const villaElem = document.createElement("div")
            villaElem.innerHTML = data[i].villa;
            container.appendChild(villaElem);

            document.getElementById("mess").appendChild(container)
        };
        }
        xmlhttp.send();
    }
