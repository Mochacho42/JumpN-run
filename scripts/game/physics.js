function Physics(initialXPos, initialYPos) {
  this.xPos = initialXPos;
  this.yPos = initialYPos;
  this.xVel = 0;
  this.yVel = 0;

  this.setForce = function (x, y) {
    this.xVel = x;
    this.yVel = y;
  }

  this.applyPhysics = function() {
    this.xPos += this.xVel;
    this.yPos += this.yVel;
  }
}
