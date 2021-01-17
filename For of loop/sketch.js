let bubbles = [];
let length = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < length; i++) {
    let x = random(40, width - 40);
    let y = random(40, height - 40);
    let r = random(10, 40);
    let xSpeed = random(2, 3);
    let ySpeed = -xSpeed + random() * 2;

    bubbles[i] = new Bubble(x, y, r, xSpeed, ySpeed);
  }

}

// function mousePressed() {

//   let r = random(10, 40);
//   let xSpeed = random(2, 3);
//   let ySpeed = -xSpeed + random() * 2;

//   let newBubble = new Bubble(mouseX, mouseY, r, xSpeed, ySpeed)
//   bubbles.push(newBubble);
// }

function mousePressed() {
  for (let bubble of bubbles) {
    bubble.clicked(mouseX, mouseY);
  }
}

function draw() {

  background(0);

  for (let bubble of bubbles) {
    bubble.show();
    bubble.move();
    bubble.bounce();

    for (let other of bubbles) {
      if (other !== bubble && bubble.touches(other)) {
        bubble.noShow();
      }
    }
  }

  // for (let i = 0; i < bubbles.length; i++) {

  //   bubbles[i].show();
  //   bubbles[i].move();
  //   bubbles[i].bounce();
  // }

}