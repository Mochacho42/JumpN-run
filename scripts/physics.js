function Physics(x, y) {
  this.x = x;
  this.y = y;
  this.xVel = 0;
  this.yVel = 0;

  let setForce = function (x, y) {
    this.xVel += x;
    this.yVel += y;
  }

  let applyForce = function() {

  }

}
