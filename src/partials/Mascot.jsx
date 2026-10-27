import { useEffect, useId, useState } from "react";
import { waLink } from "../config";
import { trackClick } from "../lib/track";

const messages = [
  "Halo! Aku Deki \u{1F44B}",
  "Mau media belajar yang seru?",
  "Kuis Wordwall bikin siswa semangat!",
  "Klik aku untuk konsultasi gratis!",
];
const last = messages.length - 1;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function Mascot({ variant = "preview" }) {
  const gradId = `sdBody${useId().replace(/:/g, "")}`;
  const isTop = variant === "top";
  const [index, setIndex] = useState(() => (prefersReducedMotion() ? last : 0));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready || index >= last) return;
    const timer = setTimeout(() => setIndex(index + 1), 4200);
    return () => clearTimeout(timer);
  }, [ready, index]);

  return (
    <div
      className={
        isTop
          ? "relative z-20 mb-5 flex justify-end md:hidden"
          : "absolute bottom-full right-8 z-20 hidden translate-y-3 md:block"
      }
    >
      <a
        href={waLink("Halo SmartDeck, saya ingin konsultasi tentang media pembelajaran.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick(isTop ? "maskot-top" : "maskot")}
        aria-label="Chat SmartDeck lewat WhatsApp bersama maskot Deki"
        className="sd-mascot flex items-start gap-2 rounded-3xl outline-offset-4"
      >
        <span
          aria-hidden="true"
          className={`relative mt-3 max-w-[9.5rem] rounded-2xl border border-blue-100 bg-white px-3 py-2 text-xs font-bold leading-snug text-[#024C99] shadow-lg shadow-blue-100/70 transition-opacity duration-500 sm:max-w-[11rem] sm:text-sm ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <span key={index} className="sd-bubble-text block">
            {messages[index]}
          </span>
          <span className="absolute -right-1.5 top-4 h-3 w-3 rotate-45 border-r border-t border-blue-100 bg-white" />
        </span>

        <svg
          viewBox="0 0 160 172"
          className={`block h-auto shrink-0 overflow-visible ${
            isTop ? "w-20 sm:w-24" : "w-32"
          }`}
          aria-hidden="true"
          focusable="false"
        >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#024C99" />
            <stop offset="1" stopColor="#009DFC" />
          </linearGradient>
        </defs>

        <ellipse className="sd-shadow" cx="80" cy="164" rx="36" ry="5.5" fill="#024C99" opacity="0.16" />

        <g className="sd-float">
          <g className="sd-hop">
            <rect x="48" y="140" width="24" height="14" rx="7" fill="#F7963A" />
            <rect x="88" y="140" width="24" height="14" rx="7" fill="#F7963A" />

            <g className="sd-wave">
              <path d="M124 100 Q142 96 146 76" fill="none" stroke="#024C99" strokeWidth="9" strokeLinecap="round" />
              <circle cx="146" cy="74" r="7.5" fill="#fff" stroke="#024C99" strokeWidth="2.5" />
            </g>

            <path d="M36 102 Q20 108 20 124" fill="none" stroke="#024C99" strokeWidth="9" strokeLinecap="round" />
            <g className="sd-pencil">
              <rect x="16.5" y="102" width="7" height="5" rx="1.5" fill="#FF8FA3" />
              <rect x="16.5" y="107" width="7" height="3" fill="#B8C4D6" />
              <rect x="16.5" y="110" width="7" height="26" fill="#FFC93C" />
              <polygon points="16.5,136 23.5,136 20,145" fill="#F5D0A0" />
              <polygon points="18.5,141 21.5,141 20,145" fill="#0B2F5C" />
            </g>
            <circle cx="20" cy="125" r="7.5" fill="#fff" stroke="#024C99" strokeWidth="2.5" />

            <rect x="32" y="56" width="96" height="92" rx="26" fill={`url(#${gradId})`} />
            <rect x="43" y="67" width="74" height="54" rx="17" fill="#F3F9FF" />

            <g className="sd-eyes">
              <ellipse cx="66" cy="90" rx="5.5" ry="7.5" fill="#0B2F5C" />
              <ellipse cx="94" cy="90" rx="5.5" ry="7.5" fill="#0B2F5C" />
              <circle cx="68" cy="87" r="1.8" fill="#fff" />
              <circle cx="96" cy="87" r="1.8" fill="#fff" />
            </g>
            <ellipse cx="54" cy="100" rx="5" ry="3" fill="#F7963A" opacity="0.35" />
            <ellipse cx="106" cy="100" rx="5" ry="3" fill="#F7963A" opacity="0.35" />
            <path d="M70 102 Q80 114 90 102Z" fill="#0B2F5C" />
            <ellipse cx="80" cy="105.8" rx="4" ry="2" fill="#FF8FA3" />

            <circle cx="68" cy="135" r="3.6" fill="#fff" opacity="0.9" />
            <circle cx="80" cy="135" r="3.6" fill="#fff" opacity="0.55" />
            <circle cx="92" cy="135" r="3.6" fill="#F7963A" />

            <path d="M58 44 L58 58 Q80 68 102 58 L102 44 Q80 54 58 44Z" fill="#12427D" />
            <polygon points="80,22 124,38 80,54 36,38" fill="#0B2F5C" />
            <path d="M80 38 L120 40" fill="none" stroke="#F7963A" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="80" cy="38" r="2.8" fill="#F7963A" />
            <g className="sd-tassel">
              <path d="M120 40 L120 57" fill="none" stroke="#F7963A" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M116.5 56 H123.5 L125 66 H115Z" fill="#F7963A" />
            </g>

            <g transform="translate(26 44)">
              <path className="sd-spark" d="M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z" fill="#F7963A" />
            </g>
            <g transform="translate(138 26) scale(0.8)">
              <path className="sd-spark sd-d1" d="M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z" fill="#009DFC" />
            </g>
            <g transform="translate(146 118) scale(0.65)">
              <path className="sd-spark sd-d2" d="M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z" fill="#F7963A" />
            </g>
          </g>
        </g>
        </svg>
      </a>
    </div>
  );
}
