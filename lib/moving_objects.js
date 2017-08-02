class movingObects {
  constructor(stage) {
    this.stage = stage;
    this.num = Math.floor(Math.random()* 3 + 1);
    this.snackImg = new createjs.Bitmap(`./assets/images/sm-snack${this.num}.png`);
    this.x = Math.floor(Math.random()* (this.stage.canvas.width - 300 - 10)) + 10;
    this.y = 10;
    this.radius = 50;
    this.name = `snack${this.num}`;
  }

  draw() {
    // let snackImg = new createjs.Bitmap("./assets/images/snack.png");
    this.snackImg.name = this.name;
    this.snackImg.x = this.x;
    this.snackImg.y = this.y;
    this.snackImg.scaleX = 0.5;
    this.snackImg.scaleY = 0.5;
    this.stage.addChild(this.snackImg);
  }

  move(delta, stage) {
    let h = stage.canvas.height;
    if (this.y < h) {
      this.y = this.y + 5;
      // stage.update();
    }
  }

  isEatenBy(cat){
    let x = Math.abs(this.x - cat.x);
    let y = Math.abs(this.y - cat.y);
    if (x < 50 && y < 50) {
      return true;
    } else {
      return false;
    }
  }

}

export default movingObects;
