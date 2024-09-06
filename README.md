# inversify-string-mapper

inversify string mapper utility

## install dependencies

```bash
npm install
```

## build

```bash
npm run build
```

## test

```bash
npm test
```

## test with coverage report

```bash
npm run test:coverage
```

## mutation test

```bash
npm run test:mutation
```

## format

```bash
npm run format
```

## Install into project

```bash
npm install inversify-string-mapper
```

## How to use

Load the module.

```javascript
...
import { StringMapperModule } from "inversify-string-mapper";
...

export const container = (): Container => {
  const container = new Container();
  container.load(new StringMapperModule());
  return container;
};
```

Inject the interface by type.

```javascript
...
import { STRING_MAPPER_TYPE, StringMapperInterface } from "inversify-string-mapper";
...

  @inject(STRING_MAPPER_TYPE.StringMapper)
  private readonly stringMapper: StringMapperInterface
```

Use the mapper.

```javascript

...
  stringMapper.mapper('value'); // return 'value'
  stringMapper.mapper(null); // return ''
  stringMapper.mapper(null, 'default'); // return 'default'
  stringMapper.mapper(' value '); // return 'value'
  stringMapper.mapper(5); // return '5'
...

```
