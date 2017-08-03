import Game from "./game";
import GameView from "./game_view";
import Cat from './cat';

// function dummy(image, gameView) {
//   return (e) => {
//     gameView.loadGfx(e, image);
//   };
// }

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("demoCanvas");
  let stage = new createjs.Stage(canvasEl);
  const game = new Game(stage);
  const gameView = new GameView(game, stage);
  setTimeout(gameView.beginGame, 3000);

});

// function render() {
//   console.log("hi");
// }
//
// function main () {
//   render();
//   requestAnimationFrame(main);
// }
//
// let w = window;
// requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

 // main();

// var circle = new createjs.Shape();
// circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
// circle.x = 100;
// circle.y = 100;
// stage.addChild(circle);
// stage.update();
