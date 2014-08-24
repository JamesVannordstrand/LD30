//TODO: only needed due to 2 canvases - think we should merge back to 1 canvas
function handleClick(c, evt) {
  var rect = c.getBoundingClientRect();
  var pos = {x: evt.clientX - rect.left, y: evt.clientY - rect.top};
  
  //check what was clicked on
  //priority goes player's units > enemy units > terrain
  for(i = 0; i < game.player.homeWorldUnits.length; ++i) {
    var u = game.player.homeWorldUnits[i];
    var r = new Rect(u.pos.x, u.pos.y, 32, 32);
    if(r.containsPoint(pos)) {
      game.selection.unit = u;
      game.selection.type = "ally";
      return;
    }
  }
  for(i = 0; i < game.player.frontierUnits.length; ++i) {
    var u = game.player.frontierUnits[i];
    var r = new Rect(u.pos.x, u.pos.y, 32, 32);
    if(r.containsPoint(pos)) {
      game.selection.unit = u;
      game.selection.type = "ally";
      return;
    }
  }
  //must be terrain, tell the active unit (if any) to move there. 
  if(game.selection.type == "ally") {
    if(game.selection.unit != null) {
      game.selection.unit.moveTo(pos.x, pos.y);
    }
    game.selection.unit = null;
  }
}

function homeWorldClicked(evt) {
  handleClick(game.homeWorldCanvas, evt);
}
function frontierClicked(evt) {
  handleClick(game.frontierCanvas, evt);
}


//the main update tick
function tick() {
  game.update();
  game.draw();
}

//the base game class
function Game() {
  //get the canvas and canvas 2D context 
  this.homeWorldCanvas = document.getElementById("homeWorldCanvas");
  this.homeWorldContext = this.homeWorldCanvas.getContext("2d");
  this.homeWorldCursor = new Cursor(this.homeWorldCanvas, homeWorldClicked);


  this.frontierCanvas = document.getElementById("frontierCanvas");
  this.frontierContext = this.frontierCanvas.getContext("2d");
  this.frontierCursor = new Cursor(this.frontierCanvas, frontierClicked);

  this.fps = 60;
  this.running = true;
  this.map = new Map();
  this.player = new Player("PLAYER");
  this.selection = {
    type:"ally",
    unit: null
  }
}

//initialize the game
Game.prototype.start = function() {
  //setup an interval for the game loop to be called on TODO: untested
  setInterval(tick, this.fps);
  //tell the cursor to listen for events on this canvas 
  this.homeWorldCursor.listen(this.homeWorldCanvas);
  this.frontierCursor.listen(this.frontierCanvas);
 
  //TODO: test units
  var bryce = ChickenUnit();
  var james = PigUnit();
  // this.player.addUnit("frontier", lance);
  // this.player.addUnit("frontier", blake);
  // this.player.addUnit("frontier", bryce);
  this.player.addUnit("frontier", james);
  this.player.addUnit("homeWorld", bryce);
}

//draw the game
Game.prototype.draw = function() {

  //clear the canvases
  this.homeWorldContext.clearRect(0, 0, this.map.pixW, this.map.pixH);
  this.frontierContext.clearRect(0, 0, this.map.pixW, this.map.pixH);

  //draw the map
  this.map.drawGrid(this.homeWorldContext);
  this.map.drawGrid(this.frontierContext);

  //draw the player's units
  this.player.drawHomeWorldUnits(this.homeWorldContext);
  this.player.drawFrontierUnits(this.frontierContext);
 
  //draw the player
  this.player.drawPlayerHomeWorld(this.homeWorldContext);
  this.player.drawPlayerFrontier(this.frontierContext);
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

