function Player(name) {
    this.name = name;
    this.homeWorldResources = 0;
    this.frontierResources = 0;
    this.homeWorldUnits = [];
    this.frontierUnits = [];
}

//draw player stats
Player.prototype.drawPlayerHomeWorld = function(context) {
  var message = "HomeWorld Resources - " 
    + this.homeWorldResources;
  
  context.textAlign = "center";
  context.fillStyle = "black";
  context.font = "20px Georgia";
  return context.fillText(message, 160, 480);
}

Player.prototype.drawPlayerFrontier = function(context) {
  var message = "Frontier Resources - " 
    + this.frontierResources;
  
  context.textAlign = "center";
  context.fillStyle = "black";
  context.font = "20px Georgia";
  return context.fillText(message, 160, 480);
}

//add a specific unit to player
Player.prototype.addUnit = function(planet, unit){ 
  if(planet == "frontier"){
    this.frontierUnits.push(unit);
  }else{
    this.homeWorldUnits.push(unit);
  }
}

//goes through all players units to check health and see if needs removed
Player.prototype.checkHealth = function(){ 
  for(var i = 0; i < this.frontierUnits.length; i++){
    if(this.frontierUnits[i].hp <= 0){
      var index = this.frontierUnits.indexOf(frontierUnits[i]);
      this.frontierUnits.splice(index, 1);
    }
  }

  for(var i = 0; i < this.homeWorldUnits.length; i++){
    if(this.homeWorldUnits[i].hp <= 0){
      var index = this.homeWorldUnits.indexOf(homeWorldUnits[i]);
      this.homeWorldUnits.splice(index, 1);
    } 
  }
}

//Add resources to player
Player.prototype.addResources = function(planet, amount){
  if(planet == "frontier"){
    this.frontierResources += amount;
  }else{
    this.homeWorldResources += amount;
  }  
} 

//draws all the players units 
Player.prototype.drawHomeWorldUnits = function(ctx){
  for(var i = 0; i < this.homeWorldUnits.length; ++i){
    this.homeWorldUnits[i].draw(ctx, true);
  }
}

Player.prototype.drawFrontierUnits = function(ctx){
  for(var i = 0; i < this.frontierUnits.length; ++i){
    this.frontierUnits[i].draw(ctx, true);
  }
}

//takes resources from one planet to the other 
transferResources = function(player, from){
  if(from == "frontier"){
    var amount = document.getElementById('frontierButton').value;
    player.addResources(from, -amount);
    player.addResources("homeWorld", amount);
  }else{
    var amount = document.getElementById('homeWorldButton').value;
    player.addResources(from, -amount);
    player.addResources("frontier", amount);
  }
}

buyUnitFrontier = function(player, type){
  if((type == "pig") && (player.frontierResources >= 40)){
    player.addUnit("frontier", new PigUnit("frontier"));
  }else if((type == "cow") && (player.frontierResources >= 60)){
    player.addUnit("frontier", new CowUnit("frontier"));
  }else if((type == "chicken") && (player.frontierResources >= 50)){
    player.addUnit("frontier", new ChickenUnit("frontier"));
  }
}

buyUnitHomeWorld = function(player, type){
  if((type == "pig") && (player.homeWorldResources >= 40)){
    player.addUnit("homeWorld", new PigUnit("homeWorld"));
  }else if((type == "cow") && (player.homeWorldResources >= 60)){
    player.addUnit("homeWorld", new CowUnit("homeWorld"));
  }else if((type == "chicken") && (player.homeWorldResources >= 50)){
    player.addUnit("homeWorld", new ChickenUnit("homeWorld"));
  }
}
