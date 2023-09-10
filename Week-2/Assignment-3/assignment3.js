function count(input) {
  // your code here
  let tarObj = {};
  input.forEach((item) => {
    if (!tarObj[item]) {
      tarObj[item] = 1;
    } else {
      tarObj[item] += 1;
    }
  });
  return tarObj;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  let tarObj = {};
  input.forEach((obj) => {
    if (!tarObj[obj.key]) {
      tarObj[obj.key] = obj.value;
    } else {
      tarObj[obj.key] += obj.value;
    }
  });
  return tarObj;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
