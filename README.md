# Documents Dashboard 

The documents dashboard is a web application that displays a list of documents that a customer has on their account.
A document contains a name, a list of contributors, a version number, and a list of attachments. It connects with an external API to display the documents data and shows notifications in real time related to new documents.

## Instructions

This is a Typescript application build using Vite.

To run the application locally execute the following command on a terminal in the project's root:

```bash
npm run dev
```

You can open [http://localhost:3000](http://localhost:3000) with a browser to see the result.

(Some data is requested from an external API. The data will not load if the API is not up.)


## Approach considerations

TODO


## Tech Stack

There's no framework to speed up development for this project. The interfaces are created using basic CSS and HTML.

The stack is completed by:
- [TypeScript](https://www.typescriptlang.org/): for basic code scripting.
- [Vite](https://vite.dev/): to build the application.

It has been decided to use TypeScript over vanilla Javascript to get advantage of types which allows for a faster and stricter developer experience, and it is the recommended React preference.

It has been decided to use Vite to build the widget in development mode and take advantage of hot reloading for a selfish reason, as other options such as [Webpack](https://webpack.js.org/) will also allow us to build the application perfectly. This build configuration works well with just a little setup, is fast and it gives a nice developer experience.


## Project Organization

TODO


## Development process

To develop the application, the work has been separated in different tasks.

1. Setup the project and build system.
  - Setup project structure including:
    - Folder structure
    - `main.ts` file entry point
    - basic styles
  - Setup build system (using Vite)
  - Setup Typescript configuration

2. Setup API connection
  - Setup API base connection
  - Add the documents domain API connection

3. Setup WebSockets connection
  - Setup WebSockets base connection
  - Add the notifications domain WebSockets connection

4. Add components
  - Add notification component
  - Add card component
  
  Each component includes styles and unit tests

5. Add sorting
  - Add documents sorting

6. Add document creation
  - Add document form
  - Display created documents into the list (locally stored)

7. Review
  - A final step to review the application is working properly and do necessary refactor. 

Testing is added for each component and validation helpers.
Documentation is added from the first task and continuously updated until the project's end.
This project has been developed using an IDE with IA, Cursor. No conversations had taken place. Predictive results (tab) did help to speed up the development, and it has been a more enriching and pleasant development experience than using a regular IDE.

## Final thoughts

TODO
