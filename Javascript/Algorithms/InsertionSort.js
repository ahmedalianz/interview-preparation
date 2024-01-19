// it's efficient in case of nearly sorted data
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // j=1 because that's why we entered the else as the 0 index is already lower
      // we continue the loop starting from the idx =1 till last idex we stopped = i
      for (let j = 1; j < i; j++) {
        // if we found a place where our number is greater than the before and less than the after
        // we put it i this place
        if (array[i] < array[j] && array[i] > array[j - 1]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}

console.log(insertionSort(numbers));
