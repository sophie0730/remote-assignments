function max(numbers) {
  //use for-loop method
  let maxNum = undefined;
  for (let i = 0; i < numbers.length; i++) {
    if (maxNum === undefined) {
      maxNum = numbers[i];
    } else {
      if (maxNum < numbers[i]) {
        maxNum = numbers[i];
      }
    }
  }
  return maxNum;
}

function findPosition(numbers, target) {
  let tarIndex = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      tarIndex = i;
      break;
    }
  }
  return tarIndex;
}

console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

console.log(findPosition([5, 2, 7, 1, 6], 5));
console.log(findPosition([5, 2, 7, 1, 6], 7));
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7));
console.log(findPosition([5, 2, 7, 1, 6], 8));
