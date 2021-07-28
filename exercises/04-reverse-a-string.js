// Creatre a function that reverses a string:
// 'Hi Name is Andrei' should be:
// 'ierdnA si eman yM iH'

// Big O(n)

function reverse(str) {
    if( typeof str != 'string') {
        return 'Insert a string';
    }
    const backwards = [];
    for( let i = str.length - 1; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
};

function reverse2(str = '') {
    return str.split('').reverse().join('');
}

const reverse3 = (str = '') => [...str].reverse().join('');


console.log(reverse3('I am Rafael Velazco'));
