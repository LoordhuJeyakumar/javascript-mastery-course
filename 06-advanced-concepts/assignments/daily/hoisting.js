// hoisting.js
// 🎯 Assignment: Hoisting Mastery

/*
  PROBLEM 1: Prediction
  Predict what will be logged to the console without running the code first.

  console.log(x);
  var x = 10;

  console.log(y);
  let y = 20;
*/

// Hint: Remember the difference between 'var' and 'let' regarding initialization.


/*
  PROBLEM 2: Function Mystery
  What happens when you call 'myFunc()' before its definition in these two cases?

  CASE A:
  myFunc();
  function myFunc() { console.log("A"); }

  CASE B:
  myFuncExpr();
  var myFuncExpr = function() { console.log("B"); }
*/

// Hint: Function declarations vs Function expressions. Which one is hoisted entirely?


/*
  PROBLEM 3: Fix the Bug
  The following code should log "The score is: 100", but it throws an error. Fix it.

  showScore();
  const showScore = () => console.log("The score is: " + score);
  let score = 100;
*/

// Hint: Reorder the lines so variables are initialized before use.
