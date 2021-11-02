function Student(firstName, lastName, id){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
}

Student.prototype = {
    firstName: "Proto",
    lastName: "Type",
    id: 9999999999999,
    courses: ["art","music","philosophy","debauchery"]
}

let student1 = new Student("Debbie","Downer",1);
let student2 = new Student();
console.log(student1.id + ": " + student1.firstName + " " + student1.lastName + " partakes in " + student1.courses);