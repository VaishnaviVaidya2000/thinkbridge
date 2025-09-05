const  vehicle= {name:"BMW", color:"Black", Seats:4};
console.log(vehicle.color);
console.log("_______________________");

const student= {
    fname:"Pooja",
    lname:"Tadke",
    class:12,
    percentage:80
};
console.log("Student Lastname:",student["lname"]);
console.log("_______________________");
console.log("Adding key and value after creating object");
student.division="B";
for (let i in student) {
  console.log(i, ":", student[i]);
}
console.log("_______________________");
console.log("Deleting property and value");
delete student.percentage;
for (let i in student) {
  console.log(i, ":", student[i]);
}
console.log("_______________________");
console.log("Nested Objects:");
const student1= {
    fname:"Sakshi",
    lname:"Raut",
    class:9,
    percentage:60,
    Address:{
        Street:"Chakan Road",
        taluka:"Maval",
        Dist:"Pune",
    }
};
for (let i in student) {
  console.log(i, ":", student1[i]);
}
console.log("_______________________");
const myArray = Object.values(student);
console.log(myArray.toString());
