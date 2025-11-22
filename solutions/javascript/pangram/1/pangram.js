//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (word) => {
  let alphabet = [];

  word = word.toLowerCase()

  for(let i = 0; i < 26; i++){
    alphabet.push(String.fromCharCode(i + 97))
  }

   for (let i = 0; i < word.length; i++) {
    const index = alphabet.indexOf(word[i]);
    if (index !== -1) {
      alphabet.splice(index, 1);
    }
  }


  return alphabet.length === 0;
};
