import { type Config } from "tailwindcss";
import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes.js";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  // @ts-ignore - DaisyUI is not typed
  plugins: [daisyui],
  daisyui: {
    themes: [
      // set themes for light/dark mode other than the default
      {
        // @ts-ignore Types don't work with this
        light: { ...themes.cmyk, primary: "#1A9AEA" },
        // @ts-ignore Types don't work with this
        dark: themes.forest,
      },
      // "light",
      // "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      // "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      // "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "dim",
      "nord",
      "sunset",
      "winter",
    ],
  },
} satisfies Config;
