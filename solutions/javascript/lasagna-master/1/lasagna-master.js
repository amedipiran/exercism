/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(minutes) {
  if (minutes === 0) {
      return "Lasagna is done."
  }
   if(minutes === undefined) {
    return "You forgot to set the timer."
  }

  return "Not done, please wait."
}

export function preparationTime(layers, minPerLayer = 2){
  return layers.length * minPerLayer;
}

export function quantities(arr) {
  let result = {
    noodles: 0,
    sauce: 0
  };

  for(let i = 0; i < arr.length; i++){
    let val = arr[i];
    if(val === "noodles") {
      result[val] += 50;
    } else if (val === "sauce"){
      result[val] += 0.2;
    }
  }

  return result;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, people = 1) {
  let scaled = {}
  
  for(const key in recipe) {
    scaled[key] = recipe[key] * (people / 2);
  }

  return scaled;

}