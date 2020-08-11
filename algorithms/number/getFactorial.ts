/**
 * Find the factorial of an input number
 * @timeComplexity O(n) - Linear Time
 * @param {number} num - The number to find the factorial of
 * @param {boolean} [log] - Log the time monitor to the console?
 * @returns {number} - The combined factorial of the input number
 */
export function getFactorial(num: number, log: boolean = false): number {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}
