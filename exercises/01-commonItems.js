// Given 2 arrays, create a function that let's a user know (true/false) wheter these two arrays contain any common items.
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// Should return false.
// --------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
const array3 = ['z', 'y', 'i'];

// Faster
// Time Complexity - Big O(n^2)
// Speace complexity - Big O(n)
const constainsCommonItems = (arr1, arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return false;
    }
    // Loop through firts array and create object
    // where properties === items in the array
    
    // MapArrayToObject(arry1); -> New Function Here.
    const map = {};
    for(let i = 0; i < arr1.length; i++){
        const item = arr1[i];
        if(!map[item]){
            map[item] = true;
        }
    };

    // Loop through second array and check if item
    // in second array exists on created object
    
    // CompareArrayToObject(object, array); -> New Function Here.
    for(let i = 0; i < arr2.length; i++){
        const item = arr2[i];
        if(map[item]){
            return true;
        }
    }
    return false;
}

// More Readable
const constainsCommonItems2 = (arr1, arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return false;
    }
    return arr1.some( item => arr2.includes(item));
}

console.log( constainsCommonItems2(array1, array2) );
console.log( constainsCommonItems2(array1, array3) );
console.log( constainsCommonItems2(array2, null) );

// First try
// Time Complexity - Big O(n^2)
// Speace complexity - Big O(1)
// const constainsCommonItems = (arr, arr2) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j< arr2.length; j++){
//             if(arr[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// array1 ==> obj{
//  a: true,
//  b: true,
//  c: true,
//  d: true,
//  e: true
// }
// array2[index] === obj.properties