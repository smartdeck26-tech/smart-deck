import { SCRIPT_URL } from "../config";

let memoryId = null;

function makeId() {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      const b = crypto.getRandomValues(new Uint8Array(16));
      return Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
    }
  } catch {
    /* lanjut ke cadangan */
  }
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 12);
}

export function getVisitorId() {
  const key = "smartdeck_visitor_id";
  for (const store of ["localStorage", "sessionStorage"]) {
    try {
      const s = window[store];
      let id = s.getItem(key);
      if (!id) {
        id = makeId();
        s.setItem(key, id);
      }
      return id;
    } catch {
      /* storage diblokir, coba berikutnya */
    }
  }
  if (!memoryId) memoryId = makeId();
  return memoryId;
}

// Catat klik tombol WhatsApp. `source` = posisi tombol (navbar, cta, float, dst).
export function trackClick(source) {
  try {
    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        action: "click",
        source,
        visitorId: getVisitorId(),
      }),
    }).catch(() => {});
  } catch {
    /* abaikan: pelacakan tidak boleh mengganggu navigasi */
  }
}

// Catat kunjungan sekali per muat halaman. Promise yang sama dipakai bersama.
let visitPromise = null;
export function trackVisit() {
  if (visitPromise) return visitPromise;
  visitPromise = new Promise((resolve) => {
    try {
      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action: "visit", visitorId: getVisitorId() }),
      })
        .then(() => resolve(true))
        .catch(() => resolve(false));
    } catch {
      resolve(false);
    }
  });
  return visitPromise;
}
