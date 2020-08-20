/**
 * Interface for comparator functions
 */
export interface IComparator {
    (a: any, b: any): boolean;
}

/**
 * Deep Equality - Comparator Function
 * @param {any} a - The element for comparison
 * @param {any} b - The target for comparison
 * @returns {boolean} - The [true | false] result of the comparator
 */
export const deepEqualityComparator: IComparator = (a: any, b: any): boolean =>
    a === b;

/**
 * Less Than - Comparator Function
 * @param {any} a - The element for comparison
 * @param {any} b - The target for comparison
 * @returns {boolean} - The [true | false] result of the comparator
 */
export const lessThanComparator: IComparator = (a: any, b: any): boolean =>
    a < b;

/**
 * Less Than Or Equal To - Comparator Function
 * @param {any} a - The element for comparison
 * @param {any} b - The target for comparison
 * @returns {boolean} - The [true | false] result of the comparator
 */
export const lessThanOrEqualComparator: IComparator = (
    a: any,
    b: any
): boolean => a <= b;

/**
 * Greater Than - Comparator Function
 * @param {any} a - The element for comparison
 * @param {any} b - The target for comparison
 * @returns {boolean} - The [true | false] result of the comparator
 */
export const greaterThanComparator: IComparator = (a: any, b: any): boolean =>
    a > b;

/**
 * Greater Than Or Equal To - Comparator Function
 * @param {any} a - The element for comparison
 * @param {any} b - The target for comparison
 * @returns {boolean} - The [true | false] result of the comparator
 */
export const greaterThanOrEqualComparator: IComparator = (
    a: any,
    b: any
): boolean => a >= b;
