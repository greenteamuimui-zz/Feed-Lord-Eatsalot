class GameView {
  constructor(game, stage) {
     this.game = game;
     this.stage = stage;
     this.timer = new createjs.BitmapText();
     this.beginGame = this.beginGame.bind(this);
     this.handleKeyPressed = this.handleKeyPressed.bind(this);
     this.drawTimer = this.drawTimer.bind(this);
    //  this.gfxLoaded = [];
    //  this.loadGfx = this.loadGfx.bind(this);
    //  this.addGameObjects = this.addGameObjects.bind(this);
   }

   drawTimer() {
     console.log(this.timer);
     this.timer.text = "60";
     this.timer.y = 300;
     this.timer.x = 1100;
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



   beginGame() {
     createjs.Ticker.setInterval(10);
     document.onkeydown = this.handleKeyPressed;
     createjs.Ticker.on('tick', (event) => {
         this.game.step(event.delta, this.stage);
         this.game.draw();
         this.drawTimer();
        //  this.timer.text = `${60 - Math.floor(event.time/1000)}`;
         this.stage.update();
         if (this.game.over === true) {
           event.remove();
         }
     });
   }

}

export default GameView;
