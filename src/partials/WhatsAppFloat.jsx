import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "../config";
import { trackClick } from "../lib/track";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Halo SmartDeck, saya ingin konsultasi tentang media pembelajaran.")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick("float")}
      aria-label="Chat SmartDeck lewat WhatsApp"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
      className="wa-blink fixed z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-4 font-extrabold text-white shadow-xl shadow-green-900/25 transition hover:-translate-y-1 hover:bg-[#1ebe5b] sm:px-5 sm:py-3"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}