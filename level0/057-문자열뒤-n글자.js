function solution(my_string, n) {
  let result = my_string.split("");
  for (let i = 0; i < my_string.length - n; i++) {
    result.shift();
  }
  return result.join("");
}
console.log(solution("He110W0r1d", 5));
