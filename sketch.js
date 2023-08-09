let character;
let grass;
let enemy;
let princess;

let size = 64;
let moveX = 0;
let moveY = 0;

function setup() {
  createCanvas(576, 576);
  character = loadImage('character.png');
  grass = loadImage('grass.png');
  enemy = loadImage('enemy.png');
  princess = loadImage('princess.png');
}

function draw() {
  background(220);
  
  if (moveX < 0){
    moveX = 0;
  }
  if (moveY < 0){
    moveY = 0;
  }
  
  if (moveX > size * 8){
    moveX = size * 8;
  }
  
  if (moveY > size * 8){
    moveY = size * 8;
  }
  
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      image(grass, x * size, y * size, size, size);
    }
  }
  
  image(enemy, 128, 192, size, size);
  image(enemy, 384, 128, size, size);
  image(enemy, 320, 384, size, size);
  image(enemy, 64, 448, size, size);
  image(enemy, 192, 64, size, size);
  image(enemy, 448, 320, size, size);
  image(character, moveX, moveY, size, size);
  image(princess, 512, 512, 80, 80); 
  
  if (moveX === size * 8 && moveY === size * 8) {
    rect(160, 160, 256, 256);
    textSize(35);
    text('VICTORY', 210, 300);
    button = createButton('RESTART');
    button.mousePressed(reset);
    noLoop();
  }
  
  if (moveX === 128 && moveY === 192 ||
      moveX === 384 && moveY === 128 ||
      moveX === 320 && moveY === 384 ||
      moveX === 64 && moveY === 448 ||
      moveX === 192 && moveY === 64 ||
      moveX === 448 && moveY === 320) {
    rect(160, 160, 256, 256);
    textSize(35);
    text('DEFEAT', 225, 300);
    button = createButton('RESTART');
    button.mousePressed(reset);
    noLoop();
  }
}

function reset() {
  moveX = 0;
  moveY = 0;
  button.remove();
  loop();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)){
    moveY -= 64;
  }
  if (keyIsDown(DOWN_ARROW)){
    moveY += 64;
  }
  if (keyIsDown(LEFT_ARROW)){
    moveX -= 64;
  }
  if (keyIsDown(RIGHT_ARROW)){
    moveX += 64;
  }
}
