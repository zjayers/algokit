/**
 * Gets the fibonacci number at the input index
 * @timeComplexity O(n) - Linear Time
 * @param {number} index - The index of the fibonacci number to calculate
 * @returns {number} - The number at the index being searched for
 */
export function getFibAtIndex(index: number): number {
  // Create the initial array
  const numbers: Array<number> = [1, 1];

  // Loop through all numbers up to the given index and calculate the fibonacci numbers
  for (let i = 2; i <= index; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }

  return numbers[this];
}
