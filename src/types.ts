/** @module @vesenda/tcl */
import { IDictionary, IException } from "./interfaces";

export type Dictionary<T> = IDictionary<T>;
export type Exception = (message?: string) => IException;
export type List<T> = T[];
export type Nullable<T> = T | null;
