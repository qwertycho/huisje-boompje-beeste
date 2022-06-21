const bod = document.getElementById("bod");

document.getElementById("submit").addEventListener("click", function (event) {
  if (!bodCheck()) {
    alert("Het minimum bod moet €1000000 zijn!")
  } else{
    console.log("submit");
    event.preventDefault();
  //   het data object aanmaken
    let data = {
      naam: document.querySelector("#name").value,
      sirname: document.querySelector("#sirname").value,
      email: document.querySelector("#email").value,
      villa: document.querySelector("#villa").value,
      bod: parseInt(document.querySelector("#bod").value),
      bericht: document.querySelector("#message").value,
    };

  //   check if all fields are filled
      if (data.naam === "" || data.sirname === "" || data.email === "" || data.villa === "" || data.bod === "" || data.bericht === "") {
          alert("Please fill in all fields");
          return;
      }

    console.log(JSON.stringify(data));
  //   stuurt de data naar de server met een POST request
  try{
  (async () => {
      const rawResponse = await fetch('/data', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();
    document.getElementById("submit").style.backgroundColor = "green";
    document.getElementById("submit").innerHTML = "Bericht verzonden";
  } catch(err){
      console.log(err);
      alert("Er is iets fout gegaan, probeer het later opnieuw");
      document.getElementById("submit").style.backgroundColor = "red";
  }
}

});


bod.addEventListener("click", bodCheck);

function bodCheck(){
  if(bod.value < 1000000){
    bod.style.backgroundColor = "red"
    return false;
  } else{
    bod.style.backgroundColor = "white"
    return true
  }
}