import React, { useEffect } from 'react';

const usePersistedReducer = (reducer, initialState, init, key, storage) => {
  const [state, dispatch] = React.useReducer(reducer, storage.get(key, initialState), init);

  useEffect(() => {
    storage.set(key, state);
  }, [state]);

  return [state, dispatch];
};
export default usePersistedReducer;
