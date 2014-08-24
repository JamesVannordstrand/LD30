gameOnClick = function(evt) {
  var rect = game.canvas.getBoundingClientRect();
  var pos = {x: evt.clientX - rect.left, y: evt.clientY - rect.top};
  
  //check what was clicked on
  //priority goes player's units > enemy units > terrain
  for(i = 0; i < game.player.homeWorldUnits.length; ++i) {
    var u = game.player.homeWorldUnits[i];
    var r = new Rect(u.pos.x, u.pos.y, 32, 32);
    if(r.containsPoint(pos)) {
      game.activeSelection.unit = u;
      game.activeSelection.type = "ally";
      return;
    }
  }
  for(i = 0; i < game.player.frontierUnits.length; ++i) {
    var u = game.player.frontierUnits[i];
    var r = new Rect(u.pos.x, u.pos.y, 32, 32);
    if(r.containsPoint(pos)) {
      game.activeSelection.unit = u;
      game.activeSelection.type = "ally";
      return;
    }
  }
  //must be terrain, tell the active unit (if any) to move there. 
  if(game.activeSelection.type == "ally") {
    if(game.activeSelection.unit != null) {
      game.activeSelection.unit.moveTo(pos.x, pos.y);
    }
    game.activeSelection.unit = null;
  }
}

//the main update tick
function tick() {
  game.update();
  game.draw();
}

//the base game class
function Game() {
  //get the canvas and canvs 2D context 
  this.canvas = document.getElementById("myCanvas");
  this.context = this.canvas.getContext("2d");

  this.fps = 60;
  this.running = true;
  this.map = new Map();
  this.cursor = new Cursor(this.canvas, gameOnClick);
  this.player = new Player("PLAYER");

  this.activeSelection = {
    type:"ally",
    unit: null
  }
}

//initialize the game
Game.prototype.start = function() {
  //setup an interval for the game loop to be called on TODO: untested
  setInterval(tick, this.fps);
  //tell the cursor to listen for events on this canvas 
  this.cursor.listen(this.canvas);
 
  //TODO: test unit
  var lance = new Unit("lance", "#666000", .9, 100, 200);
  this.player.addUnit("frontier", lance);
};

//draw the game
Game.prototype.draw = function() {
  this.context.fillStyle = "#FF0000";
  this.context.fillRect(0,0,150,75);

  //clear the canvas
  this.context.clearRect(0, 0, this.map.pixW, this.map.pixH);

  //draw the map
  this.map.drawGrid(this.context);

  //draw the player's units
  for(i = 0; i < this.player.homeWorldUnits.length; ++i) {
    this.player.homeworldUnits[i].draw(this.context);
  }
  for(i = 0; i < this.player.frontierUnits.length; ++i) {
    this.player.frontierUnits[i].draw(this.context);
  }
 
  //draw the player
  this.player.drawPlayer(this.context);
};

//update the game
Game.prototype.update = function() {
  //update the player's units
  for(i = 0; i < this.player.homeWorldUnits.length; ++i) {
    this.player.homeWorldUnits[i].update();
  }
  for(i = 0; i < this.player.frontierUnits.length; ++i) {
    this.player.frontierUnits[i].update();
  }
};

//create the game and start it
var game = new Game();
game.start();

