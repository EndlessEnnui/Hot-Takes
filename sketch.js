let playerjp;
let directionjp;

function preload(){
  sword = loadImage("assets/sword.png");
  jp0 = loadImage("assets/pot.png");
  jp1 = loadImage("assets/pot1.png");
  jp2 = loadImage("assets/pot2.png");
}
var SCENE_W = 1600;
var SCENE_H = 8000;
var jp;
var bg;
var frame;
var player;
function setup() {
  var canvas = createCanvas(800, 800);

  bg = new Group();
  playerjp = new player(400, 400, 3, 20, 'jp');

  for(var i=0; i<80; i++){
    var rock = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
    peppers.addAnimation('normal', 'assets/peppers'+i%3+'.png');
    bg.add(rock);
  }
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  playerjp.display();
  playerjp.move();
  playerjp.bound();

  camera.position.x = this.xpos;
  camera.position.y = this.ypos;

}

function keyReleased() {
  if (key == 'a') {
    if (directionD == 'left') {
    directionD = 'still';
    }
  } else if (key == 'd' ){
    if (directionD == 'right') {
    directionD = 'still';
  }
} else if (key == 's')
    if(directionD == 'down') {
    directionD = 'still'
  }
 else if (key == 'w'){
    if(directionD == 'up')
    directionD = 'still'
  }
}
