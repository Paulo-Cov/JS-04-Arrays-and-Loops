let n = 5;
let triangulo = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    triangulo += "*";
  }
  triangulo += "\n";
}
console.log(triangulo);