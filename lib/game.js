import Cat from './cat';
import movingObects from './moving_objects';

const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const KEYCODE_UP = 38;
const KEYCODE_DOWN = 40;

class Game {
  constructor(stage){
    this.stage = stage;
    this.cat = {};
    this.addCat();
    this.snacks = [];
    setInterval(this.addSnacks.bind(this), 4000);
    this.moveObjects = this.moveObjects.bind(this);
    this.step = this.step.bind(this);
  }

  addCat(){
    this.cat = new Cat(this.stage);
  }

  addSnacks(snack) {
    this.snacks.push(new movingObects(this.stage));
  }

  step(delta, stage){
    this.moveObjects(delta, stage);
  }

  moveObjects(delta, stage){
    this.snacks.forEach(snack => {
      snack.move(delta, stage);
    });
  }

  keyPressed(event) {
   switch(event.keyCode) {
     case KEYCODE_LEFT:
       this.cat.x -= 3;
       break;
     case KEYCODE_RIGHT:
       this.cat.x += 3;
       break;
   }
   this.stage.update();
 }

  draw() {
    let bg = new createjs.Bitmap("./assets/images/desert_BG.png");
    bg.x = bg.y = 10;
    this.stage.addChild(bg);
    this.cat.draw();
    this.snacks.map((snack, idx) => {
      snack.draw();
    });
  }
}


export default Game;
