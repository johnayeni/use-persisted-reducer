import React from 'react';

const usePersistedReducer = (reducer, initialState, init, key, storage) => {
  const [state, setState] = React.useReducer(
    reducer,
    storage.get(key, initialState),
    init,
  );

  const dispatch = (props) => {
    setState(props);
    storage.set(key, state);
  };

  return [state, dispatch];
};
export default usePersistedReducer;
