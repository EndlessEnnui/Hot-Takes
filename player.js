class player {


constructor (xpos, ypos, speed, size, type) {
  this.xpos = xpos;
  this.ypos = ypos;
  this.speed = speed;
  this.size = size;
  this.type = type;
}
}

display() {
  jp = createSprite(this.xpos, this,ypos, this,speed, this.size)

  var myAnimation - jp.Animation('floating', 'assets/pot2.png', 'assets/pot1.png');

    jp.addAnimation('moving', 'assets/pot.png', 'assets/pot2.png');

    jp.frameDelay = 10
    drawSprites(this.xpos, this.ypos, this.size);
}

move(){
  if (this.type === 'jp') {
    switch (directionjp) {
      case 'right':
      this.xpos = this.xpos + this.speed;
      break;
      case 'left':
      this.xpos = this.xpos - this.speed;
      break;
      case 'up':
      this.ypos = this.ypos - this.speed;
      break;
      case 'down':
      this.ypos = this.ypos + this.speed;
      break;
    }
  }
}
bound(){
  if (this.type === 'jp') {
    if (this.xpos < 0)
       this.xpos = 0;
    if (this.ypos < 0)
      this.ypos = 0;
    if(this.xpos > SCENE_W)
      this.xpos = SCENE_W;
    if(this.xpos > SCENE_H);
      this.ypos = SCENE_H;
    }
}
