function firstLastCaps(input) {
  const firstCaps = input.charAt(0).toUpperCase() // converts first character to upper
  const stringLength = input.length; // gets length of entire string
  const lastChar = input.charAt(stringLength - 1); // gets last character in string
  const lastCaps = lastChar.toUpperCase() // last character to upper
  const middleString = input.slice(1, (stringLength - 1)); // all characters in string EXCEPT first and last
  const newString = firstCaps + middleString + lastCaps; // concatenates

  return newString;
}

/**
function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}
**/

$(document).ready(function() {
  $("form#firstLastCaps").submit(function(event) {
    event.preventDefault();
    //const number1 = parseInt($("#firstLastCaps1").val());
    const number1 = $("#firstLastCaps1").val();
    //const number2 = parseInt($("#firstLastCaps2").val());
    const result = firstLastCaps(number1);
    $("#output").text(result);
  });
});