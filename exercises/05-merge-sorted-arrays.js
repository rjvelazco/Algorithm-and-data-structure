const arr1 = [0,3,4,31];
const arr2 = [4,6,30,];
// [ 0, 3, 4, 4, 6, 30, 31]

const mergeSortedArrays = (arr1 = [], arr2 = []) => {
    const length  = [...arr1, ...arr2].length;
    const mergedSortArray = [];
    let ite1 = 0;
    let ite2 = 0;

    // Check input
    if ( arr1.length === 0 ){
        return arr2;
    }
    if ( arr2.length === 0 ){
        return arr1;
    }

    for( let i = 0; i < length; i++){
        // This condition can be called: "shouldPushArr1Item()"
        if (arr1[ite1] < arr2[ite2] || !arr2[ite2]) {
            mergedSortArray.push(arr1[ite1]);
            ite1++;
        } else {
            mergedSortArray.push(arr2[ite2]);
            ite2++;
        }
    };
    return mergedSortArray;
};

const mergeSortedArrays2 = (arr1 = [], arr2 = []) => {
    const mergedSortArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    // Check input
    if ( arr1.length === 0 ){
        return arr2;
    }
    if ( arr2.length === 0 ){
        return arr1;
    }

    while(arr1Item || arr2Item) {
        if(!arr2Item || arr1Item < arr2Item){
            mergedSortArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergedSortArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }

    return mergedSortArray;
};



// Using array method sort();
const mergeSortedArraysSort = (arr1 = [], arr2 = []) => [...arr1, ...arr2].sort((a, b) => a - b);

// console.log(mergeSortedArraysSort(arr1, arr2));
console.log(mergeSortedArrays(arr1, arr2));
console.log(mergeSortedArrays2(arr1, arr2));
