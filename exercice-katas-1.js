/**
 Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3 
 */

'use strict';

let triangle = "#"; 


for(let conditiontriangle = 0; conditiontriangle<8; conditiontriangle++){
    
    console.log(triangle)
    triangle += "#";

 //   console.log(triangle.length); --> permet de savoir la longueur de la chaines de caractère
};