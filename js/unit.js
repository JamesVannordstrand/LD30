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

function ChickenUnit(planet) {
  if(planet == "frontier"){
    this.imageArray = ["../images/chicken_back_helmet.png", "../images/chicken_left_helmet.png", "../images/chicken_right_helmet.png.png", "../images/chicken_front_helmet.png"]
  }else{
    this.imageArray = ["../images/chicken_back.png", "../images/chicken_left.png", "../images/chicken_right.png", "../images/chicken_front.png"]
  }

  this.damage = 10;
  this.hp     = 100; 
}

function CowUnit(planet) {
  if(planet == "frontier"){
    this.imageArray = ["../images/cow_back_helmet.png", "../images/cow_left_helmet.png", "../images/cow_right_helmet.png.png", "../images/cow_front_helmet.png"]
  }else{
    this.imageArray = ["../images/cow_back.png", "../images/cow_left.png", "../images/cow_right.png", "../images/cow_front.png"]
  }

  this.damage = -5;
  this.hp = 200;
}

function PigUnit(planet) {
  if(planet == "frontier"){
    this.imageArray = ["../images/pig_back_helmet.png", "../images/pig_left_helmet.png", "../images/pig_right_helmet.png.png", "../images/pig_front_helmet.png"]
  }else{
    this.imageArray = ["../images/pig_back.png", "../images/pig_left.png", "../images/pig_right.png", "../images/pig_front.png"]
  }

  this.damage = 3;
  this.hp = 300;
}

ChickenUnit.prototype = new Unit("chicken", "red", {x:300, y:300, w: 32, h:32}, 100);

CowUnit.prototype = new Unit("Cow", "red", {x:300, y:300, w: 32, h:32}, 100);

PigUnit.prototype = new Unit("Pig", "red", {x:300, y:300, w: 32, h:32}, 100);

