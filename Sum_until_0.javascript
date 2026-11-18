/*
Repeatedly read integers from the user until they enter 0, then print the sum of all the numbers entered.
-Invalid input (empty or non-integer) should be rejected and the user asked again.
-Pressing Cancel on the prompt should stop the reading early.
*/

function sum(){
  let sum = 0;

  while(true){
    const text = prompt("Introdu un nr, 0 opreste citirea");

    if(text == null){
      break;
    }
    const number = Number(text);

    if(text.trim() == "" || !Number.isSafeInteger(number)){
      console.log("Introdu un nr valid.");
      continue;
    }
    if(number == 0){
      break;
    }
    sum = sum + number;

  }
  return sum;
}

console.log(`Suma tuturor nr introduse este ${sum()}`);
