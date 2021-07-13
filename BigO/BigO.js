// const nemo = ['nemo'];
// const everyone = ['subject', 'subject', 'subject', 'subject', 'nemo', 'subject', 'subject', 'subject', 'subject', 'subject'];

// const large = new Array(1000).fill('nemo');

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++){
//         if(array[i] === 'nemo'){
//             console.log('Found NEMO!');
//             break;
//         }
//     }
// }

// // findNemo(large); // O(n) ---> Linear Time || Big O depends on the number of Inputs
// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//     console.log(boxes[0]); // O(1)
//     console.log(boxes[1]); // O(1)
// };

// logFirstTwoBoxes(boxes); // O(2) ---> Constant Time

// function boooo(n) {
//     for(let i = 0; i < n.length; i++){
//         console.log('Booooo!');
//     }
// }


// boooo([1,2,3,4,5]); // O(1);

// function arrayOfHinTimes(n) {
//     let hiArray = [];
//     for(let i = 0; i < n; i++){
//         hiArray[i] = 'Hi';
//     }
//     return hiArray;
// }

// console.log(arrayOfHinTimes(5)); // O(n);


// Find 1st, Find Nth...
const array = [
    {
        tweet: 'tweet 1',
        date: 2012
    },
    {
        tweet: 'tweet 2',
        date: 2013
    },
    {
        tweet: 'tweet 3',
        date: 2014
    }];

console.log(array[0], array[array.length-1]);
