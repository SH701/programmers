function solution(id_pw, db) {
  const [id, pw] = id_pw;
  for (let i = 0; i < db.length; i++) {
    const [db_id, db_pw] = db[i];
    if (db_id === id) {
      if (db_pw === pw) {
        return "login";
      } else {
        return "wrong pw";
      }
    }
  }
  return "fail";
}
console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
