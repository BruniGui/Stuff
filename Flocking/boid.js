class boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 1;
        this.maxSpeed = 4;
    }

    edges() {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }
        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }

    align(boids) {
        let desiredVelocity = createVector();
        let perceptionRadius = 50;
        let total = 0;
        for (let surrounding of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                surrounding.position.x,
                surrounding.position.y
            );
            if (surrounding != this && d < perceptionRadius) {
                desiredVelocity.add(surrounding.velocity);
                total++;
            }
        }
        if (total > 0) {
            desiredVelocity.div(total);
            desiredVelocity.setMag(this.maxSpeed);
            desiredVelocity.sub(this.velocity);
            desiredVelocity.limit(this.maxForce);
        }
        return desiredVelocity;
    }

    separation(boids) {
        let desiredPosition = createVector();
        let perceptionRadius = 50;
        let total = 0;
        for (let surrounding of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                surrounding.position.x,
                surrounding.position.y
            );
            if (surrounding != this && d < perceptionRadius) {
                let difference = p5.Vector.sub(this.position, surrounding.position);
                difference.div(d);
                desiredPosition.add(difference);
                total++;
            }
        }
        if (total > 0) {
            desiredPosition.div(total);
            desiredPosition.setMag(this.maxSpeed);
            desiredPosition.sub(this.velocity);
            desiredPosition.limit(this.maxForce);
        }
        return desiredPosition;
    }

    cohesion(boids) {
        let desiredPosition = createVector();
        let perceptionRadius = 100;
        let total = 0;
        for (let surrounding of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                surrounding.position.x,
                surrounding.position.y
            );
            if (surrounding != this && d < perceptionRadius) {
                desiredPosition.add(surrounding.position);
                total++;
            }
        }
        if (total > 0) {
            desiredPosition.div(total);
            desiredPosition.sub(this.position);
            desiredPosition.setMag(this.maxSpeed);
            desiredPosition.sub(this.velocity);
            desiredPosition.limit(this.maxForce);
        }
        return desiredPosition;
    }

    flock(boids) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        separation.mult(separationSlider.value());
        cohesion.mult(separationSlider.value());
        alignment.mult(separationSlider.value());


        this.acceleration.add(separation);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
    }

    update() {

        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    show() {
        strokeWeight(6);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}
