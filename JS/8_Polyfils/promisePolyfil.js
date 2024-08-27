function MyPromise(executor) {
  let onResolve, onReject;
  function resolve(val) {
    onResolve(val);
  }
  function reject(val) {
    onReject(val);
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

const sol = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Okay");
  }, 2000);
});

sol.then((val) => console.log(val)).catch((val) => console.log(val));
