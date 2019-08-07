/** @module @vesenda/tcl */

import { IBuilder, IFactory } from "./interfaces";

/**
 * Create a debug or release instance of an object, based upon the DEBUG variable and using a provided [[IFactory]].
 */
export class Builder<T> implements IBuilder<T> {
  private readonly debug: boolean = false;
  private readonly factory: IFactory<T>;
  public constructor(factory: IFactory<T>) {
    this.factory = factory;
  }
  public create(): T {
    return this.debug
      ? this.factory.createDebug()
      : this.factory.createRelease();
  }
}
