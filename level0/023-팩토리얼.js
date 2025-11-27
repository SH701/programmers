function solution(n) {
  let result = 1;
  let a = 0;
  for (let i = 1; i <= n; i++) {
    result *= i;
    if (result > n) break;
    if (result <= n) {
      a++;
    }
  }

  return a;
}

console.log(solution(3628800));
