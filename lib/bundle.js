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




// function dummy(image, gameView) {
//   return (e) => {
//     gameView.loadGfx(e, image);
//   };
// }

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("demoCanvas");
  let stage = new createjs.Stage(canvasEl);
  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](stage);
  const gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */](game, stage);
  // let catImg = new Image();
  // let bgImage = new Image();
  // bgImage.src = "./assets/images/desert_BG.png";
  // catImg.src = ("./assets/images/cat1.png");
  // bgImage.name = 'bg';
  // catImg.name = 'cat';
  // bgImage.onload = gameView.loadGfx(bgImage);
  // catImg.onload = gameView.loadGfx(catImg);
  setTimeout(gameView.beginGame, 3000);

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
    this.cat = new __WEBPACK_IMPORTED_MODULE_0__cat__["a" /* default */](this.stage);
    this.snacks = [];
    this.snackOrder = new createjs.Container();

    this.moveObjects = this.moveObjects.bind(this);
    this.step = this.step.bind(this);
    this.removeObjects = this.removeObjects.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.addorder();
    setInterval(this.addSnacks.bind(this), 4000);
  }

  addSnacks(snack) {
    if (this.snacks.length < 20) {
      this.snacks.push(new __WEBPACK_IMPORTED_MODULE_1__moving_objects__["a" /* default */](this.stage));
    }
  }

  addorder() {
    for (let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random()* 3 + 1);
      let order = new createjs.Bitmap(`./assets/images/sm-snack${num}.png`);
      order.name = `snack${num}`;
      order.x = 850;
      order.y = 350 - (20*i);
      order.scaleX = 0.5;
      order.scaleY = 0.5;
      this.snackOrder.addChild(order);
    }
    this.stage.addChild(this.snackOrder);
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
          this.snackOrder.removeChildAt(this.snackOrder.numChildren - 1);
          this.snackOrder.y = this.snackOrder.y + 5;
          this.stage.update();
        } else {
          this.snacks.splice(this.snacks[i], 1);
          this.stage.update();
        }
      }
      this.stage.update();
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
   switch(event.keyCode) {
     case KEYCODE_LEFT:
       this.cat.x -= 30;
       break;
     case KEYCODE_RIGHT:
       this.cat.x += 30;
       break;
   }
   this.stage.update();
 }

  draw() {
    // let bg = new createjs.Bitmap("./assets/images/desert_BG.png");
    // bg.x = bg.y = 10;
    this.bg.x = this.bg.y = 10;
    this.stage.addChild(this.bg);
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
    this.x = Math.floor(Math.random()* (this.stage.canvas.width - 150 - 10)) + 10;
    this.y = 10;
    this.radius = 50;
    this.name = `snack${this.num}`;
  }

  draw() {
    // let snackImg = new createjs.Bitmap("./assets/images/snack.png");
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
      this.y = this.y + 5;
      // stage.update();
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
     this.beginGame = this.beginGame.bind(this);
     this.handleKeyPressed = this.handleKeyPressed.bind(this);
    //  this.gfxLoaded = [];
    //  this.loadGfx = this.loadGfx.bind(this);
    //  this.addGameObjects = this.addGameObjects.bind(this);
   }

  //  loadGfx(img) {
  //    return (e) => {
  //     let child;
  //     child = new createjs.Bitmap(img.src);
  //     child.name = img.name;
  //     this.gfxLoaded.push(child);
  //     if (this.gfxLoaded.length  === 2) {
  //       this.addGameObjects(this.gfxLoaded);
  //     }
  //   };
  // }

   handleKeyPressed(e) {
     this.game.keyPressed(e);
   }

  //  addGameObjects(objects){
  //    let arr = [];
  //    for (var i = 0; i < objects.length; i++) {
  //      if (objects[i].name === 'cat') {
  //        objects[i].x = 200;
  //        objects[i].y = 300;
  //        arr.push(objects[i]);
  //      }
  //      if (objects[i].name === 'bg') {
  //        objects[i].y = 0;
  //        objects[i].x = 0;
  //        this.stage.addChild(objects[i])
  //      }
  //    }
  //    this.stage.addChild(...arr);
  //  }



   beginGame() {
     createjs.Ticker.setInterval(10);
     document.onkeydown = this.handleKeyPressed;
     createjs.Ticker.on('tick', (event) => {
         this.game.step(event.delta, this.stage);
         this.game.draw();
         this.stage.update();
     });
   }

}

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ })
/******/ ]);