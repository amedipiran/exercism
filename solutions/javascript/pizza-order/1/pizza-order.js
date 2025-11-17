/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export let calucaltedPrice = 0;

export function pizzaPrice(pizza, ...extras) {
  const basePrices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10
  }

  const basePrice = basePrices[pizza];

  function sumOptions(list) {
    if(list.length === 0) return 0;

    const first = list[0];
    let cost = 0;
    if(first === "ExtraToppings") {
      cost = 2;
    } else if(first === "ExtraSauce") {
      cost = 1
    }

    return cost + sumOptions(list.slice(1));
  }
  

  return basePrice + sumOptions(extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(orders) {
  const basePrices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10
  };

  const extraPrices = {
    ExtraSauce: 1,
    ExtraToppings: 2
  };

  let total = 0;

  for (let order of orders) {
    total += basePrices[order.pizza];

    for (let extra of order.extras) {
      total += extraPrices[extra];
    }
  }

  return total;
}
