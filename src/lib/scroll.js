import { useEffect } from "react";

// Tinggi navbar sticky dibaca langsung, jadi tetap pas di HP maupun desktop.
function headerHeight() {
  const header = document.querySelector("header");
  return header ? Math.round(header.getBoundingClientRect().height) : 0;
}

// Posisi scroll agar bagian atas section tepat di bawah navbar.
function targetTop(el) {
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight();
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return Math.max(0, Math.min(Math.round(top), Math.round(max)));
}

// Percepatan lembut di awal, perlambatan lembut di akhir.
const easeInOut = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Atur kecepatan di sini. Naikkan angkanya = scroll makin lambat.
const MIN_MS = 900; // durasi terpendek (jarak dekat)
const MAX_MS = 2000; // durasi terpanjang (jarak jauh)
const MS_PER_PX = 0.5; // tambahan durasi per piksel jarak

const STOP_EVENTS = ["wheel", "touchstart", "keydown", "mousedown"];
let cancelCurrent = null;

function jump(top) {
  window.scrollTo({ top, behavior: "instant" });
}

function animateTo(el) {
  cancelCurrent?.();

  const startY = window.scrollY;
  const distance = Math.abs(targetTop(el) - startY);
  if (distance < 2) return;

  const duration = Math.min(MAX_MS, Math.max(MIN_MS, 600 + distance * MS_PER_PX));
  const startedAt = performance.now();
  let raf;

  const stop = () => {
    cancelAnimationFrame(raf);
    STOP_EVENTS.forEach((type) => window.removeEventListener(type, stop));
    cancelCurrent = null;
  };
  cancelCurrent = stop;

  // Pengguna mulai scroll sendiri: jangan dilawan.
  STOP_EVENTS.forEach((type) =>
    window.addEventListener(type, stop, { passive: true })
  );

  const step = (now) => {
    const p = Math.min(1, (now - startedAt) / duration);
    // Target dihitung ulang tiap frame, jadi tetap pas walau layout bergeser
    // (font, data testimoni, bilah alamat HP naik/turun).
    const end = targetTop(el);
    jump(startY + (end - startY) * easeInOut(p));

    if (p < 1) {
      raf = requestAnimationFrame(step);
    } else {
      jump(targetTop(el));
      stop();
    }
  };

  raf = requestAnimationFrame(step);
}

export function scrollToId(id, { smooth = true } = {}) {
  const el = document.getElementById(id);
  if (!el) return false;

  const reduce = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (smooth && !reduce) {
    animateTo(el);
  } else {
    cancelCurrent?.();
    jump(targetTop(el));
  }
  return true;
}

// Pasang sekali di App: semua <a href="#..."> otomatis memakai scrollToId.
export function useAnchorScroll() {
  useEffect(() => {
    const onClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;

      const id = decodeURIComponent(link.getAttribute("href").slice(1));
      if (!id) return;

      if (scrollToId(id)) {
        event.preventDefault();
        window.history.replaceState(null, "", `#${id}`);
      }
    };

    document.addEventListener("click", onClick);

    // Halaman dibuka langsung dengan #layanan dst.
    const initialId = decodeURIComponent(window.location.hash.slice(1));
    if (initialId) {
      requestAnimationFrame(() => scrollToId(initialId, { smooth: false }));
      document.fonts?.ready.then(() =>
        scrollToId(initialId, { smooth: false })
      );
    }

    return () => {
      document.removeEventListener("click", onClick);
      cancelCurrent?.();
    };
  }, []);
}
