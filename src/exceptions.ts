/** @module @mantlebee/tcl */
import { Exception } from "./types";

export function createException(name: string): Exception {
  return (message?: string) => name;
}

export const NotExpectedCaseException: Exception = createException(
  "Unexpected Case."
);
export const NotImplementedException: Exception = createException(
  "Not implemented."
);
export const SingletonInstantiationException: Exception = createException(
  "Singleton instantiation, use the static instance property instead."
);
