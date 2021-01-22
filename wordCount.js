var speech = "I am a good person. I don't snore at night";
let count = 1;
for (var i = 0; i < speech.length; i++) {
    var char = speech[i];
    if (char == " ") {
        count++;
    }
}
console.log("Total words: ", count);