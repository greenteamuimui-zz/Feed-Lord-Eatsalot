class Cat {
  constructor(stage){
    this.stage = stage;
    this.speed = 200;
    this.x = 200;
    this.y = 100;
  }

  draw() {
    let catimg = new createjs.Bitmap("./assets/images/cat1.png");
    catimg.x = this.x;
    catimg.y = this.y;
    this.stage.addChild(catimg);
 }
}

export default Cat;
