function firstLastCaps(input) {
  const firstCaps = input.charAt(0).toUpperCase() // converts first character to upper
  const stringLength = input.length; // gets length of entire string
  const lastChar = input.charAt(stringLength - 1); // gets last character in string
  const lastCaps = lastChar.toUpperCase() // last character to upper
  const middleString = input.slice(1, (stringLength - 1)); // all characters in string EXCEPT first and last
  const newString = firstCaps + lastCaps; // concatenates
  // optimize later?
  return newString;
}

function reverseFirstLastCaps(input) {
  const firstCaps = input.charAt(0).toUpperCase() // converts first character to upper
  const stringLength = input.length; // gets length of entire string
  const lastChar = input.charAt(stringLength - 1); // gets last character in string
  const lastCaps = lastChar.toUpperCase() // last character to upper
  const middleString = input.slice(1, (stringLength - 1)); // all characters in string EXCEPT first and last
  const newString = lastCaps + firstCaps; // concatenates

  return newString;
}

$(document).ready(function() {
  $("form#firstLastCaps").submit(function(event) {
    event.preventDefault();
    //const number1 = parseInt($("#firstLastCaps1").val());
    const number1 = $("#firstLastCaps1").val();
    //const number2 = parseInt($("#firstLastCaps2").val());
    const result = reverseFirstLastCaps(number1); // this is the function that is called, that when the button is clicked it will affect the webpage
    $("#output").text(result);
  });
});