findGradeLevel("John", "50")

function findGradeLevel(name, marks) {
    if (marks >= 90 && marks <=100) {
        console.log(name + " you have received S grade")
    }
    if (marks >= 80 && marks <=89) {
        console.log(name + " you have received A grade")
    }
    if (marks >= 70 && marks <=79) {
        console.log(name + " you have received B grade")
    }
    if (marks >= 60 && marks <=69) {
        console.log(name + " you have received C grade")
    }
    if (marks >= 50 && marks <=59) {
        console.log(name + " you have received D grade")
    }
    if (marks >= 0 && marks <=49) {
        console.log(name + " Student has failed")
    }
    else if(marks <= 0 || marks >= 100) {
    console.log("Invalid marks")
}
}