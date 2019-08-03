/** @module @vesenda/tcl */

/**
 * Check for the instance of n object i null or undefined.
 * @param arg instance of an object
 * @returns the instance of an object is null or undefined
 */
export function isNullOrUndefined<T>(arg: T): boolean {
  return arg === null || arg === undefined;
}
