import { ContainerModule } from "inversify";
import { StringMapper } from "string-mapper";
import { StringMapperInterface } from "string-mapper-interface";
import { STRING_MAPPER_TYPE } from "string-mapper-type";

export class StringMapperModule extends ContainerModule {
  constructor() {
    super((bind) => {
      bind<StringMapperInterface>(STRING_MAPPER_TYPE.StringMapper).to(StringMapper);
    });
  }
}
