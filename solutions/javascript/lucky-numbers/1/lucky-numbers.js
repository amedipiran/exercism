// @ts-check

export function calculateStringSum(arr) {
  let str = '';

  for(let i = 0; i < arr.length; i++){
    if(arr[1] === 0) {
      continue;
    } else {
      str += String(arr[i]);
    }
  }

  return Number(str);
}

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return calculateStringSum(array1) + calculateStringSum(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  value = String(value);
  const reversedValue = value.split("").reverse();

  for(let i = 0; i < value.length; i++){
    if(value[i] != reversedValue[i]) return false;
  }

  return true;
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === '' || input === null || input === undefined) return "Required field";

  const value = Number(input);

  if(Number.isNaN(value) || value === 0) return 'Must be a number besides 0';

  return '';
}
