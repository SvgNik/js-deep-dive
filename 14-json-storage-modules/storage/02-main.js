import { saveSettings, loadSettings } from "./02-storage.js";

const settings = { theme: "dark", language: "ru" };
saveSettings("settings", settings);
const result = loadSettings("settings");

console.log(result.theme);
