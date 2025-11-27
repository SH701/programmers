function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    let a = 0;
    for (let j = 1; j <= n; j++) {
      if (i % j === 0) {
        a++;
      }
    }
    if (a >= 3) {
      result++;
    }
  }
  return result;
}
console.log(solution(10));
