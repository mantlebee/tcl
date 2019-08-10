/** @module @vesenda/tcl */
import { NotExpectedCaseException } from "./exceptions";

/**
 * Check for the instance of generic object if null or undefined.
 * @param arg instance of an object
 * @returns the instance of an object is null or undefined
 */
export function isNullOrUndefined<T>(arg: T): boolean {
  return arg === null || arg === undefined;
}

export function isUndefined<T>(arg: T): boolean {
  return arg === undefined;
}

export function isNull<T>(arg: T): boolean {
  return arg === null;
}

export function isEmpty<T>(arg: T): boolean {
  if (arg instanceof Array) return arg.length === 0;
  if (arg instanceof Boolean) return false;
  if (arg instanceof Number) return false;
  if (arg instanceof Object) return Object.keys(arg as Object).length === 0;
  if (arg instanceof String) return (arg as String) === "";
  throw NotExpectedCaseException();
}

export function isDefined<T>(arg: T): boolean {
  return !isUndefined(arg) && !isNull(arg);
}

export function isValued<T>(arg: T): boolean {
  return !isUndefined(arg) && !isNull(arg) && !isEmpty(arg);
}
