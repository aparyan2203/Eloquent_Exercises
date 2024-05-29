//Q1
function helper(state, robot, memory) {
    let steps = 0;
    while (state.parcels.length != 0) {
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      steps++;
    }
    return steps;
  }
  
  
  function compareRobots(robot1, memory1, robot2, memory2) {
    // Your code here
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < 100; i++) {
      let state = VillageState.random();
      sum1+=helper(state, robot1, memory1);
      sum2+=helper(state, robot2, memory2);
    }
    console.log(`${sum1/100} steps for robot 1`);
    console.log(`${sum2/100} steps for robot 2`);
  }

//Q2
function yourRobot({place, parcels}, route) {
  if (route.length === 0) {
    let routes = parcels.map(parcel => 
      parcel.place !== place 
        ? {route: findRoute(roadGraph, place, parcel.place), pickUp: true} 
        : {route: findRoute(roadGraph, place, parcel.address), pickUp: false}
    );

    const score = ({route, pickUp}) => (pickUp ? 0.5 : 0) - route.length;
    route = routes.reduce((best, current) => score(current) > score(best) ? current : best).route;
  }

  return {direction: route[0], memory: route.slice(1)};
}

//Q3
class PGroup {
  x;
  constructor(x) {
    this.x = x;
  }

  add(val) {
    if (this.has(val)) return this;
    return new PGroup(this.x.concat([val]));
  }

  delete(val) {
    if (!this.has(val)) return this;
    return new PGroup(this.x.filter(m => m !== val));
  }

  has(val) {
    return this.x.includes(val);
  }

  static empty = new PGroup([]);
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");
  