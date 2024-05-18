/*Minimum

Write a function min that takes two arguments and returns their minimum.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

*/

function Resultat() {
let firstnumber = +prompt("Entrer votre premier nombre",1);
let secondnumber  = +prompt("Entrer votre second nombre",2);

let resultat = (firstnumber > secondnumber) ? secondnumber : firstnumber;
console.log(resultat)
}


Resultat()