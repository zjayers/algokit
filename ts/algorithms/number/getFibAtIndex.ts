/**
 * Interface for the memoized result storage
 */
interface IMemo {
    [key: string]: number;
}

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

    return numbers[index];
}

/**
 * Gets the fibonacci number at the input index
 * @timeComplexity O(n) - Linear Time
 * @param {number} index - The index of the fibonacci number to calculate
 * @param {IMemo} memoStorage - The memoization storage object contained already calculated results
 * @returns {number} - The number at the index being searched for
 */
export function getMemoizedFibAtIndex(
    index: number,
    memoStorage?: IMemo
): number {
    let result: number;
    let memo = memoStorage || {};

    // Return the result if it is already stored in the memo object
    if (memo[index]) {
        return memo[index];
    }

    // If calculation has not been performed, do the calculation and save the result to the memo object, then return the result;
    if (index === 0 || index === 1) {
        result = 1;
    } else {
        result =
            getMemoizedFibAtIndex(index - 1, memo) +
            getMemoizedFibAtIndex(index - 2, memo);
    }

    memo[index] = result;

    return result;
}
