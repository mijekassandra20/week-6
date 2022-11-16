// Write a recursive function called reverseString which accepts a string and returns a new string in reverse.
// reverseString('tony') // 'ynot'
// reverseString('baker') // 'rekab'
function reverseString(str){

    if (!str) return undefined;
    if (str.length === 1) return str;

    let reverse = str[str.length - 1] + reverseString(str.slice(0, str.length - 1))

    return reverse;

}


console.log(reverseString(''))
console.log(reverseString('k'))
console.log(reverseString('tony'))
console.log(reverseString('baker'))

// ! ########################################################################################################

// Write a recursive function called palindrome which returns true 
// if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

const palindrome = (str) => {

    if (!str) return null;
    if (str.length === 2) return str[0] === str[str.length -1]
    if (str.length === 1) return true

    if (str[0] === str[str.length - 1]) {
        return palindrome(str.slice(1,-1))
    } else {
        return false
    }

}

// console.log(palindrome('t')) // true
// console.log(palindrome('yo')) // false
// console.log(palindrome('yy')) // true
// console.log(palindrome('tony')) // false
// console.log(palindrome('monkey')) // false
// console.log(palindrome('tacocat')) // true
// console.log(palindrome('sos')) // true

// ! ########################################################################################################

// Write a recursive function called flatTheArray which accepts an array of arrays 
// and returns a new array with all values flattened.

// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatTheArray([[1],[2],[3]]) // [1,2,3]
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatTheArray = (arr) => {

    if (!arr) return 0;

    let flat = []

    for (let n of arr){
        if (Array.isArray(n)){
            flat = flat.concat(flatTheArray(n))
        } else {
            flat.push(n)
        }
    }

   return flat;

}

// console.log(flatTheArray([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatTheArray([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatTheArray([[1],[2],[3]])) // [1,2,3]
// console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

// ! ########################################################################################################

// Write a recursive function called capitalizeTheFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirstLetter(['tony', 'truck']); // ['Tony', 'Truck']

const capitalizeFirstLetter = (array) => {

    if(!array.length) return [];

    result = array[0].split('')
    result[0] = result[0].toUpperCase()
    return [result.join('')].concat(capitalizeFirstLetter(array.slice(1)))

}

// console.log(capitalizeFirstLetter(['tony', 'truck'])); // ['Tony', 'Truck']
// console.log(capitalizeFirstLetter(['tonight', 'we', 'celebrate', 'our', 'love'])); // [ 'Tonight', 'We', 'Celebrate', 'Our', 'Love' ]

// ! ########################################################################################################

// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.
// let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']

const capitalizeAllLetters = (array) => {

    if(!array.length) return [];

    let result = []
    
    capitalized = result.push(array[0].toUpperCase())
    result = result.concat(capitalizeAllLetters(array.slice(1)))
    console.log(result)

    return result
    
}

// console.log(capitalizeAllLetters(['tony', 'kim'])); // ['TONY', 'KIM']
// console.log(capitalizeAllLetters(['multi', 'color', 'diamonds', 'like', 'the', 'rainbow'])); 


