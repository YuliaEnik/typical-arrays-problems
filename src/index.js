
exports.min = function min(array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  let minNumber = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
}



exports.max = function max(array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  let maxNumber = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  return maxNumber;
}


exports.avg = function avg(array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length
}


