class GameView {
  constructor(game, stage) {
     this.game = game;
     this.stage = stage;
     this.beginGame = this.beginGame.bind(this);
     this.handleKeyPressed = this.handleKeyPressed.bind(this);
   }

   handleKeyPressed(e) {
     this.game.keyPressed(e);
   }

   beginGame() {
     createjs.Ticker.setInterval(60);
     document.onkeydown = this.handleKeyPressed;
     createjs.Ticker.on('tick', (event) => {
        //  this.game.step(event.delta, mousePos);
         this.game.draw();
         this.stage.update();
     });
   }

}

export default GameView;
