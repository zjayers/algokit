import { deepEqualityComparator, IComparator } from "../utils/comparators";

/**
 * Linear search algorithm
 * @timeComplexity O(n)
 * @param {[any]} elements - The element array to search through
 * @param {any} target - The target element to look for
 * @param {Function} [comparatorFn] - Function to compare the elements when searching for the target
 * @returns {number} - The index of the target (if found) - -1 if the target is not matched
 */
export function linearSearch(
    elements: any[],
    target: any,
    comparatorFn?: IComparator
): number {
    // If no comparator function was passed in, set a default deep equality comparator
    if (!comparatorFn) {
        comparatorFn = deepEqualityComparator;
    }

    for (let i = 0; i < elements.length; i++) {
        if (comparatorFn(elements[i], target)) {
            return i;
        }
    }

    return -1;
}
