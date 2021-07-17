const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 -> 16 bytes of storage || 32 Bits System

// console.log(strings[2]); // Big O(1)

// Push
strings.push('e'); // Big O(1)

// Pop
strings.pop(); // Big O(1)
strings.pop();

// Unshift
strings.unshift('z'); // Big O(n)


// Splice
strings.splice(2,0, 'Alien'); // Big O(n/2) -> Big O(n)

console.log(strings);

