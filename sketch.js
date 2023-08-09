let person;
let grass;

let size = 64;

let moveX = 0;
let moveY = 0;

let button;

function setup() {
  createCanvas(576, 576);
  person = loadImage('person.png');
  grass = loadImage('grass.png');
}

function draw() {
  background(220);
  
  if (moveX < 0) {
    moveX = 0;
  }
  
  if (moveY < 0) {
    moveY = 0;
  }
  
  if (moveX > size * 8) {
    moveX = size * 8;
  }
  
  if (moveY > size * 8) {
    moveY = size * 8;
  }
  
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      image(grass, x * size, y * size, size, size);
    }
  }
  
  image(person, moveX, moveY, size, size);
  
  if (moveX === size * 8 && moveY === size * 8) {
    rect(160, 160, 256, 256);
    textSize(35);
    text('VICTORY', 210, 300);
    button = createButton('Restart');
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
  if (keyIsDown(DOWN_ARROW)){
    moveY += 64;
  }
  
  if (keyIsDown(UP_ARROW)){
    moveY -= 64;
  }
  
  if (keyIsDown(LEFT_ARROW)){
    moveX -= 64;
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    moveX += 64;
  }
}
