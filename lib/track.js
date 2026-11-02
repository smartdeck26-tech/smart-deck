import { SCRIPT_URL } from "../config";

export function getVisitorId() {
  const key = "smartdeck_visitor_id";
  try {
    let id = localStorage.getItem(key);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(key, id);
    }
    return id;
  } catch {
    return "anonim";
  }
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
