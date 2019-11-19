let mainCanvas = document.getElementById("main");
let ctx = mainCanvas.getContext("2d");
mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;

//draw ground
let groundHeight = mainCanvas.height/2;
let groundWidth = mainCanvas.width;

document.addEventListener("click", function () { pikachu.jump(); }, false );
document.addEventListener("keydown", function () { if (event.code == "Space") pikachu.jump(); }, false );

let str_counter = 0;

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
  ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
  ctx.fillStyle = "white";
  ctx.font = "16px monospace";
  ctx.fillText(str_counter, 0, 14);
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
  }
}
