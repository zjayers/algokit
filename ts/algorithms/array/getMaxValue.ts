/**
 * Find Maximum Value In Array
 * @timeComplexity O(n) - Linear Time
 * @param {[number]} numbers - The array of numbers to find the maximum value of.
 * @returns {number} - The maximum value in the array
 */
export function getMaxValue(numbers: [number]): number {
    return Math.max(...numbers);
}
