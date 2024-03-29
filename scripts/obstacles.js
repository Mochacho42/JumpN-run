function Obstacles(multiple_objects) {
  //constructor
  this.obsHeight = Math.floor((Math.random() * 150) + 50);
  this.obsWidth = Math.floor((Math.random() * 150) + 50);
  this.obsY = mainCanvas.height - groundHeight - this.obsHeight;
  this.obsX = mainCanvas.width + multiple_objects;
  //this.obsSpeed = Math.random();
  this.drawObstacle = function() {
    ctx.beginPath();
    ctx.rect(this.obsX, this.obsY, this.obsWidth, this.obsHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
  this.moveObstacle = function(y) {
    if(this.obsX >= -this.obsWidth) {
      this.obsX -= y;
    }
    else if (this.obsX < 0){
      this.obsHeight = Math.floor((Math.random() * 150) + 100);
      this.obsWidth = Math.floor((Math.random() * 100) + 50);
      this.obsY = mainCanvas.height - groundHeight - this.obsHeight;
      this.obsX = mainCanvas.width + 10;
    }
  }
  this.gameOver = function(charY, charHeight) {
    let charStats = new Character();
    if(charY + charHeight > this.obsY && charStats.charX + charStats.charWidth >= this.obsX && charStats.charX < this.obsX + this.obsWidth) { //visual bug!!!
      document.location.reload();
      clearInterval(interval);
    }
  }
}
