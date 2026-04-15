export const storage = {
  get(key) {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    window.localStorage.removeItem(key);
  },
};
