//Q1
const flatten = (arr) => {
    return arr.reduce((acc,val) => acc.concat(val),[]);
}

//Q2
const loop = (start, test, update, body) => {
    for(let i=start;test(i);i=update(i)) body(i)
}

//Q3
const every = (arr, test) => {
    return !arr.some((val) => !test(val));
}

//Q4