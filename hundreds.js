const howManyHundreds = function (num) {
  let stepOne = num % 100;
  let stepTwo = num - stepOne;
  let answer = stepTwo / 100;
  return answer ;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);