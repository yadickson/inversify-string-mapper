# inversify-string-mapper

[![version](https://img.shields.io/github/package-json/v/yadickson/inversify-string-mapper?style=flat-square)](https://www.npmjs.com/package/inversify-string-mapper)
![license](https://img.shields.io/github/license/yadickson/inversify-string-mapper?style=flat-square)
[![build](https://img.shields.io/github/actions/workflow/status/yadickson/inversify-string-mapper/npm-build.yml?branch=main&style=flat-square)](https://github.com/yadickson/inversify-string-mapper/actions/workflows/npm-build.yml)
![tests](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyadickson%2F2edc636fc2ff6aff4b056d455f3290be%2Fraw%2Finversify-string-mapper-junit-tests.json)
![coverage](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyadickson%2F2edc636fc2ff6aff4b056d455f3290be%2Fraw%2Finversify-string-mapper-cobertura-coverage.json)

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
