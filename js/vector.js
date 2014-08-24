//the vector 2D namespace 
var Vec2 = {
  //
//add the other vector to this vector
sum: function(v1, v2) {
  return {
    x: v1.x + v2.x,
    y: v1.y + v2.y
  };
},

//get the magnitude of this vector
mag: function(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
},

//get the distance to the given other 2-D vector
distance: function(v1, v2) {
  return Math.sqrt(((v2.x - v1.x) * (v2.x - v1.x)) + ((v2.y - v1.y) * (v2.y - v1.y)));
},

//get the unit direction between this vector and the given other 2-D vector
direction: function(v1, v2) {
  var v = {x: v2.x - v1.x, y: v2.y - v1.y};
  var mag = Vec2.mag(v);
  if(mag == 0.0) {
    return {x: 0, y: 0};
  }
  return {
    x: v.x / mag,
    y: v.y / mag
  };
},

//scale this vector by the given factor
scale: function(v, s) {
  return {
    x: v.x * s,
    y: v.y * s
  }
}
};

