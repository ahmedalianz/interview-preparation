const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let midIdx = Math.floor(array.length / 2);
  let letHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);
  let leftSorted = mergeSort(letHalf);
  let rightSorted = mergeSort(rightHalf);
  return merge(leftSorted, rightSorted);
}
function merge(left, right) {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return result.concat(left.slice(leftIdx), right.slice(rightIdx));
}
console.log(mergeSort(numbers));
