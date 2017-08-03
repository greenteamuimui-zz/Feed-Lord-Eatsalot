import Game from "./game";
import GameView from "./game_view";
import Cat from './cat';

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("demoCanvas");
  $('#start-button').on('click', (event) => {
   let stage = new createjs.Stage(canvasEl);
   let game = new Game(stage);
   let gameView1 = new GameView(game, stage);
   $('#myModal').css("visibility", "hidden");
   gameView1.beginGame();
  });

  $('#restart-button').on('click', (event) => {
   let stage = new createjs.Stage(canvasEl);
   let game = new Game(stage);
   let gameView1 = new GameView(game, stage);
   gameView1.beginGame();
  });

});
