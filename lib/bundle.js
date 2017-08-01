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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cat__ = __webpack_require__(3);





document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("demoCanvas");
  // const ctx = canvasEl.getContext("2d");
  let stage = new createjs.Stage(canvasEl);
  //
  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](stage);
  const gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */](game, stage);
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameView {
  constructor(game, stage) {
     this.game = game;
     this.stage = stage;
     this.beginGame = this.beginGame.bind(this);
     this.handleKeyPressed = this.handleKeyPressed.bind(this);
   }

   handleKeyPressed(e) {
     this.game.keyPressed(e);
   }

   beginGame() {
     createjs.Ticker.setInterval(25);
     document.onkeydown = this.handleKeyPressed;
     createjs.Ticker.on('tick', (event) => {
         this.game.step(event.delta, this.stage);
         this.game.draw();
         this.stage.update();
     });
   }

}

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cat__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moving_objects__ = __webpack_require__(4);



const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const KEYCODE_UP = 38;
const KEYCODE_DOWN = 40;

class Game {
  constructor(stage){
    this.stage = stage;
    this.cat = {};
    this.addCat();
    this.snacks = [];
    setInterval(this.addSnacks.bind(this), 4000);
    this.moveObjects = this.moveObjects.bind(this);
    this.step = this.step.bind(this);
  }

  addCat(){
    this.cat = new __WEBPACK_IMPORTED_MODULE_0__cat__["a" /* default */](this.stage);
  }

  addSnacks(snack) {
    this.snacks.push(new __WEBPACK_IMPORTED_MODULE_1__moving_objects__["a" /* default */](this.stage));
  }

  step(delta, stage){
    this.moveObjects(delta, stage);
  }

  moveObjects(delta, stage){
    this.snacks.forEach(snack => {
      snack.move(delta, stage);
    });
  }

  keyPressed(event) {
   switch(event.keyCode) {
     case KEYCODE_LEFT:
       this.cat.x -= 3;
       break;
     case KEYCODE_RIGHT:
       this.cat.x += 3;
       break;
   }
   this.stage.update();
 }

  draw() {
    let bg = new createjs.Bitmap("./assets/images/desert_BG.png");
    bg.x = bg.y = 10;
    this.stage.addChild(bg);
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

/* harmony default export */ __webpack_exports__["a"] = (Cat);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (movingObects);


/***/ })
/******/ ]);