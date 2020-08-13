/**
 * Adds up all numbers inside of an Array in linear time
 * @timeComplexity: 0(n) - Linear Time
 * @param {[number]} numbers - The array of numbers to calculate the sum of
 * @returns {number} - The sum of all numbers in the array.
 */
export function getSum(numbers: [number]): number {
  // Determine the sum of the numbers
  let sum = 0;

  // Loop through the numbers and add them to the sum
  for (const number of numbers) {
    sum += number;
  }

  return sum;
}
