/**
 * Find the factorial of an input number
 * @timeComplexity O(n) - Linear Time
 * @param {number} num - The number to find the factorial of
 * @returns {number} - The combined factorial of the input number
 */
export function getFactorial(num: number): number {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

/**
 * Find the factorial of an input number (recursively)
 * @timeComplexity O(n) - Linear Time
 * @param {number} num - The number to find the factorial of
 * @returns {number} - The combined factorial of the input number
 */
export function getFactorialRecursively(num: number): number {
  // Base Case - Exit Condition
  if (num === 1) {
    return 1;
  }

  return num * getFactorialRecursively(num - 1);
}
