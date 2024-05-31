//Q1
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// As a BONUS assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
const range = (start, end, step = start <= end ? 1 : -1) => {
    let arr=[];
    if(step > 0){
        for(let i=start;i<=end;i+=step) arr.push(i);
    }
    else{
        for(let i=start;i>=end;i+=step) arr.push(i);
    }
    return arr;
}

const sum = (arr) => {
    let ans=0;
    for(let i of arr) ans+=i;
    return ans;
}

//Q2
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as argument by reversing its elements. Neither may use the standard reverse method.
const reverseArray = (arr) => {
    let ans=[];
    for(let i=arr.length-1;i>=0;i--) ans.push(arr[i]);
    return ans;
}
const reverseArrayInPlace = (arr) => {
    let ans=[];
    let n = arr.length;
    for(let i=0;i<n/2;i++){
        let temp = arr[i];
        arr[i]=arr[n-i-1];
        arr[n-i-1]=temp;
    }
    return arr;
}

//Q3
// As generic blobs of values, objects can be used to build all sorts of data structures. A common data structure is the list (not to be confused with arrays). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on:
// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.
// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
const arrayToList = (arr) => {
    let head=null;
    for(let i=arr.length-1;i>=0;i--) head={value: arr[i], rest: head};
    return head;
}

const listToArray = (list) => {
    let ans=[];
    while(list){
        ans.push(list.value);
        list=list.rest;
    }
    return ans;
} 

const prepend = (value, list) => {
    return {value, rest: list};
}
  
const nth = (list, n)=> {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

//Q4
// The == operator compares objects by identity, but sometimes you’d prefer to compare the values of their actual properties.
// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (using the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties of objects to compare them.
const deepEqual = (a,b) => {
    if(a===b) return true;
    if(!a || !b || typeof(a)!="object" || typeof(b)!="object") return false;
    let x=Object.keys(a), y=Object.keys(b);

    if(x.length!=y.length) return false;

    for(let i of x){
        if(!y.includes(i) || !deepEqual(a[i],b[i])) return false;
    }
    return true;
}
