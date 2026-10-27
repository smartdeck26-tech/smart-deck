import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "../config";
import { trackClick } from "../lib/track";

export default function WhatsAppFloat() {
  return (
    <div
      className="wa-float fixed z-50"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
    >
      <a
        href={waLink("Halo SmartDeck, saya ingin konsultasi tentang media pembelajaran.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("float")}
        aria-label="Chat SmartDeck lewat WhatsApp"
        className="wa-btn relative flex items-center gap-2 rounded-full bg-[#25D366] p-4 font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#1ebe5b] sm:px-5 sm:py-3"
      >
        <FaWhatsapp className="wa-icon h-7 w-7" aria-hidden="true" />
        <span className="hidden sm:inline">Chat WhatsApp</span>
        <span
          aria-hidden="true"
          className="wa-dot absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-red-500 ring-2 ring-white"
        />
      </a>
    </div>
  );
}