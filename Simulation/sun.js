class sun {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = p5.Vector.random2D();
        this.acceleration = createVector();
    }

    show() {
        strokeWeight(16);
        stroke(255);
        fill(255);
        point(this.position.x, this.position.y);
    }
}
