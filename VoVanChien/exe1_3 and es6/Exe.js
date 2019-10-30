class NumberObject{
  constructor(number) {
    this.number = number;
  }
  
  isOdd() {
    if (this.number % 2 !== 0)
      return true;
    return false;
  }
  
  divisibleByThree() {
    if (this.number % 3 === 0)
      return true;
    return false;
  }
  
  getNumber() {
    return this.number;
  }
}

let numbersArr = [
  new NumberObject(0),
  new NumberObject(1),
  new NumberObject(2),
  new NumberObject(3),
  new NumberObject(4),
  new NumberObject(5),
  new NumberObject(6),
  new NumberObject(7),
  new NumberObject(8),
  new NumberObject(9),
];

let odds = [];
let evens = [];
let numbersDivisibleByThree = [];

numbersArr.map(value => {
  if (value.isOdd()) {
    odds.push(value.getNumber());
  } else if (!value.isOdd()) {
    evens.push(value.getNumber());
  }
  
  if (value.getNumber() !== 0 && value.divisibleByThree()) {
    numbersDivisibleByThree.push(value.getNumber());
  }
});

console.log('-------Số lẻ-------');
console.log(odds);
console.log('-------Số chẵn-------');
console.log(evens);
console.log('-------Số chia hết cho 3-------');
console.log(numbersDivisibleByThree);