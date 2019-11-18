// to-do: counter HTML/CSS, Interface etc.

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
document.body.appendChild(canvas);
let w;
let images = [];
let currentimage = 0;

for (w = 0; w< 5; w++){
    images[w] = new Image();
    images[w].src = "images/pika" + (w + 1) +".gif";
    console.log(images[w]);
}

<<<<<<< HEAD:jumpyjumpjump.js
//player jump - input - left mouseclick
let jumpPressed = false;

function mouseDownHandler(e) {
  jumpPressed = true;
}

//draw character
function DrawCharacter() {
  //Constructor
  this.charHeight = 50;
  this.charWidth = 25;
  this.charX = 100;
  this.charY = 350;
  this.drawChar = function() {
    ctx.beginPath();
    //ctx.rect(this.charX, this.charY, this.charWidth, this.charHeight)
    //ctx.fillStyle = "pink";

    ctx.drawImage(images[parseInt(currentimage/10)], 100, 350, 100, 50);    
    const interval = 100;
    currentimage++;
    if (currentimage == 50)
      currentimage = 0;
    ctx.fill();
    ctx.closePath();
  }
  this.retStats = function() {
    return this.charHeight, this.charWidth, this.charX, this.charY;
  }
}

//draw ground
=======
>>>>>>> 4c8a6b481ce2ba3f9f7afafd63acd61af25fd0df:scripts/main.js
let groundHeight = 100;
let groundWidth = 1000;

let jumpPressed = false;
document.addEventListener("click", function () { jumpPressed = true }, false );
document.addEventListener("keydown", function () { if(event.code == "Space") { jumpPressed = true; } }, false );

let str_counter = 0;
let display_div = document.getElementById("display_div_id");
display_div.innerHTML = str_counter;

function drawGround() {
  ctx.beginPath();
  ctx.rect(0, 400, groundWidth, groundHeight);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

//generate obstacles
function Obstacles(multiple_objects) {
  //constructor
  this.obsHeight = Math.floor((Math.random() * 150) + 50);
  this.obsWidth = Math.floor((Math.random() * 150) + 50);
  this.obsY = canvas.height - groundHeight - this.obsHeight;
  this.obsX = canvas.width + multiple_objects;
  //this.obsSpeed = Math.random();
  this.drawObstacle = function() {
    ctx.beginPath();
    ctx.rect(this.obsX, this.obsY, this.obsWidth, this.obsHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
  this.moveObstacle = function(x) {
    if(this.obsX >= -this.obsWidth) {
      this.obsX -= x;
    }
    else if (this.obsX < 0){
      this.obsHeight = Math.floor((Math.random() * 150) + 100);
      this.obsWidth = Math.floor((Math.random() * 100) + 50);
      this.obsY = canvas.height - groundHeight - this.obsHeight;
      this.obsX = canvas.width + 10;
    }
  }
  this.gameOver = function(charY, charHeight) {
    let charStats = new DrawCharacter();
    charStats.retStats();
    if(charY + charHeight > this.obsY && charStats.charX + charStats.charWidth >= this.obsX && charStats.charX < this.obsX + this.obsWidth) { //visual bug!!!
      alert("Game over!");
      document.location.reload();
      clearInterval(interval);
    }
  }
}

let x = -10;
let obst = new Obstacles(0);
let obst2 = new Obstacles(500);
let character = new DrawCharacter();

interval = setInterval(draw, 1);
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawGround();
  character.drawChar();
  obst.drawObstacle();
  obst2.drawObstacle();
  obst.moveObstacle(2);
  obst2.moveObstacle(2);
  obst.gameOver(character.charY, character.charHeight);
  obst2.gameOver(character.charY, character.charHeight);

  let z = Math.pow(x, 2)
  if(jumpPressed && character.charY <= 350) {
    x += 0.1;
    character.charY = 2.5*z-5*x+50.5;
  }
  if(character.charY > 350) {
    x = -10;
    character.charY = 350;
    jumpPressed = false;
    str_counter++;
    display_div.innerHTML = str_counter;
  }
}
