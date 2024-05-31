//Q1
// Define the function min that takes two arguments and returns their minimum.
const min = (a,b) => {
    return a<b ? a : b;
}

//Q2
// define whether a positive whole number is even or odd:
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
const isEven = (n) => {
    var num = Math.abs(n);
    if(num==0) return true;
    else if(num==1) return false;
    return isEven(num-2);
}

//Q3
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.
const countBs = (str) => {
    return countChar(str,'B');
}

const countChar = (str, c) => {
    let cnt=0;
    for(let i of str) cnt+=(i==c);
    return cnt;
}
