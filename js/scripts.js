function firstLastCaps(input) {
  const stringLength = input.length;                                                              // gets length of entire string
  const newString = input.charAt(0).toUpperCase() + input.charAt(stringLength - 1).toUpperCase(); // concatenates
  return newString;
}

function reverseTwoCharacters(input) {             // Function simply to reverse two characters
  const firstCaps = input.charAt(0).toUpperCase(); // converts first character to upper
  const lastCaps = input.charAt(1).toUpperCase();  // converts last character to upper
  const newString = lastCaps + firstCaps;          // concatenates

  return newString;
}

function reverseFirstLastCaps(input) {                 // Function to call the prev two functions
  const toReverse = this.firstLastCaps(input);         // Calls first function
  return input + this.reverseTwoCharacters(toReverse); // Calls second function
}

function middleToFirst(input) {                          // Adds middle character to beginning of string
  const stringLength = input.length;                     // gets length of entire string
  const halfStringLength = Math.floor(stringLength / 2); // determines half string length (rounded down)  
  const charAtHalf = input.charAt(halfStringLength);     // gets middle character in string (rounded down)  
  return charAtHalf + this.reverseFirstLastCaps(input);  // concatenates middle character to beginning of encrypted string
}

function reverseString(input) {
  const testString = this.middleToFirst(input);      // Performs first three functions
  var newString = "";                                // new string for the reversed characters to load into
  for (var i = testString.length - 1; i >= 0; i--) { // backwards array, grab characters in reverse 
    newString += testString[i];                      // append character to string
  }

  return newString;
}

$(document).ready(function() {                     // Waits until the page is loaded before it functions
  $("form#firstLastCaps").submit(function(event) { //
    event.preventDefault();                        //
    const userInput = $("#firstLastCaps1").val();  //
    const result = reverseString(userInput);       // this is the function that is called, that when the button is clicked it will affect the webpage
    $("#output").text(result);                     //
  });
});