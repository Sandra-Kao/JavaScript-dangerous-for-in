const arr = ['A', 'B', 'C']
Array.prototype.hereWeGo = ' →→→ Here We Go! ←←←';

// Avoid way
for (const prop in arr) {
    console.log(`${prop}: ${arr[prop]}`);
}

console.log('          ');
console.log('!!! Prototype should not be in the arr loop to print. !!!');
console.log('     Correct way:     ');

// Correct way
for (let i = 0; i < arr.length; i++) {

    console.log(`${i}: ${arr[i]}`);
}
