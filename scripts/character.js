let images = [];
let index = 0;
let elapsed = 0;
const speed = 50;

for (w = 0 ; w < 5 ; w++) {
  images[w] = new Image();
  images[w].src = "images/pika" + w + ".png";
}

function Character() {
  this.charHeight = 50;
  this.charWidth = 25;
  this.charX = 100;
  this.charY = 350;

  this.draw = function() {
    ctx.beginPath();
    ctx.drawImage(images[index], 100, 350 - (x * 10), 100, 50);    
    ctx.fill();
    ctx.closePath();

    if (elapsed++ % speed == 0) {
      index = (index + 1) % images.length;
    }
  }

  this.jump = function() {
    console.log("saute !");
  }
}
