import Cat from './cat';
import movingObects from './moving_objects';

const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const KEYCODE_UP = 38;
const KEYCODE_DOWN = 40;

class Game {
  constructor(stage){
    this.stage = stage;
    this.bg = new createjs.Bitmap("./assets/images/desert_BG.png");
    this.cat = new Cat(this.stage);
    this.snacks = [];
    this.snackOrder = new createjs.Container();

    this.moveObjects = this.moveObjects.bind(this);
    this.step = this.step.bind(this);
    this.removeObjects = this.removeObjects.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.addorder();
    setInterval(this.addSnacks.bind(this), 4000);
  }

  addSnacks(snack) {
    if (this.snacks.length < 20) {
      this.snacks.push(new movingObects(this.stage));
    }
  }

  addorder() {
    for (let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random()* 3 + 1);
      let order = new createjs.Bitmap(`./assets/images/sm-snack${num}.png`);
      order.name = `snack${num}`;
      order.x = 850;
      order.y = 350 - (20*i);
      order.scaleX = 0.5;
      order.scaleY = 0.5;
      this.snackOrder.addChild(order);
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
        if (this.snacks[i].name === this.snackOrder.children[0].name) {
          this.snacks.splice(this.snacks[i], 1);
          this.snackOrder.removeChildAt(this.snackOrder.numChildren - 1);
          this.snackOrder.y = this.snackOrder.y + 5;
          this.stage.update();
        } else {
          this.snacks.splice(this.snacks[i], 1);
          this.stage.update();
        }
      }
      this.stage.update();
    }
  }

  removeObjects () {
    let h = this.stage.canvas.height;
    for (let i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].y > h - 20) {
        this.snacks.splice(this.snacks[i], 1);
        this.stage.removeChild(this.snacks[i]);
      }
    }
  }

  keyPressed(event) {
   switch(event.keyCode) {
     case KEYCODE_LEFT:
       this.cat.x -= 30;
       break;
     case KEYCODE_RIGHT:
       this.cat.x += 30;
       break;
   }
   this.stage.update();
 }

  draw() {
    // let bg = new createjs.Bitmap("./assets/images/desert_BG.png");
    // bg.x = bg.y = 10;
    this.bg.x = this.bg.y = 10;
    this.stage.addChild(this.bg);
    this.cat.draw();
    this.snacks.map((snack, idx) => {
      snack.draw();
    });
  }
}


export default Game;
