import {Monitor} from "../index";

class SumUp {

    /**
     * Takes in a single number, and returns the sum of all numbers from 0 to n
     * @timeComplexity O(n) - Linear Time
     * @param {number} number - The number to be summed to
     * @param {boolean} log - Log the time monitor to the console?
     * @returns {number} - The sum of all numbers from 0 to n.
     */
    public linear(number: number, log: boolean = false): number {

        const mn = new Monitor();                                                       //
        log && mn.startMonitor();

        // Set the initial result to zero
        let result = 0;

        // Iterate through nums 0 to n, and add each iteration to the previous
        for (let i = 0; i <= number; i++) {
            result += i;
        }

        log && console.log(mn.stopMonitor());

        // Return the result
        return result;
    }

    /**
     * Takes in a single number, and returns the sum of all numbers from 0 to n
     * @timeComplexity O(1) - Constant Time
     * @param {number} number - The number to be summed to
     * @param {boolean} log - Log the time monitor to the console?
     * @returns {number} - The sum of all numbers from 0 to n.
     */
    public constant(number: number, log: boolean = false): number {
        const mn = new Monitor();
        log && mn.startMonitor();

        const result = (number / 2) * (1 + number);

        log && console.log(mn.stopMonitor());

        // Return the result
        return result;
    }
}

export {SumUp};
