let concat = function (array1, array2) {
  let concatArray = [];
  if (array1.length !== 0) {
    for (let i = 0; i < array1.length; i++) {
      concatArray.push(array1[i]);
    }
  }
  if (array2.length !== 0) {
    for (let j = 0; j < array2.length; j++) {
      concatArray.push(array2[j]);
    }
  }
  return concatArray;
}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);