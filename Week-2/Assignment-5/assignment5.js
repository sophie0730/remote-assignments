function binarySearchPosition(numbers, target) {
  // use binary search
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    let mid = Math.ceil((left + right) / 2); //無條件進位
    if (numbers[mid] > target) {
      right = mid - 1; //中間的值比target大，中間右邊的都不用看
    } else if (numbers[mid] < target) {
      left = mid + 1; //中間的值比target小，中間左邊的都不用看
    } else if (numbers[mid] === target) {
      return mid; //最後一定會收斂到只剩一個值，即target
    }
  }
  return -1; //前面沒有return，代表找不到
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
