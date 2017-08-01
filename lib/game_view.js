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
     createjs.Ticker.setInterval(25);
     document.onkeydown = this.handleKeyPressed;
     createjs.Ticker.on('tick', (event) => {
         this.game.step(event.delta, this.stage);
         this.game.draw();
         this.stage.update();
     });
   }

}

export default GameView;
