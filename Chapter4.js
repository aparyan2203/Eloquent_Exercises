//Q1
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
