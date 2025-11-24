function solution(ineq, eq, n, m) {
  const op = ineq + eq;

  if (op === "<=") {
    return n <= m ? 1 : 0;
  }
  if (op === ">=") {
    return n >= m ? 1 : 0;
  }
  if (op === "<!") {
    return n < m ? 1 : 0;
  }
  if (op === ">!") {
    return n > m ? 1 : 0;
  }
}

console.log(solution("<", "=", 20, 50));
