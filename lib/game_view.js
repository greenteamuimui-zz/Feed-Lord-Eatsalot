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
     this.loadMusic = this.loadMusic.bind(this);
     this.playMusic = this.playMusic.bind(this);
     this.music = {};
     this.loadMusic();
     $('#mute-button').on('click', (event) => {
       if (this.music._paused) {
          this.music.resume();
        } else {
          this.music.pause();
        }
     });
   }

   drawTimer() {
     this.timer.y = 250;
     this.timer.x = 890;
     this.stage.addChild(this.timer);
  }

   handleKeyPressed(e) {
     this.game.keyPressed(e);
   }

   loadMusic() {
     createjs.Sound.alternateExtensions = ["mp3"];
     createjs.Sound.addEventListener("fileload", this.playMusic);
     createjs.Sound.registerSound({id:"mySound", src:"./assets/song.mp3"});
   }

   playMusic(event) {
    this.music = createjs.Sound.play(event.src, {loop:-1});
   }

  startGame(event){
    this.game.step(event.delta, this.stage);
    this.game.draw();
    this.drawTimer();
    this.timer.text = `${60 - Math.floor(event.runTime/1000)} Sec`;
    this.stage.update();
    if (this.game.over === -1 || (60 - Math.floor(event.runtime/1000)) === 0) {
      this.game.displayMessage(false);
      createjs.Sound.removeSound("mySound");
      event.remove();
    } else if (this.game.over === 1){
      this.game.displayMessage(true);
      createjs.Sound.removeSound("mySound");
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
