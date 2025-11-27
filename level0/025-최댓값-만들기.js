function solution(numbers) {
  let result = [];
  let a = 0;
  let b = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        result.push((a = numbers[i] * numbers[j]));
      }
    }
  }
  result.sort((a, b) => a - b);
  b = result[result.length - 1];
  return b;
}
console.log(solution([1, 2, -3, 4, -5]));
