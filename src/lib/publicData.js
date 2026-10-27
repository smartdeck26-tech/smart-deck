import { SCRIPT_URL } from "../config";
import { trackVisit } from "./track";

const CACHE_KEY = "smartdeck_public_cache";
let cache = null;

// Data terakhir yang berhasil dimuat (dipakai saat jaringan gagal).
export function getCachedPublicData() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* abaikan */
  }
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Cara 1: JSONP (tag <script>).
function viaJsonp(timeoutMs) {
  return new Promise((resolve) => {
    const name = "smartDeckCallback_" + Math.random().toString(36).slice(2);
    const script = document.createElement("script");
    let done = false;

    function finish(data) {
      if (done) return;
      done = true;
      window.clearTimeout(timer);
      delete window[name];
      script.remove();
      resolve(data || null);
    }

    const timer = window.setTimeout(() => finish(null), timeoutMs);
    window[name] = (data) => finish(data);
    script.onerror = () => finish(null);
    script.src = `${SCRIPT_URL}?callback=${name}&t=${Date.now()}`;
    document.body.appendChild(script);
  });
}

// Cara 2: fetch teks, lalu buang pembungkus callback. Tidak lewat tag <script>,
// jadi lolos dari pemblokir script pihak ketiga.
async function viaFetch(timeoutMs) {
  const ctrl = new AbortController();
  const timer = window.setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${SCRIPT_URL}?callback=cb&t=${Date.now()}`, {
      signal: ctrl.signal,
      redirect: "follow",
    });
    const text = await res.text();
    const match = text.match(/^[^({]*\(([\s\S]*)\)\s*;?\s*$/);
    return JSON.parse(match ? match[1] : text);
  } catch {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}

async function load() {
  // Kirim kunjungan dulu (maks 1,5 detik) supaya hitungan sudah termasuk pengunjung ini.
  await Promise.race([trackVisit(), wait(1500)]);

  let data = await viaJsonp(15000);
  if (!data) data = await viaFetch(15000);
  if (!data) {
    await wait(1500);
    data = await viaJsonp(20000);
  }
  if (!data) data = await viaFetch(20000);
  return data;
}

// Ambil data publik (jumlah pengunjung + testimoni) sekali saja, dipakai bersama.
export function fetchPublicData() {
  if (cache) return cache;

  cache = load().then((data) => {
    if (data) {
      saveCache(data);
      return data;
    }
    cache = null; // gagal: boleh dicoba lagi
    return getCachedPublicData(); // pakai data lama kalau ada
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
