//add
function add(num1,num2){
    return num1 + num2;
}

//subtract
function subtract(num1,num2){
    return num1 - num2;
}

//multiply
function multiply(num1,num2){
    return num1 * num2;
}

//divide
function divide(num1,num2){
    return num1 /num2;
}

//b. SayHello
var myFirstName = "Olamiji";
function sayHello(str){
    if(str === myFirstName){
        return "Hello Boss";
    }
    return "Hello " + str;
}

//c.average array
function average(arry){
    var total=0;
    for(var i=0; i<arry.length; i++){
total += arry[i];
    }
    return total/ arry.length;
    
}

//d.CreateStudent
function createStudent(firstName,lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
    }

//e. createStudent2
var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");
var students = [tim, matt, elie];

//f. findStudentByFirstName
function findStudentByFirstName(name){
    var lowerCasedName = name.toLowerCase();
    for(var i = 0; i < students.length; i++){
        if(students[i].firstName.toLowerCase() === lowerCasedName){
            return true;
        }
    }
    return false;
}

//g.extractEveryThird
function extractEveryThird(arry){
    var newArry = [];
    for(var i = 2; i < arry.length; i += 3){
        newArry.push(arry[i]);
    }
    return newArry;
}

//h.countEvensAndOdds
function countEvensAndOdds(arry){
    var count = {
        odd: 0,
        even: 0
    }
    for(var i = 0; i < arry.length; i++){
        if(arry[i] % 2 === 0){
            count.even++;
        } else {
            count.odd++;
        }
    }
    return count;
}

//g.