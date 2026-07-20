//TASK:1 (You have to take work input as a number. If that number is a multiple of 3, then print Humpty. If the number is a multiple of 5, then print Dumpty. If the number is a multiple of both 3 and 5, then print Humpty Dumpty.)
let n = prompt("Enter a number:");

if (n % 3 === 0 && n % 5 === 0) {
    console.log("Humpty Dumpty");
} else if (n % 3 === 0) {
    console.log("Humpty");
} else if (n % 5 === 0) {
    console.log("Dumpty");
}

//TASK:2 (Given string - "we are in full stack batch", in this string you need to print all vowels and make one word out of it, output="eaeiuaa")
let str = "we are in full stack batch";
let vowels = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        vowels += str[i];
    }
}

console.log(vowels);

