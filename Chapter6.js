//Q1
// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), that it saves to properties of the same name.
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
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
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
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
