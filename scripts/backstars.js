function Star() {
  this.physics = new Physics(mainCanvas.width, mainCanvas.height - mainCanvas.height/4);
  this.physics.setForce(-9, 0);

  this.drawStar = function() {
    this.physics.applyForce();
      
    ctx.beginPath();
    ctx.arc(this.physics.x, this.physics.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }
}
