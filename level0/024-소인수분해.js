function solution(n) {
  let result = [];
  let a = 2;
  while (n >= 2) {
    if (n % a === 0) {
      result.push(a);
      n = n / a;
    } else {
      a++;
    }
  }
  return [...new Set(result)];
}

console.log(solution(420));
