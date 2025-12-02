function solution(array) {
  let max = array[0];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      index = i;
    }
  }
  return [max, index];
}
console.log(solution([9, 10, 11, 8]));
