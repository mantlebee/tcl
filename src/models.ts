/** @module @mantlebee/tcl */
import { IBuilder, IFactory } from "./interfaces";
import { SingletonInstantiationException } from "./exceptions";

/**
 * Create a debug or release instance of an object, based upon the DEBUG variable and using a provided [[IFactory]].
 */
export class Builder<T> implements IBuilder<T> {
  private readonly _debug: boolean = true;
  private readonly _factory: IFactory<T>;

  public constructor(factory: IFactory<T>) {
    this._factory = factory;
  }

  public create(): T {
    return this._debug
      ? this._factory.createDebug()
      : this._factory.createRelease();
  }
}

/**
 * Implementation of the Singleton Design Pattern. Constructor is public to allow classes inheritance.
 */
export class Singleton {
  private static _instance: any;

  public constructor() {
    if (Singleton._instance) throw SingletonInstantiationException();
    Singleton._instance = this;
  }

  public static get instance(): any {
    if (!Singleton._instance) Singleton._instance = new this();
    return Singleton._instance;
  }
}
