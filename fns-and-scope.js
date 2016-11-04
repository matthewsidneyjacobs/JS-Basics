//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name) {
    if (name === 'Tyler') {
      return true;
    }
    else {
      return false;
    }
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName() {
    var result = prompt("What is your name?");
    return result;
  }


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome() {
    // function getName() {
    //   var result = prompt("What is your name?");
    //   return result;
    // }
    getName();
    alert("Welcome, " + getName());
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  //parameter is a variable when you define a method. an argument is the data
  //you pass in when you call the function.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
 //if (val).  if val checks to truthy, then you will continue with whatever the next step is.
 //0, false, '', null, NaN, undefined.


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
    return "sid";
  }



//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName
  alert(newMyName);


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn() {
    function getName() {
      return "sid";
    }
    return getName;
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = function() {
    outerFn();
    return getName();
  }

//Now invoke innerFn.
  innerFn();
