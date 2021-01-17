stars = [];

function setup() {
  createCanvas(400, 400);
  for ( let i = 0; i<1; i++ ) {
    stars.push(new sun());

  }
}

function draw() {
  background(0);
  for (let sun of stars) {
    stars.show();
  }
}