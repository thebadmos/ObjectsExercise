/*●	PrintDay*/
function printDay(num){
  var dates = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    };
    return dates[num];
  }

//lastElement
function lastElement(arr){
    return arr[arr.length-1];
  }

//numberCompare
function numberCompare(a,b){
    if(a === b){
      return 'Numbers are equal';
    } else if(a > b){
      return 'First is greater';
    }
    return 'Second is greater';
  }

//singleLetterCount
function singleLetterCount(str1, letter){
    var finalCount = 0;
    for(var i=0; i< str1.length; i++){
      if(str1[i].toLowerCase() === letter.toLowerCase()){
        finalCount++;
      }
    }
    return finalCount;
  }

//multipleLetterCount
function multipleLetterCount(str){
    var finalObj = {};
    for(var i =0; i< str.length; i++){
      if (!(str[i] in finalObj)){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }

//isPalindrome
function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  
    // for(var i =0; i<str.length/2; i++){
    //   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
    //     return false;
    //   }
    // }
    // return true;
  }
  