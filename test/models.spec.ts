import "mocha";

import { expect } from "chai";

import { Builder, IFactory } from "../src";

describe("Builder", () => {
  it("Return a release instance of Model", () => {
    type Model = { isDebug: boolean };
    const factory: IFactory<Model> = {
      createDebug: () => ({ isDebug: true }),
      createRelease: () => ({ isDebug: false })
    };
    const builder = new Builder(factory);
    expect(builder.create().isDebug).to.equal(false);
  });
});
