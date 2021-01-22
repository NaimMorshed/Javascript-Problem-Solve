const str = "Hello I am coding javascipt"
let mod = "";
for (var i = 1; i<=str.length; i++) {
    var temp = str[str.length-i];
    mod += temp;
}
console.log(mod);

var rev = str.split("")