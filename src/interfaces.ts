/** @module @mantlebee/tcl */

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
 * Invoke an action, if allowed to do it
 */
export interface ICommand<T> {
  canExecute(arg: T): boolean;
  execute(arg: T): void;
}

/**
 * Generic dictionary, the key is always a string
 */
export interface IDictionary<T> {
  [key: string]: T;
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
