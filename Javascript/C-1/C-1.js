/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  const newArray = [];
  let currentIndex = 0;
  while (currentIndex < arr.length) {
    const chunk = arr.slice(currentIndex, currentIndex + size);
    newArray.push(chunk);
    currentIndex += size;
  }
  return newArray;
};

const tests = [
  {
    arr: [1, 2, 3, 4, 5],
    size: 1,
  },
  {
    arr: [1, 9, 6, 3, 2],
    size: 3,
  },
  {
    arr: [8, 5, 3, 2, 6],
    size: 6,
  },
  {
    arr: [],
    size: 1,
  },
];

tests.forEach((test, i) =>
  console.log(`Test for example ${i + 1}`, chunk(test.arr, test.size))
);
