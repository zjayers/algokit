/**
 * How to measure Big O of an algorithm?
 * ASYMPTOTIC ANALYSIS
 * - 1. For a given algorithm - define the mathematical equation for its time complexity
 * - - - > Count the number of expression executions (code-line executions)
 * - - - > Determine pattern inside of function for various inputs
 * - - - > How many times does each code-line run per input?
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - -
 * - - - > EXAMPLE:                             Number of executions per line for n     - - -
 * - - - >  function sumUp(n) {                 | n = 1 | n = 3 | n = 10 | n = n |      - - -
 * - - - >     let result = 0;                      1       1       1       1           - - -
 * - - - >                                          -       -       -       -           - - -
 * - - - >     for (let i = 1; i <= n; i++) {       1       1       1       1           - - -
 * - - - >         result += i;                     1       3       10      n           - - -
 * - - - >     }                                    -       -       -       -           - - -
 * - - - >                                          -       -       -       -           - - -
 * - - - >     return result;                       1       1       1       1           - - -
 * - - - >  }                                                                           - - -
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - -
 * - - - >  Time Complexity = 1 + 1 + n + 1
 * - - - >                    3 + (1 * n) - Simplify the formula
 * - - - >                    a * n + b) - Replace constants with coefficients
 *
 * - 2. Find the FASTEST growing term
 * - - - > [a * n]
 *
 * - 3. Drop the coefficients
 * - - - > Time Complexity = n
 * - - - > Final Notation: O(n)
 *
 * - > ------ Big O Types ------
 * - > O (1).........Constant Time
 * - > O (n).........Linear Time
 * - > O (log n).....Logarithmic Time
 * - > O (n^2).......Quadratic Time
 * - > O (2^n).......Exponential time
 */

// ---- Performance Timer ---- //
export { Timer } from "./performance/timer";
export { Counter } from "./performance/counter";

// ---- Array Algorithms ---- //
export { getMaxValue } from "./algorithms/array/getMaxValue";
export { getMinValue } from "./algorithms/array/getMinValue";
export { getSum } from "./algorithms/array/getSum";

// ---- Number Algorithms ---- //
export { getFibAtIndex } from "./algorithms/number/getFibAtIndex";
export { getMemoizedFibAtIndex } from "./algorithms/number/getFibAtIndex";
export { isEven } from "./algorithms/number/isEven";
export { isOdd } from "./algorithms/number/isOdd";
export { isPrime } from "./algorithms/number/isPrime";
export { sumUpTo } from "./algorithms/number/sumUpTo";
export { isPowerOf } from "./algorithms/number/IsPowerOf";
export { getFactorial } from "./algorithms/number/getFactorial";
export { getFactorialRecursively } from "./algorithms/number/getFactorial";

// ---- Search Algorithms ----//
export { linearSearch } from "./algorithms/search/linearSearch";
export { binarySearch } from "./algorithms/search/binarySearch";

// ---- Sorting Algorithms ---- //
export { bubbleSort } from "./algorithms/sort/bubbleSort";
export { mergeSort } from "./algorithms/sort/mergeSort";
export { quickSort } from "./algorithms/sort/quickSort";

// ---- Data Structures ---- //
export { Queue } from "./structures/queue";
export { Stack } from "./structures/stack";
