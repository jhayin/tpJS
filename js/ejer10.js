// Get the user's input
const input = parseInt(prompt('Enter a number:'));

// Function to check if a number is divisible by 2, 3, 5 or 7
function isDivisible(num) {
    // Define the divisors
    const divisors = [2, 3, 5, 7];
   // Loop through the divisors
    for (let i = 0; i < divisors.length; i++) {
        // Check if the number is divisible by the current divisor
        if (num % divisors[i] === 0) {
            // If it is, return true
            return true;
        }
    }
    // If none of the divisors work, return false
    return false;
}

// Check if the number is divisible by 2, 3, 5 or 7 and print the result
if (isDivisible(input)) {
    console.log(`'The number is divisible by 2, 3, 5 or 7. ${num}`);
    document.write('The number is divisible by 2, 3, 5 or 7.');
} else {
    console.log('The number is not divisible by 2, 3, 5 or 7.');
    document.write('The number is divisible by 2, 3, 5 or 7.');
}