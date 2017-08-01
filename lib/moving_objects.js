class movingObects {
  constructor(stage) {
    this.stage = stage;
    // this.speed = 100;
    this.x = Math.floor(Math.random()* (this.stage.canvas.width - 10)) + 10;
    this.y = 10;
    this.radius = 30;
  }

  draw() {
    let snackImg = new createjs.Bitmap("./assets/images/snack.png");
    snackImg.x = this.x;
    snackImg.y = this.y;
    snackImg.scaleX = 0.05;
    snackImg.scaleY = 0.05;
    this.stage.addChild(snackImg);
  }

  move(delta, stage) {
    let h = this.stage.canvas.height;
    // if (this.y >= h - 10) {
    //   stage.removeChild(this);
    // }
    if (this.y < h) {
      this.y = this.y + 20;
    }
  }

  isEatenBy(cat){
    let x = Math.abs(this.x - cat.x);
    let y = Math.abs(this.y - cat.y);
    if (x < 20 && y < 20) {
      return true;
    } else {
      return false;
    }
  }

}

export default movingObects;
