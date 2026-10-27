import { useEffect, useState } from "react";

// Menghitung naik dari 0 sampai `target` (easeOutCubic).
// Otomatis langsung ke angka akhir kalau pengguna memilih "kurangi animasi".
export default function useCountUp(target, { duration = 1800 } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!target || target < 0) {
      setValue(0);
      return;
    }

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setValue(target);
      return;
    }

    let raf;
    let startTime;

    const tick = (now) => {
      if (startTime === undefined) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(progress === 1 ? target : Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    setValue(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}
