import { Icon, loadIcon } from "@iconify-icon/react";
import axios from "axios";
import { useEffect, useState } from "preact/hooks";

// preload icons
loadIcon("fa6-brands:dev");
loadIcon("ri:dice-line");

function toggleTheme(themes: string[]) {
  const html = document.querySelector("html");
  const theme = html?.getAttribute("data-theme");
  // assign a random theme except the current one
  const filteredThemes = themes.filter((t) => t !== theme);
  const randomTheme = filteredThemes[Math.floor(Math.random() * themes.length)];

  html?.setAttribute("data-theme", randomTheme);
  localStorage.setItem("theme", randomTheme);
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
        <div class="w-8 h-8">
          <Icon
            icon="fa6-brands:dev"
            width="32"
            height="32"
          />
        </div>Portfolio
      </a>
      <ul class="flex gap-2">
        <li>
          <a class="btn btn-primary" href="/cv.pdf" download>
            Download CV
          </a>
        </li>
        <li>
          <button
            class="btn"
            aria-label="change Theme"
            onClick={() => toggleTheme(themes)}
          >
            <div class="w-6 h-6">
              <Icon
                class="active:animate-spin"
                icon="ri:dice-line"
                width="24"
                height="24"
              />
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
