class GameView {
  constructor(game, stage) {
     this.game = game;
     this.stage = stage;
     this.timer = new createjs.Text("Time: 60 Sec", "bold 20px Orbitron, serif", "black");
     this.beginGame = this.beginGame.bind(this);
     this.startGame = this.startGame.bind(this);
     this.handleKeyPressed = this.handleKeyPressed.bind(this);
     this.message = new createjs.Text("hi", "bold 20px Orbitron, serif", "black")
     this.drawTimer = this.drawTimer.bind(this);
    //  this.displayMessage = this.displayMessage.bind(this);

   }

   drawTimer() {
     this.timer.y = 250;
     this.timer.x = 890;
     this.stage.addChild(this.timer);
  }

  //  loadGfx(img) {
  //    return (e) => {
  //     let child;
  //     child = new createjs.Bitmap(img.src);
  //     child.name = img.name;
  //     this.gfxLoaded.push(child);
  //     if (this.gfxLoaded.length  === 2) {
  //       this.addGameObjects(this.gfxLoaded);
  //     }
  //   };
  // }

   handleKeyPressed(e) {
     this.game.keyPressed(e);
   }

  //  addGameObjects(objects){
  //    let arr = [];
  //    for (var i = 0; i < objects.length; i++) {
  //      if (objects[i].name === 'cat') {
  //        objects[i].x = 200;
  //        objects[i].y = 300;
  //        arr.push(objects[i]);
  //      }
  //      if (objects[i].name === 'bg') {
  //        objects[i].y = 0;
  //        objects[i].x = 0;
  //        this.stage.addChild(objects[i])
  //      }
  //    }
  //    this.stage.addChild(...arr);
  //  }

  startGame(event){
    this.game.step(event.delta, this.stage);
    this.game.draw();
    this.drawTimer();
    this.timer.text = `${60 - Math.floor(event.runTime/1000)} Sec`;
    this.stage.update();
    if (this.game.over === -1 || (60 - Math.floor(event.runtime/1000)) === 0) {
      this.game.displayMessage(false);
      event.remove();
    } else if (this.game.over === 1){
      this.game.displayMessage(true);
      event.remove();
    }
  }

   beginGame() {
     createjs.Ticker.setInterval(5);
     document.onkeydown = this.handleKeyPressed;
     createjs.Ticker.reset();
     createjs.Ticker.on('tick', this.startGame);
   }

}

export default GameView;
