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
    this.snackOrder = new createjs.Container();
    this.moveObjects = this.moveObjects.bind(this);
    this.step = this.step.bind(this);
    this.removeObjects = this.removeObjects.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    // setInterval(this.addSnacks.bind(this), 4000);
  }

  addCat(){
    this.cat = new Cat(this.stage);
  }

  addSnacks(snack) {
    if (this.snacks.length < 10) {
      this.snacks.push(new movingObects(this.stage));
    }
  }

  addorder() {
    if (this.snackOrder.numChildren < 5) {
      for (let i = 0; i < 5; i++) {
        let order = new createjs.Bitmap("./assets/images/snack2.png");
        order.x = 850;
        order.y = 350 - (20*i);
        order.scaleX = 0.05;
        order.scaleY = 0.05;
        this.snackOrder.addChild(order);
        console.log(this.snackOrder.numChildren);
      }
    }
    this.stage.addChild(this.snackOrder);
  }

  step(delta, stage){
    this.moveObjects(delta, stage);
    this.removeObjects();
    this.checkCollisions();
  }

  moveObjects(delta, stage){
    this.snacks.forEach(snack => {
      snack.move(delta, stage);
    });
  }

  checkCollisions() {
    for (let i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].isEatenBy(this.cat)) {
        console.log("eat");
        this.snackOrder.removeChildAt(0);
        console.log(this.snackOrder);
        this.stage.update();
      }
    }
  }

  removeObjects () {
    let h = this.stage.canvas.height;
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].y > h - 20) {
        this.stage.removeChild(this.snacks[i]);
      }
    }
  }

  keyPressed(event) {
   switch(event.keyCode) {
     case KEYCODE_LEFT:
       this.cat.x -= 10;
       break;
     case KEYCODE_RIGHT:
       this.cat.x += 10;
       break;
   }
   this.stage.update();
 }

  draw() {
    let bg = new createjs.Bitmap("./assets/images/desert_BG.png");
    bg.x = bg.y = 10;
    // this.stage.addChild(bg);
    this.addorder();
    this.cat.draw();
    this.snacks.map((snack, idx) => {
      snack.draw();
    });
  }
}


export default Game;
