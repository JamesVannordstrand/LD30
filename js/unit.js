//creates a unit 
function Unit(name, homeworldAnimation, frontierAnimation, nameColor, pos, speed, damage, hp) {
  this.name = name;
  this.nameColor = nameColor;

  this.pos = pos;
  this.dest = {x: 100, y:100};

  this.speed = speed;
  this.damage = damage;
  this.hp = hp;

  //get the frames of this sprite's animation
  this.hAnimation = [];
  this.fAnimation = [];

  for(var i = 0; i < homeworldAnimation.length; ++i) {
    var img = new Image();
    img.src = homeworldAnimation[i];
    this.hAnimation.push(img);
  }
  for(var i = 0; i < frontierAnimation.length; ++i) {
    var img = new Image();
    img.src = homeworldAnimation[i];
    this.fAnimation.push(img);
  }

  planet = 0; //0=homeworld, 1=frontier
}

//draw the unit 
Unit.prototype.draw = function(ctx, drawName) {
  if(this.planet == 0) {
    //draw homeworld sprite
    ctx.drawImage(this.hAnimation[0], this.pos.x, this.pos.y);
  }
  else {
    //draw frontier sprite
    ctx.drawImage(this.fAnimation[0], this.pos.x, this.pos.y);
  }
  if(drawName) {
    ctx.textAlign = "center";
    ctx.fillStyle = this.nameColor;
    ctx.font = "20px Georgia";
    ctx.fillText(this.name, this.pos.x+16, this.pos.y - 2);
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

function ChickenUnit() {
  return new Unit(
    "Chicken",  //unit name
    ["images/chicken_back.png", "images/chicken_front.png"],   //homeworld sprites
    ["images/chicken_back_helmet.png", "images/chicken_front_helmet.png"],  //frontier sprites
    "black", //name color
    {x:150, y:150}, //position
    1.3,  //speed
    10,   //damage
    100   //hp
  );
}
function CowUnit() {
  return new Unit(
    "Cow", //unit name
    ["images/cow_back_helmet.png", "images/cow_front_helmet.png"],  //homeworld sprites
    ["images/cow_back.png", "images/cow_front.png"], //frontier sprites
    "black", //name color
    {x: 100, y: 100}, //position
    .6,   //speed
    -5,   //damage
    200   //hp
  );
}
function PigUnit() {
  return new Unit(
    "Pig",  //unit name
    ["images/pig_back_helmet.png", "images/pig_front_helmet.png"], //homeworld sprites
    ["images/pig_back.png", "images/pig_front.png"],  //frontier sprites
    "black",          //name color
    {x: 100, y: 100}, //position
    .9,   //speed
    3,    //damage
    300   //hp
  );
}


