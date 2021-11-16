var Student = function(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    Object.defineProperties(this, {
        "fullName": {
            get: function(){
                return this.firstName + " " + this.lastName;
            },
            set: function(fullName){
                var words = fullName.toString().split(' ');
                this.firstName = words[0] || "";
                this.lastName = words[1] || "";
            }
        },
        "averageGrade": {
            get: function(){
                return this.gradeAvg();
            }
        }
    });

    this.printName = function(){
        console.log(`Student ${this.firstName} ${this.lastName}`);
    };

    this.gradeAvg = function(){
        let sum = this.grades.reduce((a,b)=>a+b);
        let avg = sum/this.grades.length;
        return avg;
    };
};

let myStudent = new Student("Debbie","Downer",1,[4,5,3,4,5,4,3,5]);
myStudent.fullName = "Sekhema Deshret";
console.log(myStudent.firstName);
console.log(myStudent.lastName);
console.log(myStudent.averageGrade);
