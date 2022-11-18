// Using any linear search algorithm and a time complexity of O(n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr1.

const arr1 = [1, 34, 5, 2, 23, 9, 12, 17, 12, 10, 25];

const linearSearch = (arr, target) => {


    for (let i of arr) {
        if (i === target) {
            return i
        }
    }
    return -1

}

// console.log(linearSearch(arr1, 12))

//! ########################################################################################

// Using any binary search algorithm and a time complexity of O(n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr1.

const binarySearch = (arr, target) => {

    let sorted = arr.sort((a, b) => a - b)
    let min = 0;
    let max = sorted.length - 1

    // sort array

    while (min <= max) {
        let middleIndex = Math.floor((min + max) / 2)

        if (arr[middleIndex] === target) {
            return arr[middleIndex];
        } else if (arr[middleIndex] > target) {
            max = middleIndex - 1
        } else {
            min = middleIndex + 1
        }
    }
    return -1
}

// console.log(binarySearch(arr1, 2))

//! ########################################################################################

// Using the recursive binary search algorithm and a time complexity of O(log n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr2.

const arr2 = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20];

const recursiveBinarySearch = (arr, target, start = 0, end = arr2.length - 1) => {

    if (start > end) return -1
    if (!arr.length) return arr

    let middleIndex = Math.floor((start + end) / 2)

    if (target === arr[middleIndex]) {
        return arr[middleIndex]
    } else if (arr[middleIndex] > target) {
        return recursiveBinarySearch(arr, target, start, end - 1)
    } else {
        return recursiveBinarySearch(arr, target, start + 1, end)
    }
}

// console.log(recursiveBinarySearch(arr2, 12))

//! ########################################################################################

// Using the iterative binary search algorithm and a time complexity of O(log n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr2.


// const arr2 = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20];

const iterativeBinarySearch = (arr, target) => {

    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middleIndex = Math.floor((min + max) / 2)

        if (arr[middleIndex] === target) {
            return arr[middleIndex];
        } else if (arr[middleIndex] > target) {
            max = middleIndex - 1
        } else {
            min = middleIndex  + 1
        }
    }
    return -1

}

// console.log(iterativeBinarySearch(arr2, 12))

//! ########################################################################################

// Naive String Search
// Return the frequency count of occurence of the word "dog" in "deladogomydog"
// function SHOULD return 2 since 'dog' occurs twice in the long string
// Algorithm should use a time complexity of O(n * m)

const long = 'deladogomydog';
const short = 'dog'

const naiveSearch = (long, short) => {
    let count = 0

    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i + j]) break
            if(j === short.length - 1) count ++
        }
    }
    return count
}

//console.log(naiveSearch(long, short))

//! ########################################################################################
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of
// the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// /**
// * @param {number[]} nums
// * @return {void} Do not return anything, modify nums in-place instead.
// */

var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length ; i++) {
        if(nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)
        }
    }
      
   return nums
}
  
// console.log(moveZeroes([0,1,0,3,12]))
// console.log(moveZeroes([0]))

//! ########################################################################################

// Example 1:
// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.

// Example 2:
// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.

var isLongPressedName = function(name, typed) {

    // edge cases
    if (name.length < 1 || typed.length > 1000 || name.length > typed.length) return false
    
    let n = 0;
    let t = 0;

    while (n < name.length || t < typed.length ){
        if (name[n] === typed[t]){
            n++
            t++
        } else if (name[n - 1] === typed[t]) {
            t++
        } else {
            return false;
        }
    } 
    return true;
}

// console.log(isLongPressedName("alex","aaleex"))
// console.log(isLongPressedName("saeed","ssaaedd"))

//! ########################################################################################

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in
// the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the
// missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the
// missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the
// missing number in the range since it does not appear in nums.
// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

// /**
// * @param {number[]} nums
// * @return {number}
// */

const missingNumber = (nums) => {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) { 
        sum += i + 1 - nums[i]
//       0 +   0 + 1 - 3 = -2
//      -2 +   1 + 1 - 0 = 0
//       0 +   2 + 1 - 1 = 2
        
    }

    return sum;
}

// console.log(missingNumber([3,0,1]))