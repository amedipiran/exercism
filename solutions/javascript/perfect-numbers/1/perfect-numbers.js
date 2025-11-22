export const classify = (n) => {
// Place to store sum of diviseable
  let sum = 0;

  // Edge case if n is not positive
  if(n < 1) throw new Error("Classification is only possible for natural numbers.")

  //iterate and find all divisors of n
  for(let i = 0; i < n; i++){
    if(n % i === 0) {
      sum += i;
    }
  }

  return sum === n ? "perfect" : sum > n ? "abundant" : "deficient"
  
};
