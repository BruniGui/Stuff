class Bubble {
    constructor(x, y, r, xSpeed, ySpeed) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
    }
  
    move() {
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    }
  
    bounce() {
        if (this.x + this.r > width || this.x - this.r < 0) {
            this.xSpeed = - this.xSpeed;
        }
        if (this.y + this.r > height || this.y - this.r < 0) {
            this.ySpeed = - this.ySpeed;
        }
    }

    show() {
      stroke(255);
      strokeWeight(4);
      noFill();
      ellipse(this.x, this.y, this.r * 2);
    }
  }