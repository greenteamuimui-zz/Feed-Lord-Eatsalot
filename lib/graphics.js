import GameView from './game_view';

let catImg = new Image();
let snackImg= new Image();
let bgImg= new Image();


catImg.src = ("./assets/images/cat1.png");
catImg.name = 'cat';
catImg.onload = GameView.loadGfx(e, catImg);

snackImg.src = ("./assets/images/snack.png");
snackImg.name = 'movingObects';
snackImg.onload = GameView.loadGfx(e, snackImg);

bgImg.src = ("./assets/images/desert_BG.png");
bgImg.name = 'bg';
bgImg.onload = GameView.loadGfx(e, bgImg);

// function loadGfx(e) {
//   let bg;
//   let cat;
//   let snacks;
//   let gfxLoaded = 0;
//     if(e.target.name = 'bg'){bg = new createjs.Bitmap(bgImg);}
//     if(e.target.name = 'cat'){cat = new createjs.Bitmap(catImg);}
//     if(e.target.name = 'movingObects'){snacks = new createjs.Bitmap(snackImg);}
//
//     gfxLoaded++;
//
//     if(gfxLoaded === 3)
//     {
//       this.addGameObjects([bg,cat, snacks]);
//     }
// }
