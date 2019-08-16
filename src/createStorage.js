const createStorage = (provider) => ({
  get(key, initialState) {
    const json = provider.getItem(key);
    return json === null
      ? typeof initialState === 'function'
        ? initialState()
        : initialState
      : JSON.parse(json);
  },
  set(key, value) {
    provider.setItem(key, JSON.stringify(value));
  },
});

export default createStorage;
