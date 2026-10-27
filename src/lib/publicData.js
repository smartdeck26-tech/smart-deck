import { SCRIPT_URL } from "../config";

let cache = null;

// Ambil data publik (jumlah pengunjung + testimoni) sekali saja, dipakai bersama.
export function fetchPublicData() {
  if (cache) return cache;

  cache = new Promise((resolve) => {
    const callbackName =
      "smartDeckCallback_" + Math.random().toString(36).slice(2);
    const script = document.createElement("script");

    function finish(data) {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
      if (!data) cache = null; // gagal: boleh dicoba lagi
      resolve(data);
    }

    const timeout = window.setTimeout(() => finish(null), 12000);
    window[callbackName] = (data) => finish(data);
    script.onerror = () => finish(null);
    script.src = `${SCRIPT_URL}?callback=${callbackName}&t=${Date.now()}`;
    document.body.appendChild(script);
  });

  return cache;
}

export function ratingSummary(testimonials = []) {
  const ratings = testimonials
    .map((t) => Number(t.rating))
    .filter((r) => Number.isFinite(r) && r >= 1 && r <= 5);
  if (!ratings.length) return null;
  const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
  return { avg: avg.toFixed(1), count: ratings.length };
}
