// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesian = function (arr2) {
  return function (array, e1) {
    return arr2.map(function (e2) {
      array.push([e1, e2]);
      return array;
    });
  };
};

function cartesianProduct(arr1, arr2) {
  return arr1.reduce(cartesian(arr2), []);
}

console.log(cartesianProduct([1, 2], ['a', 'b']));