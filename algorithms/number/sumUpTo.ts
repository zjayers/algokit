import { Monitor } from "../../performance/monitor";

/**
 * Takes in a single number, and returns the sum of all numbers from 0 to n
 * @timeComplexity O(1) - Constant Time
 * @param {number} num - The number to calculate the sum of all numbers up to n
 * @param {boolean} [log] - Log the time monitor to the console?
 * @returns {number} - The sum of all numbers from 0 to n.
 */
export function sumUpTo(num: number, log: boolean = false): number {
  const mn = new Monitor();
  log && mn.startMonitor();

  const result = (num / 2) * (1 + num);

  log && console.log(mn.stopMonitor());

  // Return the result
  return result;
}
