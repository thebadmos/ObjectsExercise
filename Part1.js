//1.Create an object that has your firstName, lastName, and occupation as keys.
var details= {
    firstName:"Olamiji",
    lastName:"Badmos",
    occupation:"Unemployed"
};

//2.Access each value from your object using both dot notation and bracket notation.
Dot Notation:                                             Bracket Notation:
details.firstName;                                      details["firstName"];
details.lastName;                                       details["lastName"];
details.occupation;                                    details["occupation"];

//3. Add a key for hobby to your object. Remove the key and value for occupation.
details.hobby="i love reading";
details.hobby;
delete details.occupation;
details.hobby;

/*4.What is the difference between dot notation and bracket notation?
Dot Notation is used when the name of the key is known while bracket notation is used an expression is evaluate to get the name of the key.*/

//5.Given the following object below, write code to print the value then the key to the console separated by '=>':
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
    }
    console.log(namesAndHobbies.elie + ' ' + '=>' + ' ' + Object.keys(namesAndHobbies)[0]);
    console.log(namesAndHobbies.matt + ' ' + '=>' + ' ' + Object.keys(namesAndHobbies)[1]);
    console.log(namesAndHobbies.janey + ' ' + '=>' + ' ' + Object.keys(namesAndHobbies)[2]);
    console.log(namesAndHobbies.tim + ' ' + '=>' + ' ' + Object.keys(namesAndHobbies)[3]);
  
//6. Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.
namesAndHobbies.olamiji = "i love reading";
namesAndHobbies;

//7. Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing",
    olamiji: "i love reading"
    }
    
    if ("olamiji" in namesAndHobbies) {
    console.log(Object.keys(namesAndHobbies) [4] + ' ' + namesAndHobbies.olamiji)
    } else {
    console.log("That Name Does Not Exist");
    }
    


