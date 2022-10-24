1. the code displays the values of var type variable i which is 3. It is accessable outside the forloop scope because its var type. because the for-loop iterates only 3 times based on the length of the prices arguement passed to the discountPrices function.
2. after the third iteration of the for-loop. the prices argemtent is (300) when multiplied by (1 - discount) which is (1 - 0.5) will be 0.5. so (300 * 0.5) = 150. since the variable is of type var, it can be accessed outside the forloop and now it is printed to the display after 3rd iteration. ** line 13 is accessing and printing the variable discountedPrice **
3. since the final values of the discountedPrice is 150 after 3rd iteration, then at the next line the values is getting rounded after multiplying by 100, then it is divided by 100. meaning the values will still be 150. ** line 14 is accessign and printing the var typed variable finalPrice.
4. The function will return an array of the discounted prices of all the requested prices in the array of prices. because the function is iterating through the array of given in as arguement a list of prices to calculate the discount prices of each by the discount value 0.5.
5. The code will through an error, because the variable typed let can not be accessed outside its for-loop scope, however the code is accessing the variable i to be printed and that is an error.
6. The code will through an error, because the variable typed let can not be accessed outside its for-loop scope, however the code is accessing the cariable discountedPrice to be printed and that is an error.
7. The code will display the value of finalPrice which is 150 after third iteration. that is not an error in term of variable type because the variable is being accessed in it is scope.
8. The function will return an array of the discounted prices of all the requested prices in the array of prices. This will not cause an error eventhough the variables are declered as let variable type, because they are only being accessed in their funtion scope.
9. The code will through an error, because the variable typed const can not be accessed outside its for-loop scope, however the code is accessing the variable i to be printed and that is an error. the variable discount is being declaired as const meaning it can not be modefied.
10. The code displays the length of the prices array passed to the function as an arguement, in this example 3. there will be no error, since the code is never reagining the variable value of length. remains constant throught.
11. The function will return an array of [Function: discountPrices] elements, so-called empty array. We know that variable declared as const can not be or wont be modified. but here since Javascript is a web developlopment language it wont through an error to continue the web-rendering and page readablity for useful valued variable or data.
12. student object
    > A: student.name
    > B: student["Grad Year"]
    > C: student.greeting()
    > D: student["Favorite Teacher"].name
    > E: student.courseLoad[0]
13. Arthmetics
    > A: '32'               becase '3' is a string, concatination will occure
    > B: 1                  becase - is not a concatination, now subtraction will occure since 2 is an integer                
    > C: 3                  because null is non-value, the original number will be returned, no arthmetics
    > D: '3null'            because we '3' is a string then Java Script will turn null into string and contantonate
    > E: 4                  since true === 1, then it is will just add 1 to integer 3
    > F: 0                  since false  === 0, and null is non-value, then it will return 0 as false and no rthmetics
    > G: '3undefined'       because '3' is a string and + means concatonation in this case
    > H: Nan                because string can not be subtracted "arthmetic operation" then nothing will occure, resulting Not-a-number
14. Comparison
    > A: True               convert string to number then comaprison --> true that 2 > 1
    > B: False              Non-number comparison, always convert to NaN which is always false
    > C: True               Can be converted (different types) and both equal --> true
    > D: False              they are not strictly equal because of their data type
    > E: False              true is considered 1
    > F: True               boolean(2) returns true, so they are stricly equal
15. The primary distinction between the == and === operators in Javascript is that the former converts the operands' data types before comparison, whereas the latter compares both the operands' values and their data types.
16. see file part2-question16.js
17. The result is [ 2, 4, 6 ]. the function modifyArray is called with two parameters (one array, and another function (callback function)). first the function is instantiating a empty array to store the final result (line 2). (line 3) for loop to iterate as much as number of members of the array passed in. (line 4) new value is stored in array newArr which is the value returned from calling the second parameter function callback passing in the first element of the array. (line 6) just returns the complete resulting array. (line 9) is a function which takes an arguement which is basically an object datatype which can be used as a variable in JavaScript. (line 10) simple arthmetic
18. see file part2-question18.js
19. > 1
    > 4
    > 3
    > 2