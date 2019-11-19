// to-do: counter HTML/CSS, Interface etc.

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

//draw ground
let groundHeight = canvas.height/2;
let groundWidth = canvas.width;

document.addEventListener("click", function () { pikachu.jump(); }, false );
document.addEventListener("keydown", function () { pikachu.jump(); }, false );
document.addEventListener("keyup", function () { pikachu.down() }, false );

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

  if(pikachu.charY > 500) {
    x = 0;
    pikachu.charY = 350;
    jumpPressed = false;
    str_counter++;
    display_div.innerText = str_counter;
  }
}
