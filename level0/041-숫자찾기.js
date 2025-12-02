function solution(num, k) {
  const arr = String(num).split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) return i + 1;
  }
  return -1;
}
console.log(solution(29183, 1));
