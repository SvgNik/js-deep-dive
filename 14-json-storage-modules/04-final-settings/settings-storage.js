export function saveSettings(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadSettings(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function clearSettings(key) {
  localStorage.removeItem(key);
}
