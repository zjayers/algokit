import {Monitor} from "../../performance/monitor";

/**
 * Determines if the input number is even
 * @timeComplexity O(1) - Constant Time
 * @param {number} num - The number to check if it is even or not
 * @param {boolean} [log] - Log the time monitor to the console?
 * @returns {boolean} - True if the number is even, false if the number is odd
 */
export function isEven(num: number, log: boolean = false): boolean {
    // Start the monitor
    const mn = new Monitor();
    log && mn.startMonitor();

    const isNumberEven = num % 2 === 0;

    // Stop The Monitor & Report
    log && mn.stopMonitor();

    return isNumberEven;
}

