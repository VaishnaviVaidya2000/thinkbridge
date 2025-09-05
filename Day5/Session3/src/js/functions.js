function democode(){
    console.log("This is my demo code");
}
democode();

console.log("__________________________________");
console.log("Using parameter and arguments");
function sum(a,b){
    console.log("sum of numbers is :",a+b);
}
sum(10,12);
console.log("__________________________________");
function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "Vaishnavi";
let str2 = "Madam";
let str3 = "Javascript";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log("__________________________________");


function vowel(v){
    if (v=='a'||v=='e'||v=='i'||v=='o'||v=='u'||v=='A'||v=='E'||v=='I'||v=='O'||v=='U'){
        console.log("It is a vowel");
    }else{
        console.log("It is a consonent not a vowel");
    }
}
vowel('e');
vowel('x');

console.log("__________________________");
function larnum(arr) {
    let largestnum = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestnum) {
            largestnum = arr[i]; 
        }
    }
    return largestnum;
}
console.log("Largest number in Array:",larnum([7, 9, 4, 3, 19]));
console.log("__________________________");
console.log("Arrow functions:");
let multiplication = function(a, b) {return a * b};
let result=multiplication(6, 9);
console.log("Multiplication of two numbers is",result);


