// Arrays
// by Guilherme Bruni

// Create an array

var nums = [100, 25, 12, 72];

// Create Canvas

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Draw  circles with  different diameters

var bgCol = 0;

function draw() {

  background(bgCol);

  if (bgCol > 255) {
    bgCol = 0; 
  }  
 
  bgCol += 1;

  var index = Math.floor(random() * nums.length);

  fill(index + random() * 100, index, index);
  stroke(255);

  ellipse(windowWidth / 2, windowHeight / 2, nums[index], nums[index]);

}