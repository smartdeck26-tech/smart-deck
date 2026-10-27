import Brand from "./Brand";
import { nomorwa } from "../config";
import { trackClick } from "../lib/track";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const socialMedia = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/smartdeck10_",
  },

  {
    name: "Facebook",
    icon: FaFacebook,
    link: "#",
    // https://www.facebook.com/USERNAME
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "#",
    // https://www.youtube.com/@USERNAME
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@smartdeck10_",
  },
];

const nav = [
  ["Beranda", "#home"],
  ["Layanan", "#layanan"],
  ["Paket", "#paket"],
  ["Tentang", "#tentang"],
  ["Kontak", "#kontak"],
];

export default function Footer() {
  return (
    <footer className="bg-[#01366D] px-5 pb-8 pt-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Brand light />

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            Membantu pendidik menciptakan pengalaman belajar yang
            lebih visual, interaktif, dan bermakna melalui Canva
            dan Wordwall.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-extrabold text-[#F7963A]">
            Navigasi
          </h4>

          <div className="grid gap-3 text-sm text-white/70">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

<div>
  <h4 className="mb-4 font-extrabold text-[#F7963A]">
    Media Sosial
  </h4>

  <div className="flex items-center gap-4">
    {socialMedia.map((social) => {
      const Icon = social.icon;

      return (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
          className="text-2xl text-white/70 transition hover:-translate-y-1 hover:text-[#F7963A]"
        >
          <Icon />
        </a>
      );
    })}
  </div>
</div>

        <div>
          <h4 className="mb-4 font-extrabold text-[#F7963A]">
            Hubungi SmartDeck
          </h4>

          <p className="text-sm leading-7 text-white/65">
            Punya pertanyaan atau ide media pembelajaran? Ceritakan
            melalui formulir konsultasi.
          </p>

          <a
            onClick={() => trackClick("footer")}
            href={`https://wa.me/${nomorwa}?text=Halo%20SmartDeck%2C%20saya%20ingin%20konsultasi%20gratis.`}
            className="mt-4 inline-flex rounded-full bg-[#F7963A] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-orange-500"
          >
            Mulai konsultasi ↗
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} SmartDeck. Media pembelajaran
        interaktif Canva + Wordwall.
      </div>
    </footer>
  );
}