
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.





// ------------------------------------------------------------
// MayanWolf, who has gone through the previous cohort, goes through a "P.R.E.P" process.  I'll try and
// emulate that here.

// P - (Parameters) - We'll be getting an array of numbers.  Will they always be numbers? How many numbers will we get?  If we get only two numbers, that removes both the lowest and highest numbers, so what should we return?

// R - (Return) - We should return the sum of all of the numbers in the array with the exception of the lowest and highest value of the numbers given.  If we are given an array with no elements, a list with only 1 number, we should return 0.

// E - (Examples) - Example: Three examples of what is considered a proper answer.
// * [1, 2, 3, 4]  -> 5
// * [9, 2, 0, 7]  -> 9
// * [2, 4, 6] -> 4

// P - (Pseudocode) - Example: In plain english our code will...
// Take an array, and give it a name.
// Sort the array in numerical order
// Make a new array that has all of the elements from the old array, with the exception of the first and last element.
// With that new array, get the sum of all the elements and return it.

// ------------------------------------------------------------


function sumArray(array) {
    let givenArray = array //Take an array, and give it a name.
    
    if (givenArray == null){
        return 0
      } else if (givenArray.length == 0 || givenArray.length == 1 || givenArray.length == 2) {
        return 0        // get rid of all the cases that won't work
      } else {
        let lowestToHighest = givenArray.sort((a, b) => a - b) //Sort the array in numerical order
        console.log(`Here is your sorted array: ${lowestToHighest}`) //console log to see if it sorted correctly
        lowestToHighest.shift()  //get rid of the first element
        lowestToHighest.pop()    //get rid of the last element
        const initialValue = 0;  //set an empty value
        const sumWithInitial = lowestToHighest.reduce(  //add up all the elements in the array
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
          )
        console.log(sumWithInitial) //console log the sum
        return sumWithInitial //return the sum without the lowest and highest value!
      }
      
    }


sumArray([9,8,7,6,5,4,3,2,1]) //should return 35 and it does!!!
// 
// 
// Make a new array that has all of the elements from the old array, with the exception of the first and last element.
// With that new array, get the sum of all the elements and return it.


