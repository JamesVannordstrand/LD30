//simple rectangle class
function Rect(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

//checks if the given pt (Vec2) is within this rectangle
Rect.prototype.containsPoint = function(pt) {
  return ((pt.x >= this.x) && (pt.x <= (this.x + this.w)) && 
      (pt.y >= this.y) && (pt.y <= (this.h + this.y)));
};

