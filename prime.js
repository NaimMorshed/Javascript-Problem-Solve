const a = 17;
let count = 0;
for (var i = 2; i < a-1; i++) {
    if (a % i != 0) {
        count++;
    }
}
if (count=0) {
    console.log("Prime number");
}
else {
    console.log("Not prime number");
}