const binarySearch = (arr, value) => {
  let min = arr[0];
  let max = arr[arr.length - 1];
  while (min <= max) {
    const guess = Math.floor(min + max / 2);
    if (arr[guess] === value) {
      return guess;
    } else if (arr[guess] < value) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
};
