/** @module @vesenda/tcl */

import { IBuilder, IFactory } from "./interfaces";

/**
 * Create a debug or release instance of an object, based upon the DEBUG variable and using a provided [[IFactory]].
 */
export class Builder<TModel> implements IBuilder<TModel> {
  private readonly _debug: boolean = false;
  private readonly _factory: IFactory<TModel>;
  public constructor(factory: IFactory<TModel>) {
    this._factory = factory;
  }
  create() {
    return this._debug
      ? this._factory.createDebug()
      : this._factory.createRelease();
  }
}
