// alert("connected");

var number = -10;
console.log("Print all numbers bw -10 and 19");

while (number <= 19) {
    console.log(number);
    number++;
}


var number = 10;
console.log("Print all even number bw 10 and 40");

while (number <= 40) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}


var number = 300;
console.log("Print all odd numbers bw 300 and 333")

while (number <= 333) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}


var number = 5;
console.log("Print all numbers divisivble by 5 and 3 between 5 and 50")
while (number <= 50) {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log(number);
    }
    number++;
}