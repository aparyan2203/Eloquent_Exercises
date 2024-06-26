//Q1
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

var temp='#'
for(let i=1;i<=7;i++){
    console.log(temp);
    temp+='#';
}

//Q2
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
for(let i=1;i<=100;i++){
    var ans="";
    if(i%3==0) ans+='Fizz';
    if(i%5==0) ans+='Buzz';
    console.log(ans || i);
}

//Q3
//Print this pattern
// #
// ##
// ###
// ####
// #####
// ######
// #######
for(let i=0;i<8;i++){
    var ans=""
    for(let j=0;j<8;j++){
        if((i+j)%2) ans+='#';
        else ans+=' ';
    }
    console.log(ans) 
}