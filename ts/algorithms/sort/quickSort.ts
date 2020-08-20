/**
 * Creates a copy of the input array, sorts the copy using a Quick Sort algorithm, then returns the sorted copy
 * @timeComplexity O(n^2) - Quadratic Time
 * @param {any[]} elements - An array of elements to be sorted
 * @param {boolean} [ascending = true] - Sort the array in ascending order - True for ascending / False for descending
 * @returns {any[]} - A sorted copy of the input array
 */
export function quickSort(elements: any[], ascending: boolean = true) {
    // Create a copy of the array - as to now mutate the input array
    const elementsCopy = [...elements];

    // Base case
    if (elementsCopy.length <= 1) {
        return elementsCopy;
    }

    // Create arrays to hold the lesser (left) and greater (right) elements
    const leftChunk = [];
    const rightChunk = [];

    // Get the pivot element from the array and drop the pivot item from the array
    const pivotElement = elementsCopy.shift();
    const centerChunk = [pivotElement];

    // Iterate through the array and split the items out into chunked arrays
    while (elementsCopy.length) {
        const currentElement = elementsCopy.shift();

        if (currentElement === pivotElement) {
            // Items Are Equal
            centerChunk.push(currentElement);
        } else {
            if (ascending) {
                // Ascending Order
                currentElement < pivotElement
                    ? leftChunk.push(currentElement)
                    : rightChunk.push(currentElement);
            } else {
                // Descending Order
                currentElement > pivotElement
                    ? leftChunk.push(currentElement)
                    : rightChunk.push(currentElement);
            }
        }
    }

    // Recursively sort the left and right chunks
    const leftChunkSorted = quickSort(leftChunk, ascending);
    const rightChunkSorted = quickSort(rightChunk, ascending);

    // Return the concatenation of the arrays - no need to sort the center chunk, all vars inside of it are equal
    return leftChunkSorted.concat(centerChunk, rightChunkSorted);
}

console.log(quickSort([-3, 10, 1, 100, -10, 22, 15], false));
