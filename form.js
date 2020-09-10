class Form{

constructor(){
    this.name=createElement('h2');
    this.input=createInput("name");
    this.button=createButton("start");
}

display(){
    this.name.html("saraogi uniforms designing");
    this.name.position(300,30,70,70);
    this.input.position(300,100,50,50);
    this.button.position(300,150,50,50);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
       
      });
}




}