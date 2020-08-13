/**
 * Takes in a single number, and returns the sum of all numbers from 0 to n
 * @timeComplexity O(1) - Constant Time
 * @param {number} num - The number to calculate the sum of all numbers up to n
 * @returns {number} - The sum of all numbers from 0 to n.
 */
export function sumUpTo(num: number): number {
  return (num / 2) * (1 + num);
}
