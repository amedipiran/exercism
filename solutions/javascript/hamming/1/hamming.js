//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna, otherDna) => {
  let counts = 0;

  if(dna.length !== otherDna.length) throw new Error("strands must be of equal length")
  
  for(let i = 0; i < dna.length; i++){
    if(dna[i] !== otherDna[i]) counts++;
  }

  return counts;
};
