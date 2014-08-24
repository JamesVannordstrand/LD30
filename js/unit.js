//creates a unit 
function Unit(name, nameColor, rect, speed, pos, dest) {
  this.name = name;
  this.nameColor = nameColor;
  this.rect = rect;
  this.speed = speed;

  this.pos = new Vec2(0,0);
  this.dest = new Vec2(0,0);

  this.hp = 100;
}

//draw the unit 
Unit.prototype.draw = function(c, drawName) {
  c.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
  if(drawName) {
    c.textAlign = "center";
    c.fillStyle = this.nameColor;
    c.font = "20px Georgia";
    c.fillText(this.name, this.rect.x+(this.rect.w/2), this.rect.y - 2);
  }
};

//set the destination of the unit to the given (X,Y) coordinates
Unit.prototype.moveTo = function(x, y) {
  this.dest.x = x;
  this.dest.y = y;
};

//update the unit
Unit.prototype.update = function() {
  var dist = this.pos.distance(this.dest);
  var dir = this.pos.direction(this.dest);
  var dpos = dist > this.speed ? dir.scale(this.speed) : dir.scale(dist);
  this.pos.add(dpos);
};

