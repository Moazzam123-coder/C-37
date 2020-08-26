class Game{
    constructor()
    {

    }
    getState()
    {
    var gameStateref = database.ref("gameState");
    gameStateref.on("value",function(data)
    {
    gameState = data.val()

    })
    }
    update(state)
    {
    database.ref("/").update
    ({
    gameState:state
    })
    }
    async start()
    {
        if(gameState===0){
    player = new Player();
    var playerCountref = await database.ref("playerCount").once("value");
    if(playerCountref.exists())
    {
        playerCount = playerCountref.val()
    
    player.getCount();
    }
    form = new Form();
    form.display();
    }
    car1 = createSprite(200,200);
    car2 = createSprite(400,200);
    car3 = createSprite(600,200);
    car4 = createSprite(800,200);
    cars = [car1,car2,car3,car4];
}
play()
{
form.hide();
text("GAME START",120,100);
Player.getplayerinfo();
if(Allplayers!==undefined){
   // var displayPosition = 130;
   var x = 0;
   var y;
   var index = 0;
    for(var plr in Allplayers){
        index = index+1;
        x = x+200;
        y = displayHeight - Allplayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(index ===  player.index)
        {
            cars[index-1].shapeColor = "red";
            Camera.position.x = displayWidth/2;
            Camera.position.y = cars[index-1].y;
        }
       
        //displayPosition +=20;
        //text(Allplayers[plr].name+":"+Allplayers[plr].distance,120,displayPosition);
    }
}

if(keyIsDown(UP_ARROW)&& player.index!==null){
player.distance+=50;
player.update();
}
drawSprites();
}
}