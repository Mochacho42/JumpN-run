let w;
let images = [];
let currentimage = 0;

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

