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

// Setelah scroll berhenti, cek ulang posisi. Layout bisa bergeser selama
// animasi (font, data testimoni, bilah alamat HP naik/turun), jadi koreksi.
function settle(el) {
  const startedAt = performance.now();
  let lastY = window.scrollY;
  let lastMove = startedAt;
  let fixes = 0;
  let raf;

  const stop = () => {
    cancelAnimationFrame(raf);
    ["wheel", "touchstart", "keydown"].forEach((type) =>
      window.removeEventListener(type, stop)
    );
  };

  // Pengguna mulai scroll sendiri: jangan dilawan.
  ["wheel", "touchstart", "keydown"].forEach((type) =>
    window.addEventListener(type, stop, { passive: true, once: true })
  );

  const check = (now) => {
    if (window.scrollY !== lastY) {
      lastY = window.scrollY;
      lastMove = now;
    }

    const idle = now - lastMove > 150;
    if (idle) {
      if (Math.abs(targetTop(el) - window.scrollY) > 1 && fixes < 3) {
        fixes += 1;
        window.scrollTo({ top: targetTop(el), behavior: "auto" });
        lastMove = now;
      } else {
        stop();
        return;
      }
    }

    if (now - startedAt > 3000) {
      stop();
      return;
    }
    raf = requestAnimationFrame(check);
  };

  raf = requestAnimationFrame(check);
}

export function scrollToId(id, { smooth = true } = {}) {
  const el = document.getElementById(id);
  if (!el) return false;

  const reduce = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({
    top: targetTop(el),
    behavior: smooth && !reduce ? "smooth" : "auto",
  });
  settle(el);
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

    return () => document.removeEventListener("click", onClick);
  }, []);
}
