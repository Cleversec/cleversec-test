/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let iteration = 0;
    let errorFound = false;

    // TODO: Implement logic to show the "time" as showed on README {"t": 200, "resolved": [5]} - For now only showing [results] or "Error"
    functions.forEach((asyncFunc, i) => {
      asyncFunc()
        .then((response) => {
          if (!errorFound) {
            results[i] = response;
            iteration++;
            if (iteration === functions.length) {
              resolve(results);
            }
          }
        })
        .catch((error) => {
          if (!errorFound) {
            errorFound = true;
            reject(error);
          }
        });
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

const tests = [
  [() => new Promise((resolve) => setTimeout(() => resolve(5), 200))],
  [
    () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
    () => new Promise((_, reject) => setTimeout(() => reject("Error"), 100)),
  ],
  [
    () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
    () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
    () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
  ],
];
tests.forEach((test, i) =>
  promiseAll(test)
    .then((res) => console.log(`Test for example ${i + 1}`, res))
    .catch((error) => console.log(`Error on example ${i + 1}`, error))
);
