let Huis1 = document.getElementById("huis1");

Huis1.style.backgroundImage = "url('../img/huis-1/1.jpg')";

let photoCount = 1;
    


function houseClickUp() {
    if (photoCount !== 8){
        photoCount++;
        Huis1.style.backgroundImage = "url('../img/huis-1/" + photoCount + ".jpg')";
    } else {
        photoCount = 1;
        Huis1.style.backgroundImage = "url('../img/huis-1/" + photoCount + ".jpg')";
    }
}

function houseClickDown() {
    if (photoCount !== 1){
        photoCount--;
        Huis1.style.backgroundImage = "url('../img/huis-1/" + photoCount + ".jpg')";
    } else {
        photoCount = 8;
        Huis1.style.backgroundImage = "url('../img/huis-1/" + photoCount + ".jpg')";
    }
}