function DrawCharacter() {
  //Constructor
  this.charHeight = 50;
  this.charWidth = 25;
  this.charX = 100;
  this.charY = 350;
  this.drawChar = function() {
    ctx.beginPath();
    ctx.rect(this.charX, this.charY, this.charWidth, this.charHeight)
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();
  }
  this.retStats = function() {
     this.charHeight, this.charWidth, this.charX, this.charY;
  }
}
