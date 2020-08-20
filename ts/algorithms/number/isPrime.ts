/**
 * Check for primality of a number
 * @timeComplexity O(n) - Linear Time
 * @param {number} num = The number to check if it is a prime number or not
 * @returns {boolean} - True if the number is a prime number, false if the number is not a prime number
 */
export function isPrime(num: number): boolean {
    // Check if number is integer.
    if (num % 1 !== 0) {
        return false;
    }

    if (num <= 1) {
        // If number is less than one then it isn't prime by definition.
        return false;
    }

    if (num <= 3) {
        // All numbers from 2 to 3 are prime.
        return true;
    }

    // If the number is not divided by 2 then we may eliminate all further even dividers.
    if (num % 2 === 0) {
        return false;
    }

    // If there is no dividers up to square root of n then there is no higher dividers as well.
    const dividerLimit = Math.sqrt(num);
    for (let divider = 3; divider <= dividerLimit; divider += 2) {
        if (num % divider === 0) {
            return false;
        }
    }

    return true;
}
