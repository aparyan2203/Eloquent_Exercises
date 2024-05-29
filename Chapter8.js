//Q1
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
function withBoxUnlocked(val) {
    let lock_check = box.locked;
    if (lock_check) box.unlock();
    try {
      return val();
    } finally {
      if (lock_check) box.lock();
    }
}

//Q3
