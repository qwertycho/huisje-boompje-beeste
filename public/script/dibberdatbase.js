var sqlite3 = require('sqlite3').verbose();

try {
    var db = new sqlite3.Database("data.db");
  } catch (err) {
    console.log(err);
  }

function accessData(){
    const input = document.createElement("input");

    db.each("SELECT * FROM formdata", function(err, row) {

    if(err) return console.log(err.message);
    let idNaam = document.createElement();
    idNaam.innerHTML = row.naam;
    document.appendChild(idNaam);

    let voorNaam = document.createElement();
    voorNaam.innerHTML = row.naam;
    document.appendChild(voorNaam);

    let achterNaam = document.createElement();
    achterNaam.innerHTML = row.naam;
    document.appendChild(achterNaam);

    let email = document.createElement();
    email.innerHTML = row.naam;
    document.appendChild(email);

    let bericht= document.createElement();
    bericht.innerHTML = row.naam;
    document.appendChild(bericht);

    let bod = document.createElement();
    bod.innerHTML = row.naam;
    document.appendChild(bod);

    let villa = document.createElement();
    villa.innerHTML = row.naam;
    document.appendChild(villa);
    });
    }

accessData();

db.close();