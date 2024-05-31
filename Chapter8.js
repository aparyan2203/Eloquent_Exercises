//Q1
// Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
// Make sure you handle only the exceptions you are trying to handle.
const reliableMultiply = (a,b) => {
    while(true){
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if(!(error instanceof MultiplicatorUnitFailure)){
                throw error;
            }
        }
    }
}

//Q2
// Consider the following (rather contrived) object:
// const box = new class {
//   locked = true;
//   #content = [];
//   unlock() { this.locked = false; }
//   lock() { this.locked = true;  }
//   get content() {
//     if (this.locked) throw new Error("Locked!");
//     return this.#content;
//   }
// };
// It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.
// Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.
function withBoxUnlocked(val) {
    let lock_check = box.locked;
    if (lock_check) box.unlock();
    try {
      return val();
    } finally {
      if (lock_check) box.lock();
    }
}
