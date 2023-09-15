/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const result1 = await promise1;
  const result2 = await promise2;
  return new Promise((resolve, _) => {
    resolve(result1 + result2);
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

const tests = [
  {
    promise1: new Promise((resolve) => setTimeout(() => resolve(2), 20)),
    promise2: new Promise((resolve) => setTimeout(() => resolve(5), 60)),
  },
  {
    promise1: new Promise((resolve) => setTimeout(() => resolve(10), 50)),
    promise2: new Promise((resolve) => setTimeout(() => resolve(-12), 30)),
  },
];

tests.forEach((test, i) =>
  addTwoPromises(test.promise1, test.promise2)
    .then((res) => console.log(`Test for example ${i + 1}`, res))
    .catch((error) => console.log(`Error on example ${i + 1}`, error))
);
