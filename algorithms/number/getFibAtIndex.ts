import { Monitor } from "../../performance/monitor";

/**
 * Gets the fibonacci number at the input index
 * @timeComplexity O(n) - Linear Time
 * @param {number} index - The index of the fibonacci number to calculate
 * @param {boolean} [log] - Log the time monitor to the console?
 * @returns {number} - The number at the index being searched for
 */
export function getFibAtIndex(index: number, log: boolean = false): number {
  // Start the monitor
  const mn = new Monitor();
  log && mn.startMonitor();

  // Create the initial array
  const numbers: Array<number> = [1, 1];

  // Loop through all numbers up to the given index and calculate the fibonacci numbers
  for (let i = 2; i <= index; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }

  // Stop the monitor and report
  log && mn.stopMonitor();

  return numbers[this];
}
