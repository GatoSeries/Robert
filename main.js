var fondos = ["fondo1.jpg", "fondo2.jpg", "fondo3.jpg", "fondo4.jpg"];
var canvas = document.getElementById("ana");
var context = canvas.getContext("2d");
var width = 100;
var height = 90;

var roverPosX = 10;
var roverPosY = 10;

var bgImg = new Image();
var roverImg = new Image();

function load() {
    bgImg.onload = uploadBackground;
var randomNumber = Math.floor(Math.random() * 4);
    bgImg.src = fondos[randomNumber];

    roverImg.onload = uploadRover;
    roverImg.src = "robert.png";


}

function uploadBackground() {
    context.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

}
function uploadRover() {
    context.drawImage(roverImg, roverPosX, roverPosY, width, height);

}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPress = e.keyCode;
    if (keyPress == "38") {
        up();
        console.log("up");
    }
    if (keyPress == "40") {
        down();
        console.log("down");
    }
    if (keyPress == "37") {
        left();
        console.log("left");
    }
    if (keyPress == "39") {
        right();
        console.log("right");
    }


}
function up() {
    if (roverPosY >= 0) {
        roverPosY = roverPosY - 10;

        uploadBackground();
        uploadRover();
    }
}
function down() {
    if(roverPosY <= 500) {
        roverPosY = roverPosY + 10;
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if(roverPosX >= 0) {
        roverPosX = roverPosX - 10;
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if(roverPosY <= 700) {
        roverPosX = roverPosX + 10;
        uploadBackground();
        uploadRover();
    }
}
