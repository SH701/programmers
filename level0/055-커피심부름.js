function solution(order) {
  let total = 0;
  for (const item of order) {
    if (item.includes("cafelatte")) {
      total += 5000;
    } else {
      total += 4500;
    }
  }
  return total;
}
console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
);
