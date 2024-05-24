//Q1
const min = (a,b) => {
    return a<b ? a : b;
}

//Q2
const isEven = (n) => {
    var num = Math.abs(n);
    if(num==0) return true;
    else if(num==1) return false;
    return isEven(num-2);
}

//Q3
const countBs = (str) => {
    return countChar(str,'B');
}

const countChar = (str, c) => {
    let cnt=0;
    for(let i of str) cnt+=(i==c);
    return cnt;
}
