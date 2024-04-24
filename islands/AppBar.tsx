import { Icon } from "@iconify-icon/react";
import axios from "axios";
import { useEffect, useState } from "preact/hooks";

function toggleTheme(themes: string[]) {
  const html = document.querySelector("html");
  const theme = html?.getAttribute("data-theme");
  // assign a random theme except the current one
  const filteredThemes = themes.filter((t) => t !== theme);
  const randomTheme = filteredThemes[Math.floor(Math.random() * themes.length)];

  html?.setAttribute("data-theme", randomTheme);
}
export default function AppBar() {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    axios.get("/api/themes").then((res) => {
      setThemes(res.data);
    });
  }, []);

  return (
    <nav class="flex justify-between items-center p-2">
      <a href="/" class="text-xl font-bold flex items-center">
        <Icon icon="fa6-brands:dev" width="32" height="32" />Portfolio
      </a>
      <ul class="flex gap-2">
        <li>
          <a class="btn btn-primary" href="/cv.pdf" download>
            Download CV
          </a>
        </li>
        <li>
          <button class="btn" onClick={() => toggleTheme(themes)}>
            <Icon
              class="active:animate-spin"
              icon="ri:dice-line"
              width="24"
              height="24"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
