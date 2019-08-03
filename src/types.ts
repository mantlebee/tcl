/** @module @vesenda/tcl */

import { IException } from "./interfaces";

export type Delegate<TIn, TOut> = (...args: List<TIn>) => TOut;
export type Dictionary<T> = { [key: string]: T };
export type Exception = (message?: string) => IException;
export type List<T> = T[];
export type Nullable<T> = T | null;
