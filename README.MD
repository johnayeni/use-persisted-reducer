# use-persisted-reducer

A custom [React Hook](https://reactjs.org/docs/hooks-overview.html) that persist state from useReducer

[![npm version](https://badge.fury.io/js/use-persisted-reducer.svg)](https://badge.fury.io/js/use-persisted-reducer)

`use-persisted-reducer` is not a hook itself, but is a factory that accepts a storage `key`
and an optional storage provider (default = `localStorage`) and returns a hook
that you can use as a direct replacement for `useReducer`.

## Features

Persists the state to `localStorage`

## Requirement

To use `use-persisted-reducer`, you must use `react@16.8.0` or greater which includes Hooks.

## Installation

```sh
$ npm i use-persisted-reducer --save
```

or

```sh
$ yarn add use-persisted-reducer
```

## Example

```js
import React from 'react';
import createPersistedReducer from 'use-persisted-reducer';

const usePersistedReducer = createPersistedReducer('state');

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = usePersistedReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

export default Counter;
```

You can also pass in your own storage provider

## Example

```js
import React from 'react';
import createPersistedReducer from 'use-persisted-reducer';

// defaults to globalThis.localStorage
const usePersistedReducer = createPersistedReducer('state', globalThis.sessionStorage);
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter?

Don't forget to [follow me on twitter](https://twitter.com/iamraphson)!

Thanks!
John Ayeni.

## License

**[MIT](LICENSE)** Licensed