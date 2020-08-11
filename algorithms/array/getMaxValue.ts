import { Monitor } from "../../performance/monitor";

/**
 * Find Maximum Value In Array
 * @timeComplexity O(n) - Linear Time
 * @param {[number]} numbers - The array of numbers to find the maximum value of.
 * @param {boolean} [log] - Log the time monitor to the console?
 * @returns {number} - The maximum value in the array
 */
export function getMaxValue(numbers: [number], log: boolean = false): number {
  // Start the monitor
  const mn = new Monitor();
  log && mn.startMonitor();

  const lowestNumber = Math.max(...numbers);

  // Stop The Monitor & Report
  log && mn.stopMonitor();

  return lowestNumber;
}
