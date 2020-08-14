/**
 * Creates a copy of the input array, sorts the copy using a Merge Sort algorithm, then returns the sorted copy
 * @timeComplexity O(log n) - Logarithmic Time
 * @param {any[]} elements - An array of elements to be sorted
 * @param {boolean} [ascending = true] - Sort the array in ascending order - True for ascending / False for descending
 * @returns {any[]} - A sorted copy of the input array
 */
import {
    greaterThanComparator,
    lessThanComparator,
} from "../utils/comparators";

export function mergeSort(elements: any[], ascending: boolean = true) {
    if (elements.length < 2) {
        return elements;
    }

    // Base Case - Sort elements that contain only 2 elements
    if (elements.length === 2) {
        if (ascending) {
            return elements[0] > elements[1]
                ? [elements[1], elements[0]]
                : elements;
        }

        return elements[0] < elements[1]
            ? [elements[1], elements[0]]
            : elements;
    }

    // Create a copy of the array - as to now mutate the input array
    const elementsCopy = [...elements];

    // Get the mid-index of the array
    const middleIndex = Math.floor(elementsCopy.length / 2);

    // Get left and right chunks of array - based on the mid-index
    const leftChunk = elementsCopy.slice(0, middleIndex);
    const rightChunk = elementsCopy.slice(middleIndex);

    // Sort the chunks
    const leftChunkSorted = mergeSort(leftChunk, ascending);
    const rightChunkSorted = mergeSort(rightChunk, ascending);

    // Merge the results
    let leftChunkIndex = 0;
    let rightChunkIndex = 0;
    let mergedElementsSorted = [];
    while (
        leftChunkIndex < leftChunkSorted.length ||
        rightChunkIndex < rightChunkSorted.length
    ) {
        const rightElement = rightChunkSorted[rightChunkIndex];
        const leftElement = leftChunkSorted[leftChunkIndex];

        // Determine the comparator function
        const comparator = ascending
            ? greaterThanComparator
            : lessThanComparator;

        // Compare the elements and push to the merged array
        if (
            leftChunkIndex >= leftChunkSorted.length ||
            comparator(leftElement, rightElement)
        ) {
            mergedElementsSorted.push(rightElement);
            rightChunkIndex++;
        } else {
            mergedElementsSorted.push(leftElement);
            leftChunkIndex++;
        }
    }

    // Return the merged array
    return mergedElementsSorted;
}

console.log(mergeSort([-10, 33, 5, 10, 3, -19, -99, 100], false));
