class Cat {
  constructor(stage){
    this.stage = stage;
    this.speed = 200;
    this.x = 200;
    this.y = 300;
  }

  draw() {
    let catImg = new createjs.Bitmap("./assets/images/cat1.png");
    catImg.x = this.x;
    catImg.y = this.y;
    this.stage.addChild(catImg);
 }
}

export default Cat;
