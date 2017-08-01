import Cat from './cat';

const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const KEYCODE_UP = 38;
const KEYCODE_DOWN = 40;

class Game {
  constructor(stage){
    this.stage = stage;
    this.cat = {};
    this.addCat();
  }

  addCat(){
    this.cat = new Cat(this.stage);
  }

  keyPressed(event) {
    console.log(event);
   switch(event.keyCode) {
     case KEYCODE_LEFT:
       this.cat.x -= 1;
       break;
     case KEYCODE_RIGHT:
       this.cat.x += 1;
       break;
   }
   this.stage.update();
 }

  draw() {
    let bg = new createjs.Bitmap("./assets/images/desert_BG.png");
    bg.x = bg.y = 10;
    this.stage.addChild(bg);
    this.cat.draw();
  }



}


export default Game;
