/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */


let number = 1;

while(number <= 100){
    if(number%3 === 0 && number%5 !== 0){
        console.log("Fizz");
    }else if(number%5 === 0 && number%3 !== 0){
        console.log("Buzz");
    }else if(number%3 === 0 && number%5 === 0){
        console.log("FizzBuzz");
    }else{
        console.log(number);
    }
    number++
}