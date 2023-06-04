///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/

//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE
const greetUser = (userName) => {
  console.log("Welcome back,", userName);
};
// greetUser("George Bailey");
//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206];

//CODE HERE
const canWeDeliver = (zipCode) => {
  //loop over the array of acceptable zip codes and check to see if any index is equal to the zip code entered in the function.
  for (let i = 0; i < deliveryAreaZipCodes.length; i++) {
    //conver zipCode string to number to avoid false negative
    if (+zipCode === deliveryAreaZipCodes[i]) {
      //truthy should return, exiting the function with the approptiate string. No need to check further.
      return "You're in our delivery zone!";
    }
  }
  //if the funtion did not return during the for loop, then the zip code was not found. return the apppropaite stirng for zip code not found.
  return "Sorry, we can't deliver to that address";
};

/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE

const canWeDeliverTwo = (zipCode) => {
  if (deliveryAreaZipCodes.includes(+zipCode)) {
    return "You're in our delivery zone!";
  }
  return "Sorry, we can't deliver to that address";
};

////////TESTING//////////
// console.log("index 0: ");
// console.log(canWeDeliverTwo(85205));
// console.log("index 1: ");
// console.log(canWeDeliverTwo(85204));
// console.log("index 2: ");
// console.log(canWeDeliverTwo(" 85203"));
// console.log("index 3: ");
// console.log(canWeDeliverTwo("85213"));
// console.log("index 4: ");
// console.log(canWeDeliverTwo(85206));
// console.log("FALSE values: ");
// console.log(canWeDeliverTwo(5205));
// console.log(canWeDeliverTwo("85205"));
//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
  {
    title: "15% Off!",
    desc: "Applied to your entire order when you spend $30 or more",
  },
  {
    title: "Free Kids Meal with 2 Regular Entrees",
    desc: "   This deal lasts until the end of March! ",
  },
];

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE
// let string1 =  "15% Off!"
// string1.replace('15', '10')
// console.log(string1)
// console.log(deals[0].title);
let newTitle = deals.title.replace('15', '10');
console.log(newTitle);
/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE
