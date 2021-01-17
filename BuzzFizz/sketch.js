let number = 0;

function draw() {

  if (number % 3 === 0 && number % 5 === 0) {
    console.log('BuzzFizz');
  } else if (number % 3 === 0) {
    console.log('Fizz');
  } else if (number % 5 === 0) {
    console.log('Buzz');
  } else {
  console.log(number);
  }
  number++;
}