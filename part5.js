//1. DisplayfullName
(function displayName(firstName, lastName){
    return firstName +  " " + lastName;
})("Olamiji", "Badmos");

//2.CreateCalculator
var calc = createCalculator();
function createCalculator(){
    return {
        add: function(a,b){
            return a + b;
        },
        subtract: function(a,b){
            return a - b;
        },
        multiply: function(a,b){
            return a * b;
        },
        divide: function(a,b){
            return a / b;
        }
    }
}
