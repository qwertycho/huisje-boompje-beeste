document.getElementById("submit").addEventListener("click", function (event) {
  console.log("submit");
  event.preventDefault();
  let data = {
    naam: document.querySelector("#name").value,
    sirname: document.querySelector("#sirname").value,
    email: document.querySelector("#email").value,
    villa: document.querySelector("#villa").value,
    bod: document.querySelector("#bod").value,
    bericht: document.querySelector("#message").value,
  };
  console.log(JSON.stringify(data));
  // Send data to server
//   fetch("/data", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then(function (response) {
//     console.log(response);
//     if (response.status == 200) {
//       console.log("Data sent to server");
//     } else {
//       console.log("Error sending data to server");
//     }
//   });

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
});
