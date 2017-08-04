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
    this.rightbg = new createjs.Bitmap("./assets/images/rightbg.png");
    this.orderBar = new createjs.Bitmap("./assets/images/orderBar.png");
    this.message = new createjs.Text("", "bold 40px Orbitron, serif", "black");
    this.cat = new Cat(this.stage);
    this.snacks = [];
    this.snackOrder = new createjs.Container();
    this.scores = new createjs.Container();
    this.rect = new createjs.Shape();
    this.over = 0;

    this.moveObjects = this.moveObjects.bind(this);
    this.step = this.step.bind(this);
    this.removeObjects = this.removeObjects.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.won = this.won.bind(this);
    this.displayMessage = this.displayMessage.bind(this);
    this.drawRect();
    this.addOrderBar();
    this.addOrder();
    this.addScores();
    this.addText();
    setInterval(this.addSnacks.bind(this), 1500);
    setInterval(this.addSnacks.bind(this), 3100);
    setInterval(this.addSnacks.bind(this), 510);
  }


  addSnacks(snack) {
    if (this.snacks.length < 20) {
      this.snacks.push(new movingObects(this.stage));
    }
  }

  displayMessage(result) {
    this.message.x = 270;
    this.message.y = 50;
    if (result) {
      this.message.text = "Hmmmm, Donuts..."
      this.stage.update();
    } else {
      this.message.text = "Try again, will ya?"
      this.stage.update();
    }
  }

  won() {
    return (this.snackOrder.numChildren === 0);
  }

  gameOver() {
    return (this.scores.numChildren === 0);
  }

  addText() {
    let text = new createjs.Text("Time Left :", "bold 20px Orbitron, serif", "black");
    text.x = 872;
    text.y = 220;
    this.stage.addChild(text);
  }

  addOrderBar() {
    this.orderBar.x = 815;
    this.orderBar.y = 80;
    this.orderBar.scaleX = 0.9;
    this.orderBar.scaleY = 0.9;
    this.stage.addChild(this.orderBar);
  }

  drawRect() {
    this.rightbg.x = 800;
    this.rightbg.y = 0;
    this.rightbg.scaleX = 0.9;
    this.rightbg.scaleY = 0.95;
    this.stage.addChild(this.rightbg);
  }

  addScores() {
    for (let i = 0; i < 3; i++) {
      let score = new createjs.Bitmap(`./assets/images/score.png`);
      score.x = 840 + (40*i);
      score.y = 290;
      score.scaleX = 0.6;
      score.scaleY = 0.6;
      this.scores.addChild(score);
    }
    this.stage.addChild(this.scores);
  }

  addOrder() {
    for (let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random()* 3 + 1);
      let order = new createjs.Bitmap(`./assets/images/sm-snack${num}.png`);
      order.name = `snack${num}`;
      order.x = 820;
      order.y = 230 - (25*i);
      order.scaleX = 0.7;
      order.scaleY = 0.7;
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
          this.snackOrder.removeChildAt(0);
          this.snackOrder.y = this.snackOrder.y + 25;
          this.happyCat();
          if (this.won()) {
            this.over = 1;
          }
        } else {
          this.snacks.splice(this.snacks[i], 1);
          this.scores.removeChildAt(this.scores.numChildren - 1);
          this.sadCat();
          if (this.gameOver()) {
            this.over = -1;
          }
        }
      }
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
    this.bg.x = this.bg.y = 0;
    this.stage.addChild(this.bg);
    this.stage.addChild(this.message);
    this.cat.draw();
    this.snacks.map((snack, idx) => {
      snack.draw();
    });
  }
}


export default Game;
