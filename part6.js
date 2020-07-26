/*1.var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName()*/
Output: Tim
//'Tim' is returned because the name variable defined in the function scope is also return.

/*2. console.log(firstName) // ?
var firstName = "Elie"
Output: undefined because the var firstName is hoisted to the top of the code */

/*3. console.log(firstName) // ?
firstName = 'Elie'
Output: This returned a reference error since the variable doesn't contain var keyword and such varaibles are not hoisted*/

/*4.function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}
sayHi(); 
Output: "Hi undefined",the firstName variable uses the var keyword which is hoisted at the top and it's value is initialized to undefined.
 */

 /*5. sayHi() // ?

function sayHi(){
    return 'Hi!';
}


*/ 