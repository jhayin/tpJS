// Function to get the vowels from a given phrase
function getVowels(phrase) {
    // Define the vowels
    const vowels = 'aeiouAEIOU';
    let vowelCounts = {};

    // Loop through the phrase
    for (let i = 0; i < phrase.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(phrase[i])) {
            // If it is, increment its count or add it to the object
            if (vowelCounts[phrase[i]]) {
                vowelCounts[phrase[i]]++;
            } else {
                vowelCounts[phrase[i]] = 1;
            }
        }
    }

    // Return the vowel counts
    return vowelCounts;
}

// Get the user's input
const input = prompt('Enter a phrase:');

// Get the vowels and print them
const vowels = getVowels(input);
console.log('Vowels found in the phrase:');
document.write('Vocales en la frase: ');
for (let vowel in vowels) {
    console.log(vowel, vowels[vowel]);
    document.write(`<br/>${vowels[vowel]}-${vowel};`);
}