/*Given a positive integer N, print the first N terms of the Fibonacci sequence without using arrays.
The sequence starts with 0, 1, and every next term is the sum of the previous two.
Constraint: 1 ≤ N ≤ 79.
*/

function fibonacci(n){
  if(!Number.isSafeInteger(n) || n < 1 || n > 79){
    console.log("Alege un nr de la 1 la 79");
    return;
  }
  let a = 0;
  let b = 1;

  for(let i = 0; i < n; i++){
    console.log(a);
    const c = a + b;
    a = b;
    b = c;
  }
}
