//Q1
class Vec{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    plus(vec2){
        return new Vec(this.x + vec2.x, this.y + vec2.y);
    }
    minus(vec2){
        return new Vec(this.x - vec2.x, this.y - vec2.y);
    }
    get length(){
        var d1=this.x;
        var d2=this.y;
        return Math.sqrt(d1*d1 + d2*d2);
    }
}

//Q2
class Group {
    arr=[];
    add(val){
        if(!this.has(val)) this.arr.push(val);
    }

    delete(val){
        this.arr = this.arr.filter((num) => num!=val);
    }

    has(val){
        return this.arr.includes(val);
    }

    static from(temp){
        let grp = new Group;
        for(let i of temp) grp.add(i); 
        return grp;
    }
}

//Q3
