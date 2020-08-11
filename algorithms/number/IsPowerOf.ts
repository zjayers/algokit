import { Monitor } from "../../performance/monitor";

/**
 * Find if number is power of divider
 * @timeComplexity O(log n) - Logarithmic Time
 * @param {number} num - The number to check
 * @param {number} divider - The number to use as the divider
 * @param {boolean} [log] - Log the time monitor to the console?
 * @returns {number} - The minimum value in the array
 */
export function isPowerOf(
  num: number,
  divider: number,
  log: boolean = false
): boolean {
  if (divider === 1) {
    return true;
  }

  // Start the monitor
  const mn = new Monitor();
  log && mn.startMonitor();

  let dividedNumber = num;

  while (dividedNumber !== 1) {
    if (dividedNumber % divider !== 0) {
      return false;
    }

    dividedNumber = dividedNumber / divider;
  }

  // Stop The Monitor & Report
  log && mn.stopMonitor();

  return true;
}
