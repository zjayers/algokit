import { deepEqualityComparator, IComparator } from "../utils/comparators";

/**
 * Binary search algorithm
 * @timeComplexity O(log n) - Logarithmic Time
 * @param {[any]} orderedElements - The sorted element array to search through
 * @param {any} target - The target element to look for
 * @param {Function} [comparatorFn] - Function to compare the elements when searching for the target
 * @returns {number} - The index of the target (if found) - -1 if the target is not matched
 */
export function binarySearch(
    orderedElements: any[],
    target: any,
    comparatorFn?: IComparator
): number {
    // If no comparator function was passed in, set a default deep equality comparator
    if (!comparatorFn) {
        comparatorFn = deepEqualityComparator;
    }

    let startIndex = 0;
    let endIndex = orderedElements.length - 1;

    // Iterate through the elements and check if the target exists in the array
    while (startIndex <= endIndex) {
        const midIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
        const midElement = orderedElements[midIndex];

        if (comparatorFn(midElement, target)) {
            // Match found, return the mid index
            return midIndex;
        }

        // If target was not matched, determine which half of the array may contain the target
        midElement < target
            ? (startIndex = midIndex + 1)
            : (endIndex = midIndex - 1);
    }

    // No match found
    return -1;
}
