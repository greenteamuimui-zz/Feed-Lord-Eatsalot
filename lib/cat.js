class Cat {
  constructor(stage, bitMap){
    this.stage = stage;
    this.speed = 200;
    this.x = 200;
    this.y = 300;
    this.catImg = new createjs.Bitmap('./assets/images/cat1.png');
    this.radius = 100;
  }

  draw() {
    // let catImg = new createjs.Bitmap("./assets/images/cat1.png");
    this.catImg.x = this.x;
    this.catImg.y = this.y;
    this.stage.addChild(this.catImg);
 }
}

export default Cat;
