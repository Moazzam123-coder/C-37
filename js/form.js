class Form{
constructor(){
    this.title = createElement("h2");
    this.input = createInput("name");
    this.button = createButton("Play");
    this.greeting = createElement("h3");
}
hide()
{
  this.title.hide();
  this.input.hide();
  this.button.hide();
  this.greeting.hide();
}
display()
{
   
    this.title.html("CAR RACING GAME");
    this.title.position(displayWidth/2-70,0);

    
    this.input.position(displayWidth/2-70,displayHeight/2-20);
    this.button.position(displayWidth/2+40,displayHeight/2);
    this.button.mousePressed(()=>
    {
        this.input.hide()
        this.button.hide()
    player.name = this.input.value()
    playerCount++
    player.index = playerCount;
    player.update()
    player.updateCount(playerCount)
    this.greeting.html("HELLO "+player.name)
    this.greeting.position(displayWidth/2-70,displayHeight/2)
    })
}


}