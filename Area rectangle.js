/*write a function that calculates and prints the area of rectangle given its length and width 
input : length & width
area of rectangle: length*width 
print the area of console*/

function calculateArea(length, width){
  if(length <= 0) {
    throw new RangeError('Length shud be a positive num');
  }
  if(width <= 0) {
    throw new RangeError('wodth shud be a positive num');
  }
  const area = length*width;
  console.log('Area of rectangle is',area);
}

/*testing*/
calculateArea(23,2);
calculateArea(-6,7);
calculateArea(8,-9);
