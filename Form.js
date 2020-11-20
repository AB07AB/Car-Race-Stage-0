class Form {
  constructor() {
    this.input=createInput("Name")
    this.button=createButton("Rayo Mcqueen")
    this.greeting=createElement("h2")
  }

  hide(){
   this.greeting.hide()
   this.button.hide()
   this.input.hide()
  }


  display(){
    var title = createElement('h2')
    title.html("Best Car Racing Game");
    title.position(100, 0);
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      this.greeting.html("Bonjour! " + player.name )
      this.greeting.position(100, 160)
    });

  }
}
