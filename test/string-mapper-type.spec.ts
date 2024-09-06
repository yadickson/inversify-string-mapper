import { expect } from "chai";
import { STRING_MAPPER_TYPE } from "string-mapper-type";

describe("StringMapperType tests", () => {
  it("should check StringMapper value", () => {
    expect(STRING_MAPPER_TYPE.StringMapper).is.equal(Symbol.for("STRING_MAPPER_TYPE -> StringMapperInterface"));
  });
});
