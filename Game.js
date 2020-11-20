class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountref = await database.ref("playerCount").once("value")
      if(playerCountref.exists()){
       playerCount=playerCountref.val()
       player.getCount();
      }

      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    textSize(20)
    text("Start!", 100, 120);
    player.getPlayerInfo();
    if(allPlayer!==undefined){
      for(var plr in allPlayers){
        if(plr==="player"+player.index){
         fill("red")
        }
      else{
        fill("0")
       }
      }
      var displayPosition = 130;
      displayPosition += 20;
      textSize(30)
      text(allPlayers[plr].name+":" + allPlayers[plr].distance,120,displayPosition);
    }

  }
  //if(keyIsDown(UP_ARROW) && player.index!== null){
    //player.distance+=50
    //player.update()
  //}
};
