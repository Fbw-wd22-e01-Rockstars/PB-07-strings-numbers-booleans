// **Exercises to become familiar with the `string`, `number` and `boolean` data types**

// 1. Declare a variable and assign a string as its value. Make sure the string is at least 6 characters long. Print the variable to the console.

const firstName= "Syed Naqvi";
console.log(firstName);

// 2. Access the 2nd and 6th elements of the string using index notation. Print the elements to the console.
console.log(firstName[1], firstName[5])


// 3. Declare a variable called `name` and assign a string as its value. 

const name = "JavaScript";

// 4. Declare a variable called `age` and assign a number as its value. 

const age = 34;
// 5. Declare a variable called `year` and assign a number as its value. 

const year = 1992;


// 6. Using your declared variables, print a string to the console. For example, "Basem is 37 in 2020". 

console.log(name + " is " + age + " in " + year);
 
// 7. Declare a variable called `isMarried` and assign it a boolean value. 

const isMarried = true; 

// 8. Print a string to the console, indicating whether or not your person is married. For example, "Basem is married: true"

console.log("Basem is married: "+isMarried)

// 9. Declare a variable called `programmingLanguage` and assign "JavaScript" as its value. Declare a variable called `isFun` and give it a value of `true`.  Print "JavaScript is fun: true" to the console, using your declared variables. 

const programmingLanguage = "JavaScript";
const isFun = "true"; 
console.log(programmingLanguage +" is fun: "+isFun)

// 10. Print the `J` and `S` of "JavaScript" from the variable `programmingLanguage` to the console. 
console.log(programmingLanguage.charAt(0), programmingLanguage.charAt(4))

// 11. Print the length of the string "JavaScript" to the console.
console.log(programmingLanguage.length)