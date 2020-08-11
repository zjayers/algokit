import { Monitor } from "../../performance/monitor";

/**
 * Adds up all numbers inside of an Array in linear time
 * @timeComplexity: 0(n) - Linear Time
 * @param {[number]} numbers - The array of numbers to calculate the sum of
 * @param {boolean} [log] - Log the time monitor to the console?
 * @returns {number} - The sum of all numbers in the array.
 */
export function getSum(numbers: [number], log: boolean = false): number {
  // Create the monitoring tool
  const mn = new Monitor();
  log && mn.startMonitor();

  // Determine the sum of the numbers
  let sum = 0;

  // Loop through the numbers and add them to the sum
  for (const number of numbers) {
    sum += number;
  }

  // Stop the monitoring tool
  log && mn.stopMonitor();

  return sum;
}
