class GameView {
  constructor(game, stage) {
     this.game = game;
     this.stage = stage;
     this.timer = new createjs.Text("60 Sec", "20px Arial", "black");
     this.beginGame = this.beginGame.bind(this);
     this.startGame = this.startGame.bind(this);
     this.handleKeyPressed = this.handleKeyPressed.bind(this);
     this.drawTimer = this.drawTimer.bind(this);

   }

   drawTimer() {
     this.timer.y = 200;
     this.timer.x = 870;
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
      event.remove();
      $('#losingModal').css("visibility", "visible");
    } else if (this.game.over === 1){
      event.remove();
      $('#winningModal').css("visibility", "visible");
    }
  }

   beginGame() {
     createjs.Ticker.setInterval(10);
     document.onkeydown = this.handleKeyPressed;
     createjs.Ticker.reset();
     createjs.Ticker.on('tick', this.startGame);
   }

}

export default GameView;
