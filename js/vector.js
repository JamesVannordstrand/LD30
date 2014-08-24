//a simple 2-D vector 
function Vec2(x, y) {
  this.x = x;
  this.y = y;
}

//add the other vector to this vector
Vec2.prototype.add = function(other) {
  this.x += other.x;
  this.y += other.y;
}

//get the magnitude of this vector
Vec2.prototype.mag = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}

//get the distance to the given other 2-D vector
Vec2.prototype.distance = function(other) {
  return Math.sqrt((this.x * this.x - other.x * other.x) +
      (this.y * this.y - other.y * other.y));
}

//get the unit direction between this vector and the given other 2-D vector
Vec2.prototype.direction = function(other) {
  return Math.atan((other.y - this.y) / (other.x - this.x));
}

//scale this vector by the given 2-D vector
Vec2.prototype.scale = function(other) {
  return new Vec2(this.x * other.x, this.y * other.y);
}

