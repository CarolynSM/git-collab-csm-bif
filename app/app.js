var doughnuts = [
  {
    name: Glazed,
    age: 2
  },
  {
    name: Chocolate,
    age: 4
  },
  {
    name: Jelly,
    age: 14
  }
];

var arrayOfNumbers = [2, 1, 4, 5, 5, 1, 2, 3, 1, 2, 2, 56, 6, 6, 1, 1, 2, 2, 3, 3];

function sum(array) {
  return array.reduce((a, b) => {
    return a + b;
  });
}

function returnEven(array) {
  var output = [];
  array.forEach(n => {
    if (n % 2 === 0) {
      output.push(n);
    }
  });
  return output;
}

var nuts = [
  {
    name: Chest,
    age: 23
  },
  {
    name: Pea,
    age: 2
  },
  {
    name: Dough,
    age: 13
  }
];

function multiplyNumbers(array) {
  return array.reduce(function(a, b) {
    return a * b;
  });
}
