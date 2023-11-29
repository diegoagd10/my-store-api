# Notes

## What is the diff between `npm init` and `npm init -y`?

* `npm init`: Ask questions to create the package.json
* `npm inint -y`: Creates a default package.json file with out asking questions

## Initial project files

[!Not Found](./resources/init_project_files.png)

### Gitignore content for a node project

[!Not Found](./resources/gitignore_config_for_node_project.png)

## Development dependencies

Thease are dependencies for development and they won't get pushed to production.

* `nodemon`: Allows us to create a development server that reloads the server each time we make a change to the source code.
* `eslint`: Helps to validate that our code is following the best practices.

__Command:__
```
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```

The `-D` option indicates that we are intallsing development dependencies.

## Required VS Code Pluggins

* `ESLint`: Helps VS code to detect bad practices without running the linter.
* `EditorConfig for VS Code`: Helps to rewrite the code based the developer's guidelines defined in the `.editorconfig` file.

## Required dependencies

These are dependencies required by our service to behave correctly in production.

* `express`: This is a framework for creating a backend server for web development or REST Apis.
* `@hapi/boom`: Allows you to create http errors that can be handled by the exception handler in a generic way.

__Command:__
```
npm i express @hapi/boom
```

## Tasks

* `dev`: Starts the server in development mode (Reloading).
* `start`: Starts the server for testing.
* `lint`: Runs the linting tools to check that code is following best practices.

## RESTful API

### Conventions

#### Naming conventions

* Use `nouns` to name your endpoints.
* Use `plural nouns` to name your endpoints.

Example:
```
HTTP POST /api/products
HTTP GET /api/products
```

#### HTTP Method Conventions

[!Not Found](./resources/rest_api_convention.png)

## Middlewares

* `CORS`: Middleware to enable CORS in our routes or application. http://expressjs.com/en/resources/middleware/cors.html
* `Morgan`: HTTP logger for Node. http://expressjs.com/en/resources/middleware/morgan.html
* `Passport`: Allows us to implement different authentication and authorization strategies. https://github.com/jaredhanson/passport

You can find more middlewares at: http://expressjs.com/en/resources/middleware.html

## References

[Gitignore content based on the project type](https://www.toptal.com/developers/gitignore/)
