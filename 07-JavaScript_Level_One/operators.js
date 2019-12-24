alert("Hello");

/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop


// While Loop
let run = 0;

while (run < 5) {
  console.log("hello");
  run += 1;
}

// For Loop
for (var i = 0; i < 5; i++) {
  console.log("hello4");
}
/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
let startNum = 0;

while (startNum <=25) {
  if (startNum === 1) {
    console.log(startNum);
  } else if ((startNum % 2) === 1) {
    console.log(startNum);
  }
  startNum++
}

// METHOD TWO
// For Loop

for (var i = 0; i <= 25; i++) {
  if (i === 1) {
    console.log(i);
  } else if ((i%2)===1) {
    console.log(i);
  }
}
