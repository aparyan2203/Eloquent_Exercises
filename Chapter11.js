//Q1
// The "camera_logs.txt" file holds a list of log files. Write an asynchronous function activityTable(day) that for a given day of the week returns an array of 24 numbers, one for each hour of the day, that hold the number of camera network traﬀic observations seen in that hour of the day. Days are identified by number using the system used by Date.getDay, where Sunday is 0 and Saturday is 6.
// The activityGraph function, provided by the sandbox, summarizes such a table into a string.
// To read the files, use the textFile function defined earlier—given a f, it returns a promise that resolves to the file’s content. Remember that new Date(t) creates a Date object for that time, which has getDay and
// getHours methods returning the day of the week and the hour of the day. Both types of files—the list of log files and the log files themselves—have
// each piece of data on its own line, separated by newline ("\n") characters.
async function activityTable(day) {
    let table = [];
    for (let i = 0; i < 24; i++) table[i] = 0;
  
    let log_files = await textFile("camera_logs.txt");
    for (let f of log_files.split("\n")) {
      let log = await textFile(f);
      for (let t of log.split("\n")) {
        let date = new Date(Number(t));
        if (date.getDay() == day) {
          table[date.getHours()]++;
        }
      }
    }
  
    return table;
  }
  
//Q2
//Rewrite same function using plain promises
function activityTable(day) {
    let table = [];
    for (let i = 0; i < 24; i++) table[i] = 0;
  
    return textFile("camera_logs.txt").then(files => {
      return Promise.all(files.split("\n").map(name => {
        return textFile(name).then(log => {
          for (let t of log.split("\n")) {
            let date = new Date(Number(t));
            if (date.getDay() == day) {
              table[date.getHours()]++;
            }
          }
        });
      }));
    }).then(() => table);
  }

//Q3
// As we saw, given an array of promises, Promise.all returns a promise that waits for all of the promises in the array to finish. It then succeeds, yielding an array of result values. If a promise in the array fails, the promise returned by all fails too, passing on the failure reason from the failing promise.
// Implement something like this yourself as a regular function called Promise_all .
// Remember that after a promise has succeeded or failed, it can’t succeed or fail again, and further calls to the functions that resolve it are ignored. This can simplify the way you handle failure of your promise.
function Promise_all(promises) {
    return new Promise((resolve, reject) => {
      let results = [];
      let pending = promises.length;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(result => {
          results[i] = result;
          pending--;
          if (pending == 0) resolve(results);
        }).catch(reject);
      }
      if (promises.length == 0) resolve(results);
    });
  }
  
  // Test code.
  Promise_all([]).then(array => {
    console.log("This should be []:", array);
  });
  function soon(val) {
    return new Promise(resolve => {
      setTimeout(() => resolve(val), Math.random() * 500);
    });
  }
  Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
  });
  Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
    console.log("We should not get here");
  }).catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });