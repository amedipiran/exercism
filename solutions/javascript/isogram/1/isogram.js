export const isIsogram = (word) => {

  if (word.length === 0 || word.length === 1) return true;
  
  const array = word.toLowerCase().split(/-| |(?=)/);
  const set = new Set([...array]);

  return array.length === set.size;
  
};
