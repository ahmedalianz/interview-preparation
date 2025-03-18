const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowestIdx = i;
    let low = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestIdx]) {
        lowestIdx = j;
      }
    }
    array[i] = array[lowestIdx];
    array[lowestIdx] = low;
  }
  return array;
}

console.log(selectionSort(numbers));
function selectionSort2(array) {
  for (let i = 0; i < array.length; i++) {
    let lowestIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestIdx]) {
        lowestIdx = j;
      }
    }
    //we need to remove the lowest and add it at first every loop
    // add the lowest after current index
    array.splice(i, 0, array.splice(lowestIdx, 1)[0]);
  }
  return array;
}
console.log(selectionSort2(numbers));
