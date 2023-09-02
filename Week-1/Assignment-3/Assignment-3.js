function countAandB(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let str = input[i].toUpperCase();
    if (str == "A" || str == "B") {
      count++;
    }
  }
  return count;
}

function toNumber(input) {
  let arr = new Array(input.length);
  let num = undefined;
  for (let i = 0; i < input.length; i++) {
    let upperStr = input[i].toUpperCase();
    num = undefined;
    if (input[i] == upperStr) {
      //是大寫
      num = input[i].charCodeAt(0) - 64; //A的ASCII code是65
    } else {
      num = input[i].charCodeAt(0) - 96; //a的ASCII code是97
    }

    if (num != undefined) {
      arr[i] = num;
    }
  }

  return arr;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1));
console.log(toNumber(input1));

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2));
console.log(toNumber(input2));
