var Student = function(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.printName = function(){
        console.log(`Student ${this.firstName} ${this.lastName}`);
    };

    this.printGradeAvg = function(){
        let sum = this.grades.reduce((a,b)=>a+b);
        let avg = sum/grades.length;
        console.log(`Grade average: ${avg}`);
    };
};

let myStudent = new Student("Debbie","Downer",1,[4,5,3,4,5,4,3,5]);
myStudent.printName();
myStudent.printGradeAvg();