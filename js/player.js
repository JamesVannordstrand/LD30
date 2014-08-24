function Player(name) {
    this.name = name;
    this.homeWorldResources = 0;
    this.frontierResources = 0;
    this.homeWorldUnits = [];
    this.frontierUnits = [];
}

//draw player stats
Player.prototype.drawPlayer = function(context) {
  var message;

  message = this.name + "       Resources - " 
    + this.homeWorldResources +
    "                         Resources - " 
    + this.frontierResources;

  context.fillStyle = "red";
  context.font = "20px Georgia";
  return context.fillText(message, 240, 480);
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
      this.frontierUnits = this.frontierUnits.splice(index, 1);
    }
  }

  for(var i = 0; i < this.homeWorldUnits.length; i++){
    if(this.homeWorldUnits[i].hp <= 0){
      var index = this.homeWorldUnits.indexOf(homeWorldUnits[i]);
      this.homeWorldUnits = this.homeWorldUnits.splice(index, 1);
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