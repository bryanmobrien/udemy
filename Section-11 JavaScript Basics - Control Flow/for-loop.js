console.log("console.log all nubmes bw -10 and 19")
for (var i = -10; i <= 19; i++) {
    console.log(i);
}

console.log("console.log evens bw 10 and 40");
for (var i = 10; i <=40; i+=2) {
    console.log(i);
}

console.log("console.log odds bw 300 and 333");
for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0 ) {
        console.log(i);
    }
}

console.log("console.log all numbers divisible by 3 and 5 bw 5 and 50");
for (var i = 5; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log(i);
    }
}