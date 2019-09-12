import { useReducer } from 'react';
import '@testing-library/jest-dom/extend-expect';

import createPersistedReducer from '../src';

describe('createPersistedReducer', () => {
  test('import createPersistedReducer from "use-persisted-reducer"', () => {
    expect(typeof createPersistedReducer).toBe('function');
  });
  test('returns useReducer if provider is null or running SSR', () => {
    expect(createPersistedReducer('key', null)).toBe(useReducer);
  });
  test('returns a function if provider provided', () => {
    const fn = createPersistedReducer('key', 'provider');
    expect(typeof fn).toBe('function');
    expect(fn).not.toBe(useReducer);
  });
  test('returns a function if provider defaulted', () => {
    const fn = createPersistedReducer('key');
    expect(typeof fn).toBe('function');
    expect(fn).not.toBe(useReducer);
  });
  // test('calling that function passes initialValue, key, and provider', () => {
  //   usePersistedReducer.default = jest.fn(); // Mutate the default export
  //   const fn = createPersistedReducer('key', 'provider');
  //   fn('foo');
  //   expect(usePersistedReducer.default).toBeCalled();
  // });
});
