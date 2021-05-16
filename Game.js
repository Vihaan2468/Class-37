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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    textSize('28')
    text("Game Start",250,300)
    if(allPlayers !== undefined){
      var player_position = 130
      for(var i in AllPlayers){
        if(i==="players"+player.index)
        fill("red")
        else
        fill("black")
        player_position+=20
      }
    }
  }
}
