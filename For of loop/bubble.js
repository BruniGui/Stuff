class Bubble {
  constructor(x, y, r, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.red = 15;
    this.green = 15;
    this.blue = 15;
  }

  move() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }

  bounce() {
    if (this.x + this.r > width || this.x - this.r < 0) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y + this.r > height || this.y - this.r < 0) {
      this.ySpeed = -this.ySpeed;
    }
  }

  touches(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }

  clicked(x, y) {
    let mouseDist = dist(x, y, this.x, this.y);
    if (mouseDist < this.r) {
      console.log('clicked on bubble');
      this.red = 15 * random(0, 17);
      this.green = 15 * random(0, 17);
      this.blue = 15 * random(0, 17);
    }
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, this.r * 2);
  }

  noShow() {
    stroke(0);
    strokeWeight(1);
    fill(0, 0, 0, 0);
    ellipse(this.x, this.y, this.r * 2);
  }
}