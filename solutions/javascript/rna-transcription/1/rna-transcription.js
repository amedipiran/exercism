//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let result = '';
  const strands = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  }

  for(const char of dna) {
    result += strands[char];
  }

  return result;
};
