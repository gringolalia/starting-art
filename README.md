<h1 align="center">đĻ Start UI</h1>

Start UI is a opinionated frontend starter repository created & maintained by the [BearStudio Team](https://www.bearstudio.fr/team) and other contributors.
It represents our team's up-to-date stack that we use when creating web apps for our clients.

## Technology

- đĻ [TypeScript](https://www.typescriptlang.org/)
- âī¸ [React](https://reactjs.org/)
- â˛ [NextJS](https://nextjs.org/) (with [Static Export](https://nextjs.org/docs/advanced-features/static-html-export))
- đ [Storybook](https://storybook.js.org/)
- âī¸ [React Router](https://reactrouter.com/)
- âĄī¸ [Chakra UI](https://chakra-ui.com/)
- âī¸ [React Query](https://react-query.tanstack.com/)
- đ [Formiz](https://formiz-react.com/)
- đĨ [React Error Boundary](https://github.com/bvaughn/react-error-boundary)
- â­ī¸ [React Icons](https://react-icons.github.io/react-icons/)
- đ [React i18next](https://react.i18next.com/)
- đŊ [React Select](https://react-select.com/)
- đĸ [React Currency Input Field](https://github.com/cchanxzy/react-currency-input-field)
- â [Axios](https://github.com/axios/axios)
- đ [Day.js](https://day.js.org/)

đ [Technology Choices](#technology-choices)

âšī¸ API calls are mapped on a [JHipster](https://www.jhipster.tech/) backend application.

## Features

- Reponsive layout / navigation.
- Sign / Sign Up / Password recovery screens.
- Account profile / Change Password screens.
- Users management admin screens (CRUD).
- Multi-languages (đ§ Translation strings in progress).
- Custom Chakra UI theme with preview of customized components in Storybook.
- Extra UI components with Storybook documentation.
- Fields components for Formiz.
- Dark mode support with Storybook toggle.
- App version & Environment name in the UI.
- API Schema documentation via [Swagger UI React](https://github.com/swagger-api/swagger-ui).
- API Mocking with persisting state via [MirageJS](https://miragejs.com/).

## Installation

```bash
yarn install
yarn build
```

## Development

```bash
yarn dev
```

### Setup VS code

**Create or edit your `.vscode/settings.json` file with the following code**

```json
{
  "i18n-ally.localesPaths": "src/locales"
}
```

### Storybook

```bash
yarn storybook
```

### Development with [MirageJS](https://miragejs.com/) (mock)

**This is the default behavior.**

Do not set the `NEXT_PUBLIC_API_BASE_URL` variable in the `.env` file at the root of the project.

### Development with a [JHipster](https://www.jhipster.tech/) backend

Create a `.env` file at the root of the project with the following content:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
```

## Show hint on development environments

Setup the `NEXT_PUBLIC_DEV_ENV_NAME` env variable with the name of the environment.

```
NEXT_PUBLIC_DEV_ENV_NAME=staging
NEXT_PUBLIC_DEV_ENV_COLOR_SCHEME=teal
```

## API Documentation

API documentation is accessible by admins in the app with [Swagger-UI](https://www.npmjs.com/package/swagger-ui-react).
```
yarn docs:build
```
This will build the json documentation from the main file `/src/mocks/openapi/openapi.yaml`.

## Production

### NodeJS (recommended)

```bash
yarn storybook:build # Optional: Will expose the Storybook at `/storybook`
yarn build
yarn start
```
### Static files

```bash
yarn storybook:build # Optional: Will expose the Storybook at `/storybook/index.html`
yarn static:build
```

Then expose the `/out` folder.

đĄ You will need to setup your server to rewrite all `/app/*` urls to serve the `app.html` file.

---

## Technology Choices

### React

[React](https://reactjs.org/) is a JavaScript library created in 2013 to build
reactive user interfaces. At the time of writing, React is probably the front
end library the most used to create new projects and has a huge community which
is beneficial for the maintainability of the project in terms of developers and
online resources.

[GitHub](https://github.com/facebook/react) Âˇ [License MIT](https://github.com/facebook/react/blob/master/LICENSE)

### Next.js

Next.js gives you the best developer experience with all the features you need
for production: hybrid static & server rendering, TypeScript support, smart
bundling, route pre-fetching, and more. No config needed.

[GitHub](https://github.com/vercel/next.js) Âˇ [License MIT](https://github.com/vercel/next.js/blob/canary/license.md)

### React Router

Next.js is bundled with its own router, but at the time of writing those lines,
it does not allow nested routes using a shared layout.

[GitHub](https://github.com/ReactTraining/react-router) Âˇ [License MIT](https://github.com/ReactTraining/react-router/blob/master/LICENSE)

### TypeScript

JavaScript is a not typed language. [TypeScript](https://www.typescriptlang.org/)
is here to help add static type definition. TypeScript helps a lot when it comes
to types, interfaces and define contract between functions which helps a lot for
a reliable documentation. No worry, the TypeScript adoption is incremental and
writing in TypeScript is not mandatory to use Start UI, but it is a good
practice to do so to avoid bugs in the future.

[GitHub](https://github.com/microsoft/TypeScript) Âˇ [License Apache 2.0](https://github.com/microsoft/TypeScript/blob/master/LICENSE.txt)

### React Query

[React Query](https://github.com/tannerlinsley/react-query) is a powerful tool
to do efficient data synchronization for React. No need of Redux
or another global state manager anymore. Usable with [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API),
[`axios`](https://github.com/axios/axios), or [`graphql-request`](https://github.com/prisma-labs/graphql-request),
React Query will do the work and is agnostic of the method you will use.

[GitHub](https://github.com/tannerlinsley/react-query) Âˇ [License MIT](https://github.com/tannerlinsley/react-query/blob/master/LICENSE)

### Storybook

[Storybook](https://storybook.js.org/) is an Open Source tool to help you
develop framework agnostic components in isolation and document them.

[GitHub](https://github.com/storybookjs/storybook) Âˇ [License MIT](https://github.com/storybookjs/storybook/blob/next/LICENSE)

### Chakra UI

[Chakra UI](https://chakra-ui.com/) is a simple, modular, composable and
accessible component library that is highly customizable.

[GitHub](https://github.com/chakra-ui/chakra-ui/) Âˇ [License MIT](https://github.com/chakra-ui/chakra-ui/blob/main/LICENSE)

### Formiz

To create React forms, there is a lot of libraries out there.
[Formiz](https://formiz-react.com/) will help you create React forms with ease!
Composable, headless & with built-in multi steps.

[GitHub](https://github.com/ivan-dalmet/formiz) Âˇ [License MIT](https://github.com/ivan-dalmet/formiz/blob/master/LICENSE)
