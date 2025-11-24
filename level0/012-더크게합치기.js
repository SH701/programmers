function solution(a, b) {
  const strA = String(a);
  const strB = String(b);
  const c = strA + strB;
  const d = strB + strA;
  const numc = Number(c);
  const numd = Number(d);
  return numc < numd ? numd : numc;
}
console.log(solution(9, 91));
