import {Monitor} from "../../performance/monitor";

/**
 * Find Minimum Value In Array
 * @timeComplexity O(n) - Linear Time
 * @param {[number]} numbers - The array of numbers to find the minimum value of.
 * @param {boolean} [log] - Log the time monitor to the console?
 * @returns
 */
export function getMinValue(numbers: [number], log: boolean = false): number {
    // Start the monitor
    const mn = new Monitor();
    log && mn.startMonitor();

    const lowestNumber = Math.min(...numbers);

    // Stop The Monitor & Report
    log && mn.stopMonitor();

    return lowestNumber;
}

