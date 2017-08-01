import Game from "./game";
import GameView from "./game_view";
import Cat from './cat';


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("demoCanvas");
  // const ctx = canvasEl.getContext("2d");
  let stage = new createjs.Stage(canvasEl);
  //
  const game = new Game(stage);
  const gameView = new GameView(game, stage);
  gameView.beginGame();

  // let bgReady = false;
  // let bgImage = new Image();
  // bgImage.onload = function () {
  //   bgReady = true;
  //   ctx.drawImage(bgImage, 0, 0);
  // };

  // bgImage.src = "./assets/images/desert_BG.png";
  // const cat = new Cat();
  // cat.draw(ctx);
});

function render() {
  console.log("here");
  console.log("hi");
}

function main () {
  render();
  requestAnimationFrame(main);
}

let w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

 // main();

// var circle = new createjs.Shape();
// circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
// circle.x = 100;
// circle.y = 100;
// stage.addChild(circle);
// stage.update();
