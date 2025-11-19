//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let newMap = {};

  for(const [number, letter] of Object.entries(old)) {
    for(const l of letter) {
      newMap[(l.toLowerCase())] = Number(number)
    }
  }

  return newMap;
};
