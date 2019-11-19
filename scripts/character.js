let images = [];
let currentimage = 0;
let index = 0;
const speed = 50;

for (w = 0 ; w < 5 ; w++){
  images[w] = new Image();
  images[w].src = "images/pika" + w + ".png";
  console.log(images[w]);
}

function DrawCharacter() {
  this.charHeight = 50;
  this.charWidth = 25;
  this.charX = 100;
  this.charY = 350;

  this.drawChar = function() {
    currentimage++;
    if (currentimage % speed == 0) {
      index = (index + 1) % images.length;
    }

    ctx.beginPath();
    ctx.drawImage(images[index], 100, 350, 100, 50);    
    ctx.fill();
    ctx.closePath();
  }
  this.retStats = function() {
    return this.charHeight, this.charWidth, this.charX, this.charY;
  }
}
