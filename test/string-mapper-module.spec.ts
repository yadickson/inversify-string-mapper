import { expect } from "chai";
import { Container } from "inversify";
import sinon from "ts-sinon";
import { STRING_MAPPER_TYPE, StringMapperInterface, StringMapperModule } from "index";
import { StringMapper } from "string-mapper";

describe("StringMapperModule tests", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container.load(new StringMapperModule());
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should check bind StringMapper", () => {
    expect(container.isBound(STRING_MAPPER_TYPE.StringMapper)).is.equal(true);
  });

  it("should check StringMapperInterface", () => {
    const util = container.get<StringMapperInterface>(STRING_MAPPER_TYPE.StringMapper);
    expect(util).instanceOf(StringMapper);
  });
});
