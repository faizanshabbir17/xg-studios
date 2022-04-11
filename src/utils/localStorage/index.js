const storeLocalData = (key, value) => {
  localStorage.setItem(key, value);
};

const getLocalData = (key) => localStorage.getItem(key);

const clearAllLocalData = () => {
  localStorage.clear();
};

const clearLocalData = (key) => {
  localStorage.removeItem(key);
};

export { storeLocalData, getLocalData, clearAllLocalData, clearLocalData };
