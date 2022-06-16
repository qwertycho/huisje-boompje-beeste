function accessData(){
    db.each("SELECT * FROM formdata", function(err, row) {
    if(err) return console.log(err.message);
    let idNaam = document.createelement();
    idNaam.innerHTML = row.naam;
    document.appendChild(idNaam);

    let voorNaam = document.createelement();
    voorNaam.innerHTML = row.naam;
    document.appendChild(voorNaam);

    let achterNaam = document.createelement();
    achterNaam.innerHTML = row.naam;
    document.appendChild(achterNaam);

    let email = document.createelement();
    email.innerHTML = row.naam;
    document.appendChild(email);

    let bericht= document.createelement();
    bericht.innerHTML = row.naam;
    document.appendChild(bericht);

    let bod = document.createelement();
    bod.innerHTML = row.naam;
    document.appendChild(bod);

    let villa = document.createelement();
    villa.innerHTML = row.naam;
    document.appendChild(villa);
    });
    }

accessData();

db.close();