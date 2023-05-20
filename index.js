/*

- Callback = when we pass a function as an argument to another function
  - example: `forEach()`
  - example: `setTimeout()`

*/

function cookDinner(myCallback) {
  console.log('Preparing dinner...');
  setTimeout(function () {
    console.log('Dinner is ready');
    myCallback();
  }, 1000);
}

function eatDinner() {
  console.log('Eating dinner');
}

cookDinner(eatDinner); //notice: we don't have ()


/*


YOUR TASK:
- call the function "saveInfoInDatabase"
- saving the info in the DB takes 5 seconds...
- once the info is saved, we want to execute "updateUserInterface"
- note: use a callback (the function "saveInfoInDatabase" should be generic)

- (Bonus): 
  - before you execute the callback, check if it is actually a function (hint: typeof operator)

*/







function saveInfoInDatabase(CallBackFunction) {
  console.log('saving information in the database');
  // this operation takes 5 seconds....
  setTimeout(function () {
    if (typeof updateUserInterface === "function") {
      updateUserInterface();
      else {
        console.log('Hey,What do I do now?');
      }
  }, 5000);
}


saveInfoInDatabase(updateUserInterface);

function updateUserInterface() {
  console.log('updating user interface');
}



Fernando: 
function saveInfoInDatabase(callBackFunction) {
  console.log('saving information in the database');
  // this operation takes 5 seconds....
  setTimeout( function(){
    if (typeof callBackFunction === "function"){
    callBackFunction();
    }
  }, 5000)
}

function updateUserInterface() {
  console.log('updating user interface');
}

saveInfoInDatabase(updateUserInterface);





// Philippe Miossec: 

//function saveInfoInDatabase(CallBackFunction) {
//console.log('saving information in the database');
// this operation takes 5 seconds....
//setTimeout(() => {
//  if (typeof whatToDoAfter === 'function') {
//    whatToDoAfter();
//  } else {
//  }
//}, 5_000);