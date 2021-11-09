class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(fullName){
        var words = fullName.toString().split(' ');
        this.firstName = words[0] || "";
        this.lastName = words[1] || "";
    }
}

class Student extends Person {
    constructor(firstName, lastName, id, grades) {
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
    }

    get averageGrade(){
        let sum = this.grades.reduce((a,b)=>a+b);
        let avg = sum/this.grades.length;
        return avg;
    }
}

let myStudent = new Student("Debbie","Downer",1,[4,5,3,4,5,4,3,5]);
myStudent.fullName = "Personable Person";
console.log(myStudent.firstName);
console.log(myStudent.lastName);
console.log(myStudent.averageGrade);