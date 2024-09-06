export interface StringMapperInterface {
  execute(input: unknown, byDefault?: string): string;
}
