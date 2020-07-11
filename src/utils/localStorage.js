
export const loadLocalStorageState = (key) => {
  const serializedState = localStorage.getItem(key);

  return JSON.parse(serializedState);
};

export const saveLocalStorageState = ({ key, state }) => {
  const serializedState = JSON.stringify(state);

  localStorage.setItem(key, serializedState);
};
