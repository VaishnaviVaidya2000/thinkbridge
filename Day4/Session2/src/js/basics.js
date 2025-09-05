//Variables
//variable cannot be redeclared but can be updated
let a="Vaishnavi";
console.log(a);

//variable cannot be redeclared and cannot be updated
const fname="Vaishnavi";
const lname="Vaidya";
console.log(fname+lname);

//variable can be redeclared and updated
var digit=45;
var digit=60;
console.log(digit);

//___________________________________
//Loops
//For Loop
// Sum of 1 to n numbers
let sum = 0;
let n=100
for (let i = 1; i <= n; i++) {
  sum += i; 
}
console.log("Sum of numbers from 1 to n is:", sum);

//while Loop
let j=0;
let sum1 = 0;
while(j<=20){
    sum1=sum1+j;
    j++;
}
console.log("Sum of numbers from 1 to 20 is:", sum1);

//do while
let k=0;
let sum2=0;
do {
  sum2=sum2+k
  k++;
}
while (k <=10);  
console.log("Sum of numbers from 1 to 10 is:", sum2)

//for of loop
let str="vaishnavi";
for(let i of str){
    console.log("i="+i);
}

//for in loop
let data={
    name:"Vaishnavi",
    age:25,
    gender:"female",
}
for(let d in data){
    console.log("Key=",d,"value=",data[d]);
}

//Strings
let string1="thinkbridge";
let string2="Company";
console.log("Length of String:",string1.length);
console.log("Character at specific position:",string1.charAt(3));
console.log("charCodeAt string:",string1.charCodeAt(4));
console.log("character at specific position:",string1.at(2));

let lang="java,python,.net,R programming,C#";
console.log("slices out a portion of a string:",lang.slice(-6,-4));
console.log("substring out a portion of a string:",lang.substring(2,8));
console.log("Uppercase string:",lang.toUpperCase());
console.log("Lowercase string:",lang.toLowerCase());
console.log("iswellformed string:",lang.isWellFormed());
console.log("trim string:",lang.trim());
let num=6;
let string3=num.toString();
console.log("Padding of a string from start:",string3.padStart(4,"0"));
console.log("Padding of a string from end:",string3.padEnd(3,"x"));
console.log("Repeating of String",string1.repeat(3));
console.log("Replacing string",string1.replace("i","g"));
console.log("Replacing string",string1.replaceAll("i","g"));

//Arrays
const hobbies=["Reading","Dancing","Singing","Travelling","Poeting"];
const hobbies1=["Swimming,Playing Cricket"];
console.log("Length of Array:",hobbies.length);
const hobstr=hobbies.toString();
console.log("Tostring Method for Array: ",hobstr);
console.log("At method for Arrays:",hobbies.at(2));
console.log("Join method to join all elements to string:",hobbies.join("/"));
console.log("Pop Method for Arrays:",hobbies.pop());
console.log("Push Method for Arrays:",hobbies.push("Horseriding"));
console.log(hobbies);
console.log("Array Shifting:",hobbies.shift());
console.log(hobbies);
console.log("Unshift Method of Array:",hobbies.unshift("Treking"));
console.log(hobbies);
console.log("Delete method for Array:");
delete hobbies[2];
console.log(hobbies);
console.log("Concatination of Arrays:",hobbies.concat(hobbies1));
console.log("Splicing method for Array:");
console.log("Splicing Method oF Array:",hobbies.splice(2,0,"Bike Riding","Gaming"));
console.log(hobbies);
console.log("Slicing method of Array:",hobbies.slice(2,5));
console.log(hobbies);
console.log("ToString Method of Array:",hobbies.toString());
console.log("Indexof Method of Array:",hobbies.indexOf("Poeting")+2);
console.log("Includes Method of Array:",hobbies.includes("Dancing"));

//Conditional
//if
if (new Date().getHours() < 18) {
  console.log("Have a Great Day");
}


    
//if-else
let Candidateage=15;
if (Candidateage>18){
    console.log("Can Vote");
}
else{
    console.log("Cannot Vote");
}

//Switch
const time = new Date().getHours();
if (time < 10) {
    console.log("Good Morning");
} else if (time < 20) {
  console.log("Good day") ;
} else {
   console.log("Good Evening") ;;
}