function Physics(initialXPos, initialYPos) {
  this.x = initialXPos;
  this.y = initialYPos;
  this.xVel = 0;
  this.yVel = 0;

  this.setForce = function (x, y) {
    this.xVel = x;
    this.yVel = y;
  }

  this.applyForce = function() {
    this.x += this.xVel;
    this.y += this.yVel;
  }
}
