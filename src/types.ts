/** @module @mantlebee/tcl */
import { IDictionary } from "./interfaces";

export type Dictionary<T> = IDictionary<T>;
export type Exception = (message?: string) => string; //IException;
export type List<T> = T[];
export type Nullable<T> = T | null;
export type Undefinable<T> = T | undefined;
