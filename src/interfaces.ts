/** @module @vesenda/tcl */

/**
 * Create a new instance of an object.
 */
export interface IBuilder<T> {
  create(): T;
}

/**
 * Convert or convert back between two different instances of objects.
 */
export interface IConverter<TFrom, TTo> {
  convert(from: TFrom): TTo;
  convertBack(to: TTo): TFrom;
}

/**
 * Javascript exception.
 */
export interface IException {
  message: string;
  name: string;
}

/**
 * Create a new instance of an object in debug or release mode.
 */
export interface IFactory<T> {
  createDebug(): T;
  createRelease(): T;
}