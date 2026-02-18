// write a function that tells if a given number is even or odd
// input : A number
// return : "even " if number is even , "odd" if number is odd
// even : number when divived  by 2 has zero reminder 
// odd : number when divived  by 2 has non zero reminder 

function checkEvenOrOdd(a){
  const remainder = a % 2;

  if (remainder === 0){
    return "Even"
  }
  else{
    return "Odd";
  }
}
console.log(checkEvenOrOdd(24));
