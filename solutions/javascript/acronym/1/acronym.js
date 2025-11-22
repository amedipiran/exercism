//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  str = str.split(/[- ]/).filter(word => word.length > 0);
  let result = '';

  for (const word of str) {
    const match = word.match(/[A-Za-z]/);
    if (match) {
      result += match[0].toUpperCase();
    }
  }


  console.log(str)

  return result;
};
