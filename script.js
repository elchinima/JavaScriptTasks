class CustomMatch {

    constructor(num) {
        this.result = num;
    };

    plus(value) {
        this.result += value;
        return this;
    };

    minus(value) {
        this.result -= value;
        return this;
    };

    multiply(value) {
        this.result *= value;
        return this;
    };

    divide(value) {
        this.result /= value;
        return this;
    };
};

var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);

function ArrayOne() {

    var arr = [4, 2, 7, 5, 6, 1, 3];

    arr.sort((b, a) => a - b);

    console.log(`Task2: ${arr}`);

};

function FuncString(greeting) {

    var arr = [];

    for (let i = 1; i <= greeting.length; i++) {

        arr.unshift(i);
    };

    arr.sort((a, b) => a - b);

    console.log(`Task3: ${arr}`);

};

FuncString("Hello World");
console.log(`Task1: ${result.result}`);
ArrayOne();




const universityGroup = {
    groupName: "PA-202",
    students: [],

    addStudent(student) {
        this.students.push(student)
    },

    removeStudent(id) {
        id = id - 1,
        this.students.splice(id, 1)
    },

    // Get student by id
    getStudent(id) {

    },

    //  Get average grade of student
    getAverageGrade(id) {

    },

    //  Add grade to student
    addGrade(id, grade) {

    },

    //  Get top student (by average grade)
    getTopStudent() {

    },

    getAllStudents() {
        alert(`All: ${this.students}`)
    },

    //  Bonus: best student name
    getBestStudentName() {

    }
};



while (true) {

    var option = String(prompt("Add, Exit"));

    if (option == "Exit") {
        alert("Bye!");
        break;
    }

    switch (option) {

        case "Add":
            var studentNameAdd = String(prompt("Student Add:"));

            if (studentNameAdd == null)
                alert("The name can't be empty!");

            else if (studentNameAdd.length <= 2 && studentNameAdd != null)
                alert("The name can't be less than 3 characters!");

            else if (studentNameAdd != null && studentNameAdd.length > 2) {
                universityGroup.addStudent(studentNameAdd);
                alert("Student added!");
            }

            else
                alert("Error!");

            break;

        case "Remove":
            var input = prompt("Student Remove (Id):");

            if (input === null || input.trim() === "") {
                alert("Can't be empty!");
            } 
            
            else {
                var studentRemove = parseInt(input);

                if (isNaN(studentRemove)) {
                    alert("Not a valid number!");
                } 
                
                else {
                    universityGroup.removeStudent(studentRemove);
                    alert("Student removed!");
                }
            }

            break;

        case "All":

            universityGroup.getAllStudents();

            break;
    };
};





