/*1. Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console.
myName(); // if your full name was Lionel Messi this function would return "Lionel Messi" 
Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".*/
function myName(){
    var myName = 'Olamiji Badmos';
 console.log(myName);
}

/*2. Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream, depending on what you get back from Math.random.
randomFood(); // either returns "pizza" or "ice cream"
Create a variable called numbers which is an array that contains the numbers 1 through 10.*/
    var favoriteFoods=["ice-cream","Pizza","Rice","Beans"];
    function randomFood(){
        var randomIndex = Math.floor(Math.random() * favoriteFoods.length);
     console.log(favoriteFoods[randomIndex]);
                         }
    
/*3. Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd. Here is what that might look like:
displayOddNumbers(); */
 var numbers = [1,2,3,4,5,6,7,8,9,10];
function displayOddNumbers(){
for(var i = 0; i < numbers.length; i++){
          if(numbers[i] % 2 !== 0){
     console.log(numbers[i]);
     }
  }
}

/*4. Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even. Here is what that might look like:
displayEvenNumbers(); */
	var numbers = [1,2,3,4,5,6,7,8,9,10];
function displayEvenNumbers(){
  for(var i = 0; i < numbers.length; i++){
     if(numbers[i] % 2 === 0){
     console.log(numbers[i]);
     }
  }
}

/*5 Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds
returnFirstOddNumber(); */
var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstOddNumber(){
 for(var i = 0; i < numbers.length; i++){
   if(numbers[i] % 2 !== 0){
    return numbers[i];
 }
 }
}
/* 6. Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds
returnFirstEvenNumber(); */
 var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstEvenNumber(){
 for(var i = 0; i < numbers.length; i++){
if(numbers[i] % 2 === 0){
return numbers[i];
 }
  }
}

/*7. Create a function called returnFirstHalf which returns the first half of the numbers array
returnFirstHalf(); */
	var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstHalf(){
 return numbers.slice(0,numbers.length/2);
}

/*8. Create a function called returnSecondHalf which returns the second half of the numbers array
returnSecondHalf(); */
var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnsecondHalf(){
  return numbers.slice(numbers.length/2);
}









