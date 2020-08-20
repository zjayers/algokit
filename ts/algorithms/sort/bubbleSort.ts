import { greaterThanComparator, IComparator } from "../utils/comparators";

/**
 * Creates a copy of the input array, sorts the copy using a Bubble Sort algorithm, then returns the sorted copy
 * @timeComplexity O(n^2) - Quadratic Time
 * @param {any[]} elements - An array of elements to be sorted
 * @param {IComparator} [comparatorFn] - The comparator function to use to sort the array - defaults to greaterThanComparator
 * @returns {any[]} - A sorted copy of the input array
 */
export function bubbleSort(elements: any[], comparatorFn?: IComparator) {
    if (!comparatorFn) {
        comparatorFn = greaterThanComparator;
    }

    // Create a copy of the array - as to now mutate the input array
    const elementsCopy = [...elements];

    for (let a = 0; a < elementsCopy.length; a++) {
        for (let b = a + 1; b < elementsCopy.length; b++) {
            if (comparatorFn(elementsCopy[a], elementsCopy[b])) {
                const temp = elementsCopy[a];
                elementsCopy[a] = elementsCopy[b];
                elementsCopy[b] = temp;
            }
        }
    }

    return elementsCopy;
}
