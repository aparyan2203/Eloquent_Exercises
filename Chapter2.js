//Q1
var temp='#'
for(let i=1;i<=7;i++){
    console.log(temp);
    temp+='#';
}

//Q2
for(let i=1;i<=100;i++){
    var ans="";
    if(i%3==0) ans+='Fizz';
    if(i%5==0) ans+='Buzz';
    console.log(ans || i);
}

//Q3
for(let i=0;i<8;i++){
    var ans=""
    for(let j=0;j<8;j++){
        if((i+j)%2) ans+='#';
        else ans+=' ';
    }
    console.log(ans) 
}