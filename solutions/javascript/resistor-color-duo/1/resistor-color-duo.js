//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (array) => {
  return Number(`${COLORS.indexOf(array[0])}${COLORS.indexOf(array[1])}`)
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
