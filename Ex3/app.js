console.log("P1");
var x = prompt("Dame un número");
while (x > 0 ) {
    console.log(x);
    x -= 0.5;

}
console.log("P2");
var y = 100
while (y >= 1){
     var res = y%2;
    if (res == 0){

    }
    else{
        console.log(y);
    }
    y--
}
console.log("P3");
let n = prompt("Dime otro número");
let cadena = "";
for (let i = 1; i <= n; i++) {
    cadena += "["+i+"]";
    
}
console.log(cadena);

console.log("P4");
let a = prompt("Dime otro número"), sum = 0, z = 0;

while (z <= a){
    sum += z;
    z++;
}
console.log(sum);