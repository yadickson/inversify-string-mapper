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
    const result = mapper.mapper(null);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(empty);
  });

  it("should return empty when input is undefined", () => {
    const result = mapper.mapper(undefined);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(empty);
  });

  it("should trim input", () => {
    const value = faker.string.uuid();
    const notTrimValue = ` ${value} `;

    const result = mapper.mapper(notTrimValue);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(value);
  });

  it("should return the same input value", () => {
    const value = faker.string.uuid();
    const result = mapper.mapper(value);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(value);
  });

  it("should return empty when input is a number", () => {
    const value = faker.number.int();
    const result = mapper.mapper(value);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(`${value}`);
  });

  it("should return empty when input is a object", () => {
    const value = JSON.parse("{}") as object;
    const result = mapper.mapper(value);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(empty);
  });

  it("should return the number representation from number input value", () => {
    const value = faker.number.int({ min: 10, max: 50 });
    const result = mapper.mapper(value);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(String(value));
  });
});
