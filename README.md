<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


`@Controller()` and `@Module()` are class decorators, where as `@Get()` and `@Post()` are method decorators and `@Body()` and `@Param()` are argument decorators.

## Setting up automatic validation
1. Tell nest to use global validation.
2. Create a class that describes the different properties that the request body should have. It is known as Data Transfer object (DTO).
3. Add validation rules to the class.
4. Apply that class to the request handler.


## Validation Pipe
- Use class transform to turn the body into an instance of the DTO class.
- Use class validator to validate the instance.
- If there are any validation errors, respond immediately, otherwise provide body to request handler.


## How type info is preserved?
With the help of these two configurations in tsconfig.json file
```
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
```

## Services
- It's a class.
- It is a place to put any business logic.
- Uses one or more repositories to find or store data.
- We create a service anytime we want to write out some kind of business logic. So something to run some kind of calculation or stuff like that. 
- We also make use of services anytime we want to fetch data from a repository.
- Controller interacts with the services.

## Repositories
- It's a class.
- It is a place to put storage-related logic. So if we need to directly interact with the database or if we need to write information into a file.
- Usually ends up being a TypeORM entity, a mongoose schema or similar.


## Why dependency injection exists?
#### Inversion of control principle.
- This is an idea in software engineering that says that if you follow this principle, it might be easier to build reusable code or write reusable code.
- So, this principle says that if you want to have a reusable code, you should write classes that do not create instances of its dependency on its own.