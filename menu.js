///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/
//CODE HERE
const pizza = {
  name: "Pizza",
  price: 15,
  category: "entree",
  popularity: 5,
  rating: 4.5,
  tags: ["family", "delivery", "dine-in", "gluten heavy"],
};

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/
//CODE HERE
console.log(pizza.popularity);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/
console.log(pizza.tags[1]);
console.log(pizza["tags"]);
//CODE HERE

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/
//CODE HERE
let { price } = pizza;
console.log("the price of", pizza.name, "is $", price);

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/
//CODE HERE
let { category } = pizza;
console.log(pizza.name, "is in the category of", category);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/
//CODE HERE
let foodArr = [
  {
    name: "breadsticks",
    price: 7,
    category: "appetizer",
    popularity: 4,
    rating: 4,
    tags: ["sharable", "dine-in only", "bottomless", "vegetarian"],
  },
  {
    name: "tea",
    price: 2,
    category: "beverage",
    popularity: 3,
    rating: 3.5,
    tags: ["free refills", "caffine-free", "dine-in only"],
  },
  {
    name: "lasagna",
    price: 12,
    category: "entree",
    popularity: 5,
    rating: 5,
    tags: ["vegetarian", "large", "take-out"],
  },
  {
    name: "pasta",
    price: 11,
    category: "entree",
    popularity: 2,
    rating: 3,
    tags: ["family", "sharable"],
  },
  {
    name: "tiramisu ",
    price: 9,
    category: "dessert",
    popularity: 4,
    rating: 5,
    tags: ["decadent", "dine-in", "take-out"],
  },
];

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/
//CODE HERE

// Use .filter to loop over the array, with the callback function for the filter being a find method. The find uses dot notation to look up the key "tags" at each object and then checks for "take-out" in that array (the tags array). If this is true, then the filter method evalutates true for that object. This whoudl return the lasagna and tiramisu objects for fooArr.

//////////////////////COMPELTED PROBLEM 4 /////////////////////////
const filteredFood = foodArr.filter((element) =>
  element.tags.find((food) => food === "take-out")
);
console.log('These menu items are available for take-out: ', filteredFood);

///////PROVIDED CODE ////////////////
/////////////////////NOT USED ////////////////
////// const filteredFood = foodArr.filter(/* CALLBACK HERE */)

//////////////////PROBLEM 5////////////////////
/* 

    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array


    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
console.log("\nBEGIN PROBLEM 5:\n");
//set variables to be invoked by filterByProperty function to test diff values
let property1 = "price";
let num1 = 10;
let type1 = "above";

//////////////////////OPTION 1 , delcare callbacks ///////////////////////
// const filterByProperty = (property, number, type) => {
//   let filterFoodArr;
//   const aboveCallback = (food) => food[property] > number;
//   const belowCallback = (food) => food[property] < number;
//   if (type === "above") {
//     filterFoodArr = foodArr.filter(aboveCallback);
//   }
//   if (type === "below") {
//     filterFoodArr = foodArr.filter(belowCallback);

//   }
//   console.log(`the following menu items have a ${property} ${type} ${number}`);
//   console.log(filterFoodArr);
// };

//////////////////////OPTION 2, anonymous functions ///////////////////////////
//////////////////////// with simplified printout  //////////////////////////////////
const filterByProperty = (property, number, type) => {
  let filterFoodArr;
  if (type === "above") {
    filterFoodArr = foodArr.filter((e) => e[property] > number);
  }
  if (type === "below") {
    filterFoodArr = foodArr.filter((e) => e[property] < number);
  }
  console.log(`the following menu items have a ${property} ${type} ${number}:`);
  //loop over the resulting array and print the name of the menu items only
  for (let i = 0; i < filterFoodArr.length; i++) {
    console.log(filterFoodArr[i].name);
  }
};
// invoke the function with the viarbles declared above
filterByProperty(property1, num1, type1);
/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/
