class movingObects {
  constructor(stage) {
    this.stage = stage;
    // this.speed = 100;
    this.x = Math.floor(Math.random()* (this.stage.canvas.width - 10)) + 10;
    this.y = 10;
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
    console.log(h);
    if (this.y >= h - 20) {
      stage.removeChild(movingObects);
    }
    else if (this.y < h) {
      this.y = this.y + 10;
    }
  }

}

export default movingObects;
