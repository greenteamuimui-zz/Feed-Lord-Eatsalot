/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Cat);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cat__ = __webpack_require__(0);




document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("demoCanvas");
  $('#start-button').on('click', (event) => {
   let stage = new createjs.Stage(canvasEl);
   let game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](stage);
   let gameView1 = new __WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */](game, stage);
   $('#myModal').css("visibility", "hidden");
   gameView1.beginGame();
  });

  $('#restart-button').on('click', (event) => {
   let stage = new createjs.Stage(canvasEl);
   let game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](stage);
   let gameView1 = new __WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */](game, stage);
   gameView1.beginGame();
  });


});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cat__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moving_objects__ = __webpack_require__(3);



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
    this.cat = new __WEBPACK_IMPORTED_MODULE_0__cat__["a" /* default */](this.stage);
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
    setInterval(this.addSnacks.bind(this), 510);
  }


  addSnacks(snack) {
    if (this.snacks.length < 20) {
      this.snacks.push(new __WEBPACK_IMPORTED_MODULE_1__moving_objects__["a" /* default */](this.stage));
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
    text.y = 170;
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
    setTimeout(this.normalCat.bind(this), 2000);
  }

  sadCat() {
    this.cat.catImg.image.src = `./assets/images/cat2.png`;
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
         this.cat.x -= 50;
       }
       break;
     case KEYCODE_RIGHT:
     if (this.cat.x >= 650) {
       this.cat.x = 700;
     } else {
       this.cat.x += 50;
     }
       break;
   }
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


/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      this.y = this.y + 2;
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

/* harmony default export */ __webpack_exports__["a"] = (movingObects);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameView {
  constructor(game, stage) {
     this.game = game;
     this.stage = stage;
     this.timer = new createjs.Text("Time: 60 Sec", "bold 20px Orbitron, serif", "black");
     this.beginGame = this.beginGame.bind(this);
     this.startGame = this.startGame.bind(this);
     this.handleKeyPressed = this.handleKeyPressed.bind(this);
     this.message = new createjs.Text("hi", "bold 20px Orbitron, serif", "black")
     this.drawTimer = this.drawTimer.bind(this);
    //  this.loadMusic = this.loadMusic.bind(this);
    //  this.playMusic = this.playMusic.bind(this);
    //  this.music = {};
    //  this.loadMusic();
     $('#mute-button').on('click', (event) => {
       if (this.music._paused) {
          this.music.resume();
        } else {
          this.music.pause();
        }
     });
   }

   drawTimer() {
     this.timer.y = 200;
     this.timer.x = 890;
     this.stage.addChild(this.timer);
  }

   handleKeyPressed(e) {
     this.game.keyPressed(e);
   }

  //  loadMusic() {
  //    createjs.Sound.alternateExtensions = ["mp3"];
  //    createjs.Sound.addEventListener("fileload", this.playMusic);
  //    createjs.Sound.registerSound({id:"mySound", src:"./assets/song.mp3"});
  //  }

  //  playMusic(event) {
  //   this.music = createjs.Sound.play(event.src, {loop:-1});
  //  }

  startGame(event){
    this.game.step(event.delta, this.stage);
    this.game.draw();
    this.drawTimer();
    this.timer.text = `${60 - Math.floor(event.runTime/1000)} Sec`;
    this.stage.update();
    if (this.game.over === -1 || (60 - Math.floor(event.runtime/1000)) === 0) {
      this.game.displayMessage(false);
      // createjs.Sound.removeSound("mySound");
      event.remove();
    } else if (this.game.over === 1){
      this.game.displayMessage(true);
      // createjs.Sound.removeSound("mySound");
      event.remove();
    }
  }

   beginGame() {
     createjs.Ticker.setInterval(5);
     document.onkeydown = this.handleKeyPressed;
     createjs.Ticker.reset();
     createjs.Ticker.on('tick', this.startGame);
   }
}

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ })
/******/ ]);