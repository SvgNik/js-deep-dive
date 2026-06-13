import { saveSettings, loadSettings } from "./storage";

const settings = { theme: "dark", language: "ru" };
saveSettings("settings", settings);
const result = loadSettings("settings");

console.log(result.theme);
