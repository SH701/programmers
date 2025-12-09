function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const A = Math.abs(a - n);
    const B = Math.abs(b - n);

    if (A === B) {
      return b - a;
    }
    return A - B;
  });
}
console.log(solution([1, 2, 3, 4, 5, 6], 4));
