export interface StringMapperInterface {
  mapper(input: unknown, byDefault?: string): string;
}
