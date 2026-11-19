import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
let envFile = "";

try {
  envFile = await readFile(resolve(root, ".env"), "utf8");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const fileValues = {};
for (const line of envFile.split(/\r?\n/)) {
  const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
  if (!match || match[1].startsWith("#")) continue;
  let value = match[2];
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1);
  }
  fileValues[match[1]] = value;
}

const readValue = name => process.env[name]?.trim() || fileValues[name]?.trim() || "";
const config = {
  serviceId: readValue("EMAILJS_SERVICE_ID"),
  templateId: readValue("EMAILJS_TEMPLATE_ID"),
  publicKey: readValue("EMAILJS_PUBLIC_KEY")
};
const missing = Object.entries(config).filter(([, value]) => !value).map(([name]) => name);

if (missing.length) {
  throw new Error(`Missing EmailJS configuration: ${missing.join(", ")}. Set these values in .env or the build environment.`);
}

const output = `window.WEARETECH_EMAILJS_CONFIG = Object.freeze(${JSON.stringify(config)});\n`;
await writeFile(resolve(root, "assets/js/email-config.js"), output, "utf8");
console.log("Generated assets/js/email-config.js from the EmailJS environment values.");
