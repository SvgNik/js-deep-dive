import { loadSettings, saveSettings } from "./settings-storage.js";

const settings = { theme: "dark", language: "ru", fontSize: 14 };
saveSettings("settings", settings);
const result = loadSettings("settings");
console.log(result.theme);

result.theme = "light";
saveSettings("settings", result);
const newResult = loadSettings("settings");
console.log(newResult.theme);

const nonExistentKey = loadSettings("invalidKey");
if (nonExistentKey === null) {
  console.log("нет сохранённых настроек");
} else {
  console.log(nonExistentKey.theme);
}
