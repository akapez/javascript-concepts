# JavaScript Concepts

These concepts form the foundation of JavaScript programming and are essential for developing complex and efficient web applications.

## Contents
1. [JavaScript modules](#place-1)

### JavaScript modules
JavaScript modules are a way to organize and reuse JavaScript code. Using modules can break up the code into smaller, manageable pieces, which can then be imported and used in other parts of an application as needed. 
This modular approach helps in maintaining a clean codebase, makes it easier to debug, and enhances code reusability.

- **Export and Import**: Modules allow you to export functions, objects, or primitives from one file, which can then be imported into another. This is done using the export and import statements. (Named Exports/ Default Exports)
- **ES Modules vs. CommonJS**: There are different module systems in the JavaScript ecosystem. ES Modules (ESM) is the standard in the ECMAScript specification, used mainly in the browser and increasingly supported in Node.js.
  CommonJS is another module system that was traditionally used in Node.js.
- **Asynchronous Module Loading**: Modules can be loaded asynchronously using dynamic imports (import() function), which returns a promise. This is particularly useful for code-splitting and loading code on demand.

[MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
