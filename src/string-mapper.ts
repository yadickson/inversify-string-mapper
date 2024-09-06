import { injectable } from "inversify";
import { StringMapperInterface } from "string-mapper-interface";

@injectable()
export class StringMapper implements StringMapperInterface {
  public mapper(input: unknown, byDefault: string | undefined = ""): string {
    if (typeof input === "object") return byDefault;
    return String(input || byDefault).trim();
  }
}
