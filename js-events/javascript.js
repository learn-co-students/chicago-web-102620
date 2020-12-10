const arraySlice = [1, 2, 3];
// slice returns a new array
console.log(arraySlice.slice(1, 2));

const arraySplice = [4, 5, 6, 7];
// splice will modify the actual array
// the call returns the deleted item in this case 5
console.log(arraySplice.splice(1, 1, 'word or something very obvious'));
console.log(arraySplice);

const mapArray  = [1, 2, 3];
const mapped = mapArray.map(function (element, index) {
  return `The element at index ${index} is ${element}`;
});

console.log(mapped);

function mapIt(element, index) {
  return `The element at index ${index} is ${element}`;
}

mapArray.map(mapIt);

// infinite loop, please transform i
// for (let i = 0; i < 10; i) {
//   console.log(i);
// }

// parseInt always returns an integer
// you give it a string and you tell it what type of number that string represents
console.log(parseInt("45", 10));
console.log(parseInt("101", 2));
console.log(parseInt("101", 10));
console.log(parseInt("5", 2));  // 5 is not binary
