// to-do: counter HTML/CSS, Interface etc.

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
document.body.appendChild(canvas);

//draw ground
let groundHeight = 100;
let groundWidth = 1000;

let jumpPressed = false;
document.addEventListener("click", function () { pikachu.jump(); }, false );
document.addEventListener("keydown", function () { pikachu.jump(); }, false );

let str_counter = 0;
let display_div = document.getElementById("display_div_id");
display_div.innerText = str_counter;

function drawGround() {
  ctx.beginPath();
  ctx.rect(0, 400, groundWidth, groundHeight);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

let x = 0;
let obst = new Obstacles(0);
let obst2 = new Obstacles(500);
let pikachu = new Character();

interval = setInterval(draw, 1);
function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawGround();
  pikachu.draw();
  obst.drawObstacle();
  obst2.drawObstacle();
  obst.moveObstacle(2);
  obst2.moveObstacle(2);
  obst.gameOver(pikachu.charY, pikachu.charHeight);
  obst2.gameOver(pikachu.charY, pikachu.charHeight);

  let z = Math.pow(x, 2)
  if(jumpPressed && pikachu.charY <= 350) {
    x += 0.1;
    pikachu.charY = 2.5*z-5*x+50.5;
  }
  if(pikachu.charY > 350) {
    x = 0;
    pikachu.charY = 350;
    jumpPressed = false;
    str_counter++;
    display_div.innerText = str_counter;
  }
}
