//creates a unit 
function unit(name, nameColor, rect, speed) {
  this.name = name;
  this.nameColor = nameColor;
  this.rect = rect;
  this.speed = speed;
}

//draw the given unit 
function drawUnit(c, unit, drawName) {
  c.fillRect(unit.rect.x, unit.rect.y, unit.rect.w, unit.rect.h);
  if(drawName) {
    c.textAlign = "center";
    c.fillStyle = unit.nameColor;
    c.font = "20px Georgia";
    c.fillText(unit.name, unit.rect.x+(unit.rect.w/2), unit.rect.y - 2);
  }
}

