//Part 1: Thinking Functionally
//I would have preferred this one because it is easy to read, understand and efficient.

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('class'))

//Take an array of numbers and return the sum.

// const totalSum = sumArray([2, 5, 65, 66, 65, 87, 68]);

// function sumArray(numbers) {
//     let total = 0; 
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]; // Add each number to make up the total
//     }
//     return total; 

// } 
// console.log(totalSum); 

// // //Take an array of numbers and return the average.

// function sumAverage(numbers) {
//     const total = sumArray(numbers); // Calculate total using sumArray
//     const average = total / numbers.length; // Calculate average
//     return average;
// }

// const numbers = [2, 5, 65, 66, 65, 87, 68]; // Define the array of numbers
// const avg = sumAverage(numbers); // Calculate the average

// console.log("Average:", avg); 

//Take an array of strings and return the longest string.
// const stringArray = ["apple", "pinneaple", "cherry", "blueberry", "watermelon"];
// function longestString(strings) {
//     let longest = ""; // Initializing the longest string to an empty string

//     for (let i = 0; i < strings.length; i++) {
//         if (strings[i].length > longest.length) {
//             longest = strings[i]; // Update longest if the current string is longer
//         }
//     }

//     return longest; 
// }

// const longest = longestString(stringArray); // Find the longest string

// console.log("Longest String:", longest); // Output: Longest String: blueberry

// // //Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// // function stringsLongerThan(strings, length) {

// const longerString= (array, minLength) => array.filter(str => str.length > minLength);
// const minLength = 6; // Specify the minimum length
// const longerStrings = longerString(stringArray, minLength); // Find strings longer than minLength

// console.log("Strings Longer Than", minLength, ":", longerStrings); 

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
// function printNumbers(n, current = 1) {
//     if (current > n) return; 
//     console.log(current); // Print the current number
//     printNumbers(n, current + 1); // Recursive call with incremented current
// }

// const n = 10; // Define the value of n
// printNumbers(n); // Call the function to print numbers from 1 to n

//Part 2: Thinking Methodically

//Sort the array by age.
// const elements = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//      { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//       { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//        { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

//        const sortedAgesString = elements
// //        // use map to create the new array of ages
//   .map(element => parseInt(element.age)) 
//   // use .Sort to sort the ages from lowest to the highest
//   .sort((a, b) => a - b) 
//   .join(", "); // Join them into a string

// console.log(sortedAgesString);

// // //Filter the array to remove entries with an age greater than 50.
// const filteredElements =elements.filter(element => parseInt(element.age) >50);
// console.log(filteredElements);
// // filteredElements.pop();
// console.log(elements); // verifying the original array was not modified


// // //Map the array to change the “occupation” key to “job” and increment every age by 1.
// const occupations = [
//   { occupationId: "42", occupation: "Runner" , age: "41"},
//   { occupationId: "48", occupation: "Knight" , age: "25"},
//   { occupationId: "57", occupation: "Fry Cook", age: "19" },
//   { occupationId:"63", occupation: "Quiz Master" , age: "58"},
//   { occupationId: "7", occupation: "None", age: "111"}
// ];

// // Change all occupations to "job" 

// const modifiedOccupations = occupations.map(obj => ({
//     occupationId:obj.occupationId,  // make this arguement to Keep other properties
//     job: obj.occupation, // Change occupation to "job"
//     age: parseInt(obj.age)  +1 //increase every age by 1
//   }));
  
//   console.log(modifiedOccupations);

//   //8Then use the result to calculate the average age.
//   let arr = [42, 26, 20, 59, 112];
//   function average(arr){
//     let sum = 0
//     arr.forEach(function(item, index){
//         sum+= item;
//     });
//     return sum / arr.length;
//   }
//   console.log(average(arr));

  //Part 3: Thinking Critically
//   const newElements = [{ id: "14", name: "Grace", occupation: "Chef", age: "36" },
//     { id: "15", name: "Jones", occupation: "Artist", age: "25" },
//      ];

//       const sortedNewElementsString = newElements
//       // use .map to convert age strings to numbers
//  .map(elements=> parseInt(elements.age) + 1) 
//  // use .Sort to sort the ages from lowest to the highest
//  .sort((a, b) => a - b) 
//  .join(", "); 
// console.log(sortedNewElementsString);

// //Take an object, make a copy, and increment the age field of the copy. Return the copy.
const properties = [{ id: "14", name: "Grace", occupation: "Chef", age: "36" },
    { id: "15", name: "Jones", occupation: "Artist", age: "25" },
     ];
     const propertiesDeepCopy = JSON.parse(JSON.stringify(properties)); // JSON.parse(JSON.stringify is used her to make a deepcopy and ensure the original object stays unchanged
     console.log(properties);

     const sortedProperties = properties
     .map(properties =>parseInt(properties.age) +2)
     .sort((a,b) => a-b)
     .join(",");
     console.log(sortedProperties);

//      // an updated_at field that stores a Date object with the current time.
        let date = new Date(); //date object that represents current date and time
         
        let updatedProperties = [{
        age: "0",  
     }];
     console.log("Updated Properties: " + JSON.stringify(updatedProperties) + ", Date: " + date);