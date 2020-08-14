/**
 * Find Minimum Value In Array
 * @timeComplexity O(n) - Linear Time
 * @param {[number]} numbers - The array of numbers to find the minimum value of.
 * @returns {number} - The minimum value in the array
 */
export function getMinValue(numbers: [number]): number {
    return Math.min(...numbers);
}
