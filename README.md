# @abhisek507/react-core-web-element v0.0.1

Easily publish your React.js components on NPM step by step.

## Installation

Install npm globally (ignore if already installed):

```bash
npm i -g npm
```

Install the `@abhisek507/react-core-web-element` library:

```bash
npm i @abhisek507/react-core-web-element@0.0.1
```

## Usage

In React.js/Next.js/Vanilla JavaScript:

```tsx
import { CoreWebElement } from '@abhisek507/react-core-web-element';
```

Wrap the JSX/HTML template:

```tsx
function App() {
  return (
    <Fragment>
      <CoreWebElement
        header={{
          visible: true,
          heading: 'Header',
        }}
        nav={{
          visible: false,
          title: 'Nav',
        }}
        content={{
          visible: true,
          title: 'Content',
        }}
        sidebar={{
          visible: true,
          title: 'Sidebar',
        }}
      />
    </Fragment>
  );
}

export default App;
```

## Publish

Let's generate the build file,

```sh
npm run rollup
```

Increase the version count,

- [package.json](./package.json)
- [README.md](./README.md)

You must be logged in on [npm](https://www.npmjs.com/). Then run,

```sh
npm publish --access private
```

If publishing public plugins use,

```sh
npm publish --access public
```
