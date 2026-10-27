import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export const THEME_KEY = "smartdeck-theme";
const LIGHT_COLOR = "#024C99";
const DARK_COLOR = "#0a1424";

const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");
const reducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function getStoredMode() {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === "light" || v === "dark" || v === "system" ? v : "system";
  } catch {
    return "system";
  }
}

export function applyMode(mode) {
  const dark = mode === "dark" || (mode === "system" && darkQuery().matches);
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? DARK_COLOR : LIGHT_COLOR);
}

export function useTheme() {
  const [mode, setModeState] = useState(getStoredMode);
  const modeRef = useRef(mode);
  modeRef.current = mode;

  useEffect(() => {
    applyMode(mode);
    if (mode !== "system") return;

    const query = darkQuery();
    const onChange = () => applyMode("system");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [mode]);

  const setMode = useCallback((next) => {
    if (next === modeRef.current) return;

    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      
    }

    const root = document.documentElement;

    if (document.startViewTransition && !reducedMotion()) {
      document.startViewTransition(() => {
        flushSync(() => setModeState(next));
        applyMode(next);
      });
      return;
    }

    if (!reducedMotion()) {
      root.classList.add("theme-fade");
      setTimeout(() => root.classList.remove("theme-fade"), 400);
    }
    setModeState(next);
  }, []);

  return { mode, setMode };
}