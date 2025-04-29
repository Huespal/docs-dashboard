# Documents Dashboard 

The Documents Dashboard is a web application that displays a list of documents that a customer has on their account.
A document contains a name, a list of contributors, a version number, and a list of attachments. It connects with an external API to display the documents data and shows notifications in real time related to new documents.

## Instructions

This is a Typescript application build using Vite.

To run the application locally execute the following command on a terminal in the project's root:

```bash
npm install // Just once, to install dependencies locally.
npm run dev
```

You can open [http://localhost:3000](http://localhost:3000) with a browser to see the result.

(Some data is requested from an external API. The data will not load if the API is not up.)

Tests can be run by executing the following commands on a terminal in the project's root:

```bash
npm run test // Runs tests and keeps watching changes.
npm run test:coverage // Runs tests, keeps watching and displays coverage.
```


## Approach considerations

The approach followed to generate this application is explained here with the decisions and assumptions made, so it is easy to understand the thought process behind it.

The Documents Dashboard is a single page application that lists documents data from a REST API endpoint It allows creating a new document locally and displays notifications about new documents added from other users from a WebSocket connection.

The application is pretty straightforward. There are two data sources, REST API and WebSockets subscription, that should be handled separately. It is important to allow closing the WebSockets connection, or unsubscribe, to avoid an unnecessary performance degradation.

Additionally, the fact that the application is small does not mean that the code is not structured correctly. The organization of the code must be correct enough to allow the application to scale, either by adding new functionalities or adapting existing ones.

Finally, this application is not meant to be published to a production environment, so the build process performed using Vite will not be handled by a CI/CD pipeline, neither include Github Actions to perform code checks like testing or code linter.  


## Tech Stack

There's no framework to speed up development for this project. The interfaces are created using basic CSS and HTML.

The stack is completed by:
- [TypeScript](https://www.typescriptlang.org/): for basic code scripting.
- [Vite](https://vite.dev/): to build the application.
- [Vitest](https://vitest.dev/): for testing (with [testing-library](https://testing-library.com/)).

It has been decided to use TypeScript over vanilla Javascript to get advantage of types which allows for a faster and stricter developer experience, and it is the recommended React preference.

It has been decided to use Vite to build the widget in development mode and take advantage of hot reloading for a selfish reason, as other options such as [Webpack](https://webpack.js.org/) will also allow us to build the application perfectly. This build configuration works well with just a little setup, is fast and it gives a nice developer experience.

Finally, it has been decided to use Vitest with Testing library for testing instead of Jest because it needs less configuration, it is faster and, specifically within testing-library, allows us to test DOM components practically.


## Project Organization

The application main code is stored into `src` folder. The project organization is as follows:

- `components`: It contains the application components. Each component is, in fact, Javascript code modifying the HTML DOM. This project is not using the React or similar framework, but the logic behind is the same. Reactive parts of the HTML are encapsulated into files named components. Each component includes an index.ts file with the main logic, a component.test.ts file and a styles.css file.

- `core`: It contains fundamental files to handle API, and Socket configuration. This folder may include additional shared or transversal files, as in example i18n configuration files.

- `domain`: It contains a folder for each (backend) domain.
    Each folder is named the same as the backend domain and includes a domain specific file configuring the API requests and/or Socket subscriptions, an optional helpers file, including related tests, and a TypeScript types file.

The main application entry point is the main.tsx file in the `src` folder's root. It mounts the application on the `#app` div element from the main HTML index file.
Files outside `src` folder are Vite (including Vitest) and Typescript configuration files, as well as the main HTML index file, the package.json file and the project's Readme file, yep, this exact file you are reading :).


## Development process

To develop the application, the work has been separated in different tasks.

1. Setup the project and build system.
  - Setup project structure, including:
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
  - Add document component
  
  Each component includes styles and unit tests

5. Add sorting
  - Add documents sorting

6. Add document creation
  - Add local document creation
  - Display created documents into the list

7. Review
  - A final step to review the application is working properly and do the necessary refactor. 

Testing is added for each component and validation helpers.
Documentation is added from the first task and continuously updated until the project's end.
This project has been developed using an IDE with IA, Cursor. No conversations had taken place. Predictive results (tab) may help to speed up the development, due to its more enriching and pleasant development experience than using a regular IDE.

## Final thoughts

This project has been done without the help that an advanced frontend framework brings. I don't recommend working with 100% vanilla code because it is more time-consuming, and it requires re-creating the wheel multiple times to allow reactive features to work properly. Frameworks are well-designed to give developers ease of code without compromising performance and nobody forgets that web is just Javascript, HTML and CSS although working with a framework.

All that said, completing a project using vanilla frontend code can help to understand better how the web programming language was designed some time ago, and the problems that developers before us solved during past years. That may not be perfectly accurate because this project is made with recent Javascript in the latest Ecmascript version, and recent HTML 5 and CSS 3, but it is still a good exercise.

The API and WebSockets URLs used for this project should be sent as environmental variables instead of being hardcoded into the code. This allows to be able to adapt to URL modifications without requiring amending the project's internal code. 

Testing is essential for a project to ensure code robustness. This project includes unit testing with Vitest and testing-library. This should be scaled up as the project grows with end-to-end or integration testing to the entire project with technologies such as Cypress or similar, which can be handled by a QA expert or a skilled enough developer.

