import { nomorwa } from "../config";
import { trackClick } from "../lib/track";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#024C99] to-[#009DFC] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-white/65">
            Mulai dari ide Anda
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
            Punya materi yang ingin dibuat lebih menarik?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-white/75">
            Mari diskusikan konsep media pembelajaran yang cocok
            untuk kelas atau program Anda.
          </p>
        </div>

        <a
          onClick={() => trackClick("cta")}
          href={`https://wa.me/${nomorwa}?text=Halo%20SmartDeck%2C%20saya%20ingin%20konsultasi%20gratis.`}
          className="shrink-0 rounded-full bg-[#F7963A] px-7 py-4 font-extrabold text-white shadow-xl shadow-blue-950/20 transition hover:-translate-y-1 hover:bg-orange-500"
        >
          Konsultasi sekarang ↗
        </a>
      </div>
    </section>
  );
}