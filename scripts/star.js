function Star() {
  this.physics = new Physics(mainCanvas.width, mainCanvas.height - mainCanvas.height/4);
  this.physics.setForce(-1, 0);

  this.draw = function() {
    this.physics.applyPhysics();
      
    ctx.beginPath();
    ctx.arc(this.physics.xPos, this.physics.yPos, 10, 0, Math.PI*2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }
}
