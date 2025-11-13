// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let min = 1000;
  let max = 9999;
  let randomNumber = Math.random() * (Math.ceil(max) - Math.floor(min)) + Math.floor(min)
  
  return `NCC-${randomNumber}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let min = 41000.0;
  let max = 42000.0;
  let randomNumber = Math.random() * (max - Math.floor(min)) + Math.floor(min)
  
  return randomNumber;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planets = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  const random = Math.floor(Math.random() * planets.length)
  
  return planets[random];
}
