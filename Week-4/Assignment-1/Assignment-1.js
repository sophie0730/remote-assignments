//callback
function delayedResult(n1, n2, delayTime, callback) {
  const result = n1 + n2;
  setTimeout(function () {
    callback(result);
  }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});

delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
});

//Promise
function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      reject(new Error("Parameters should be numbers"));
    } else {
      setTimeout(() => {
        const result = n1 + n2;
        resolve(result);
      }, delayTime);
    }
  });
}

delayedResultPromise(4, 5, 3000).then(console.log);

//async/await
async function main() {
  try {
    const result = await delayedResultPromise(4, 5, 3000);
    console.log(result);
  } catch (error) {
    throw Error("It broke.");
  }
}
main();
