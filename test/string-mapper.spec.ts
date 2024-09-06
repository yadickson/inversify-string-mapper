import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { StringMapper } from "string-mapper";
import { StringMapperInterface } from "string-mapper-interface";

describe("StringMapper tests", () => {
  let mapper: StringMapperInterface;
  const empty = "";

  beforeEach(() => {
    mapper = new StringMapper();
  });

  it("should return empty when input is null", () => {
    const result = mapper.execute(null);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(empty);
  });

  it("should return empty when input is undefined", () => {
    const result = mapper.execute(undefined);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(empty);
  });

  it("should trim input", () => {
    const value = faker.datatype.uuid();
    const notTrimValue = ` ${value} `;

    const result = mapper.execute(notTrimValue);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(value);
  });

  it("should return the same input value", () => {
    const value = faker.datatype.uuid();
    const result = mapper.execute(value);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(value);
  });

  it("should return empty when input is a number", () => {
    const value = faker.datatype.number();
    const result = mapper.execute(value);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(`${value}`);
  });

  it("should return empty when input is a object", () => {
    const value = JSON.parse("{}") as object;
    const result = mapper.execute(value);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(empty);
  });
});
