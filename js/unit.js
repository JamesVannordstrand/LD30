//creates a unit 
function Unit(name, nameColor, speed, x, y) {
  this.name = name;
  this.nameColor = nameColor;
  this.speed = speed;

  this.pos = {x: 0, y: 0};
  this.dest = {x: 100, y:100};
  this.hp = 100;
}

//draw the unit 
Unit.prototype.draw = function(c, drawName) {
  c.fillRect(this.pos.x, this.pos.y, 32, 32);
  if(drawName) {
    c.textAlign = "center";
    c.fillStyle = this.nameColor;
    c.font = "20px Georgia";
    c.fillText(this.name, this.pos.x+16, this.pos.y - 2);
  }
};

//set the destination of the unit to the given (X,Y) coordinates
Unit.prototype.moveTo = function(x, y) {
  this.dest = {x: x, y: y};
};

//update the unit
Unit.prototype.update = function() {
  var dist = Vec2.distance(this.pos, this.dest);
  var dir = Vec2.direction(this.pos, this.dest);

  if(dist < this.speed) {
    this.pos = this.dest;
  }
  else {
    this.pos.x += dir.x * this.speed;
    this.pos.y += dir.y * this.speed;
  }
};

