export const searchMin = function (arr) {
  let minNumber = Math.min(...arr);
  return minNumber;
};

export const searchMax = function (arr) {
  let maxNumber = Math.max(...arr);
  return maxNumber;
};

export const cloneFirstLevel = function (obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
};

export const ArAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + parseInt(arr[i]);
  }
  return sum / arr.length;
};
