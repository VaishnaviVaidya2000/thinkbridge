Practising JavaScript Basics.

1) Variables
let-variable cannot be redeclared but can be updated
Const-variable cannot be redeclared and cannot be updated
var-variable can be redeclared and updated

let a="Vaishnavi";
console.log(a);
Output:Vaishnavi

const fname="Vaishnavi";
const lname="Vaidya";
console.log(fname+lname);
Output:VaishnaviVaidya

var digit=45;
var digit=60;
console.log(digit);
Output:60

Loops
For Loop

Sum of 1 to n numbers
let sum = 0;
let n=100
for (let i = 1; i <= n; i++) {
  sum += i; 
}
console.log("Sum of numbers from 1 to n is:", sum);
Output:Sum of numbers from 1 to n is: 5050

while Loop

let j=0;
let sum1 = 0;
while(j<=20){
    sum1=sum1+j;
    j++;
}
console.log("Sum of numbers from 1 to 20 is:", sum1);
Output:Sum of numbers from 1 to 20 is: 210

do while

let k=0;
let sum2=0;
do {
  sum2=sum2+k
  k++;
}
while (k <=10);  
console.log("Sum of numbers from 1 to 10 is:", sum2)
Output:Sum of numbers from 1 to 10 is: 55

for of loop

let str="vaishnavi";
for(let i of str){
    console.log("i="+i);
}
output:
i=v
i=a
i=i
i=s
i=h
i=n
i=a
i=v
i=i

for in loop

let data={
    name:"Vaishnavi",
    age:25,
    gender:"female",
}
for(let d in data){
    console.log("Key=",d,"value=",data[d]);
}
Output:Key= name value= Vaishnavi
Key= age value= 25
Key= gender value= female
____________________________________________-
2)     Strings

let string1="thinkbridge";
let string2="Company";
console.log("Length of String:",string1.length);
Output:Length of String: 11

console.log("Character at specific position:",string1.charAt(3));
Output:Character at specific position: n

console.log("charCodeAt string:",string1.charCodeAt(4));
Output:charCodeAt string: 107

console.log("character at specific position:",string1.at(2));
Output:character at specific position: i

let lang="java,python,.net,R programming,C#";
console.log("slices out a portion of a string:",lang.slice(-6,-4));
Output:slices out a portion of a string: in

console.log("substring out a portion of a string:",lang.substring(2,8));
Output:substring out a portion of a string: va,pyt

console.log("Uppercase string:",lang.toUpperCase());
Output:Uppercase string: JAVA,PYTHON,.NET,R PROGRAMMING,C#

console.log("Lowercase string:",lang.toLowerCase());
Output:Lowercase string: java,python,.net,r programming,c#

console.log("iswellformed string:",lang.isWellFormed());
Output:iswellformed string: true

console.log("trim string:",lang.trim());
Output:trim string: java,python,.net,R programming,C#

let num=6;
let string3=num.toString();
console.log("Padding of a string from start:",string3.padStart(4,"0"));
Output:Padding of a string from start: 0006

console.log("Padding of a string from end:",string3.padEnd(3,"x"));
Output:Padding of a string from end: 6xx

console.log("Repeating of String",string1.repeat(3));
Output:Repeating of String thinkbridgethinkbridgethinkbridge

console.log("Replacing string",string1.replace("i","g"));
Output:Replacing string thgnkbridge

console.log("Replacing string",string1.replaceAll("i","g"));
Output:Replacing string thgnkbrgdge


___________________________________________
3)  Array

const hobbies=["Reading","Dancing","Singing","Travelling","Poeting"];
const hobbies1=["Swimming,Playing Cricket"];
console.log("Length of Array:",hobbies.length);
Output:Length of Array: 5

const hobstr=hobbies.toString();
console.log("Tostring Method for Array: ",hobstr);
Output:Tostring Method for Array:  Reading,Dancing,Singing,Travelling,Poeting

console.log("At method for Arrays:",hobbies.at(2));
Output:At method for Arrays: Singing

console.log("Join method to join all elements to string:",hobbies.join("/"));
Output:Join method to join all elements to string: Reading/Dancing/Singing/Travelling/Poeting

console.log("Pop Method for Arrays:",hobbies.pop());
Output:Pop Method for Arrays: Poeting

console.log("Push Method for Arrays:",hobbies.push("Horseriding"));
console.log(hobbies);
Output:Push Method for Arrays: 5
[ 'Reading', 'Dancing', 'Singing', 'Travelling', 'Horseriding' ]

console.log("Array Shifting:",hobbies.shift());
console.log(hobbies);
Output:Array Shifting: Reading
[ 'Dancing', 'Singing', 'Travelling', 'Horseriding' ]

console.log("Unshift Method of Array:",hobbies.unshift("Treking"));
console.log(hobbies);
Output:Unshift Method of Array: 5
[ 'Treking', 'Dancing', 'Singing', 'Travelling', 'Horseriding' ]

console.log("Delete method for Array:");
delete hobbies[2];
console.log(hobbies);
Output:
Delete method for Array:
[ 'Treking', 'Dancing', <1 empty item>, 'Travelling', 'Horseriding' ]

console.log("Concatination of Arrays:",hobbies.concat(hobbies1));
Output:Concatination of Arrays: [
  'Treking',
  'Dancing',
  <1 empty item>,
  'Travelling',
  'Horseriding',
  'Swimming,Playing Cricket'
]

console.log("Splicing method for Array:");
console.log("Splicing Method oF Array:",hobbies.splice(2,0,"Bike Riding","Gaming"));
console.log(hobbies);
Output:Splicing Method oF Array: []
[
  'Treking',
  'Dancing',
  'Bike Riding',
  'Gaming',
  <1 empty item>,
  'Travelling',
  'Horseriding'
]

console.log("Slicing method of Array:",hobbies.slice(2,5));
console.log(hobbies);
Output:Slicing method of Array: [ 'Bike Riding', 'Gaming', <1 empty item> ]
[
  'Treking',
  'Dancing',
  'Bike Riding',
  'Gaming',
  <1 empty item>,
  'Travelling',
  'Horseriding'
]

console.log("ToString Method of Array:",hobbies.toString());
Output:ToString Method of Array: Treking,Dancing,Bike Riding,Gaming,,Travelling,Horseriding

console.log("Indexof Method of Array:",hobbies.indexOf("Poeting")+2);
Output:Indexof Method of Array: 1

console.log("Includes Method of Array:",hobbies.includes("Dancing"));
Output:Includes Method of Array: true

_______________________________________________
4)  Conditional
//if

if (new Date().getHours() < 18) {
  console.log("Have a Great Day");
}
Output:Have a Great Day

    
//if-else

let Candidateage=15;
if (Candidateage>18){
    console.log("Can Vote");
}
else{
    console.log("Cannot Vote");
}
Output:
Cannot Vote

//Switch

const time = new Date().getHours();
if (time < 10) {
    console.log("Good Morning");
} else if (time < 20) {
  console.log("Good day") ;
} else {
   console.log("Good Evening") ;;
}
Output:
Good day



