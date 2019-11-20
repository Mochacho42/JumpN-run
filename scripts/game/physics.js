function Physics(x, y, friction = 1) {
  this.xPos = x;
  this.yPos = y;
  this.xVel = 0;
  this.yVel = 0;
  this.friction = friction;

  this.setForce = function (x, y) {
    this.xVel = x;
    this.yVel = y;
  }

  this.applyPhysics = function() {
    this.xVel *= this.friction;
    this.yVel *= this.friction;
    this.xPos += this.xVel;
    this.yPos += this.yVel;
  }
}
