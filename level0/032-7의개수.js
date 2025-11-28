function solution(array) {
  let count = 0;
  const arr = array.join("").split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "7") {
      count++;
    }
  }
  return count;
}
console.log(solution([7, 77, 17]));
