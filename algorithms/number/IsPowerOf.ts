/**
 * Find if number is power of divider
 * @timeComplexity O(log n) - Logarithmic Time
 * @param {number} num - The number to check
 * @param {number} divider - The number to use as the divider
 * @returns {number} - The minimum value in the array
 */
export function isPowerOf(num: number, divider: number): boolean {
  if (divider === 1) {
    return true;
  }

  let dividedNumber = num;

  while (dividedNumber !== 1) {
    if (dividedNumber % divider !== 0) {
      return false;
    }

    dividedNumber = dividedNumber / divider;
  }

  return true;
}
