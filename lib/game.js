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
    this.scores = new createjs.Container();
    this.rect = new createjs.Shape();

    this.moveObjects = this.moveObjects.bind(this);
    this.step = this.step.bind(this);
    this.removeObjects = this.removeObjects.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.drawRect();
    this.addOrder();
    this.addScores();
    this.addText();
    setInterval(this.addSnacks.bind(this), 1500);
    setInterval(this.addSnacks.bind(this), 3100);
  }

  addSnacks(snack) {
    if (this.snacks.length < 20) {
      this.snacks.push(new movingObects(this.stage));
    }
  }

  addText() {
    let text = new createjs.Text("hi", "20px Arial", "black");
    text.x = 800;
    text.y = 100;
    this.stage.addChild(text);
  }

  drawRect() {
    this.rect.graphics.beginFill('grey');
    this.rect.graphics.drawRect(800, 0, 150, 400);
    this.rect.graphics.endFill();
    this.stage.addChild(this.rect);
  }

  addScores() {
    for (let i = 0; i < 3; i++) {
      let score = new createjs.Bitmap(`./assets/images/score.png`);
      score.x = 820 + (25*i);
      score.y = 350;
      score.scaleX = 0.5;
      score.scaleY = 0.5;
      this.scores.addChild(score);
    }
    this.stage.addChild(this.scores);
  }

  addOrder() {
    for (let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random()* 3 + 1);
      let order = new createjs.Bitmap(`./assets/images/sm-snack${num}.png`);
      order.name = `snack${num}`;
      order.x = 850;
      order.y = 250 - (20*i);
      order.scaleX = 0.5;
      order.scaleY = 0.5;
      this.snackOrder.addChild(order);
    }
    this.stage.addChild(this.snackOrder);
  }

  normalCat() {
    this.cat.catImg.image.src = `./assets/images/cat1.png`;
    // this.stage.update();
  }

  happyCat() {
    this.cat.catImg.image.src = `./assets/images/cat3.png`;
    // this.stage.update();
    setTimeout(this.normalCat.bind(this), 2000);
  }

  sadCat() {
    this.cat.catImg.image.src = `./assets/images/cat2.png`;
    // this.stage.update();
    setTimeout(this.normalCat.bind(this), 2000);
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
          // this.stage.update();
          this.happyCat();
        } else {
          this.snacks.splice(this.snacks[i], 1);
          this.scores.removeChildAt(this.scores.numChildren - 1);
          // this.stage.update();
          this.sadCat();
        }
      }
      // this.stage.update();
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
  const w = this.stage.canvas.width - 150;
   switch(event.keyCode) {
     case KEYCODE_LEFT:
     if (this.cat.x < 60) {
         this.cat.x = 30;
       } else {
         this.cat.x -= 30;
       }
       break;
     case KEYCODE_RIGHT:
     if (this.cat.x >= 650) {
       this.cat.x = 700;
     } else {
       this.cat.x += 30;
     }
       break;
   }
  //  this.stage.update();
 }

  draw() {
    // let bg = new createjs.Bitmap("./assets/images/desert_BG.png");
    // bg.x = bg.y = 10;
    this.bg.x = this.bg.y = 0;
    this.stage.addChild(this.bg);
    this.cat.draw();
    this.snacks.map((snack, idx) => {
      snack.draw();
    });
  }
}


export default Game;
