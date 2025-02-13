# @abhisek507/react-core-web-element v0.0.2

Easily publish your React.js components on NPM step by step.

## Installation

Install npm globally (ignore if already installed):

```bash
npm i -g npm
```

Install the `@abhisek507/react-core-web-element` library:

```bash
npm i @abhisek507/react-core-web-element@0.0.2
```

## Usage

In React.js/Next.js/Vanilla JavaScript:

```tsx
import { CoreWebElement } from '@abhisek507/react-core-web-element';
```

Render the JSX/HTML template:

```tsx
const elementConfig = {
  header: {
    visible: true,
    heading: 'Header',
  },
  nav: {
    visible: true,
    title: 'Nav',
  },
  content: {
    visible: true,
    title: 'Content',
  },
  sidebar: {
    visible: true,
    title: 'Sidebar',
  },
};

function App() {
  return (
    <CoreWebElement {...elementConfig} />
  );
}

export default App;
```

We need few css variables. The values can be changed & based on the project requirements.

```css
:root {
  --primary: #005f5a;
  --secondary: #14b8a6;
  --tertiary: #a7f3d0;
  --error: #ef4444;
  --warning: #f59e0b;
  --success: #16a34a;
  --white: #ffffff;
  --black: #000000;
  --grey: #e7e5e4;
}
```

## Publish

Let's generate the build file,

```sh
npm run rollup
```

Increase the version count,

- [package.json](./package.json)
- [package-lock.json](./package-lock.json)
- [README.md](./README.md)

You must be logged in on [npm](https://www.npmjs.com/). Then run,

```sh
npm publish --access private
```

If publishing public plugins use,

```sh
npm publish --access public
```
