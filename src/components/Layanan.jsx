import { waLink } from "../config";
import { trackClick } from "../lib/track";

const rupiah = (n) => `Rp${n.toLocaleString("id-ID")}`;

const IMG_W = 1672;
const IMG_H = 941;

const services = [
  {
    number: "01",
    icon: "🎨",
    title: "Media Pembelajaran Canva",
    desc: "Pembuatan media pembelajaran visual yang menarik, terstruktur, dan mudah dipahami siswa.",
    tags: ["Canva", "Materi Interaktif", "Desain Visual"],
    tone: "blue",
    harga: 15000,
    satuan: "materi",
    catatan: "±10 slide",
    gambar: "/layanan/canva.png",
    gambarAlt:
      "Banner layanan media pembelajaran Canva dengan dua siswa dan tampilan editor Canva di laptop",
  },
  {
    number: "02",
    icon: "🎮",
    title: "Evaluasi Interaktif Wordwall",
    desc: "Pembuatan aktivitas evaluasi berbasis permainan untuk menguji pemahaman siswa dengan cara menyenangkan.",
    tags: ["Wordwall", "Kuis", "Evaluasi"],
    tone: "orange",
    harga: 30000,
    satuan: "materi",
    catatan: "±10 soal",
    gambar: "/layanan/wordwall.png",
    gambarAlt:
      "Banner layanan evaluasi interaktif Wordwall dengan dua siswa dan permainan kuis di laptop",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Paket Media Terintegrasi",
    desc: "Kombinasi Canva dan Wordwall untuk menghadirkan pengalaman belajar dari penyampaian materi hingga evaluasi.",
    tags: ["Canva + Wordwall", "Interaktif", "Terintegrasi"],
    tone: "gradient",
    harga: 40000,
    satuan: "materi",
    catatan: "±10 slide + ±10 soal",
    hemat: 5000,
    gambar: "/layanan/terintegrasi.png",
    gambarAlt:
      "Banner paket media terintegrasi Canva dan Wordwall dengan dua siswa, laptop, dan tablet",
  },
];

const toneBg = (tone) =>
  tone === "orange"
    ? "bg-orange-50"
    : tone === "gradient"
      ? "bg-gradient-to-br from-blue-50 to-orange-50"
      : "bg-blue-50";

const SectionHeading = ({ eyebrow, title, desc }) => (
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#F7963A]">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-black leading-tight text-[#024C99] sm:text-4xl">
      {title}
    </h2>
    <p className="mt-4 leading-7 text-slate-600">{desc}</p>
  </div>
);

const Layanan = () => {
  return (
    <section
      id="layanan"
      className="bg-[#F7FBFF] px-5 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Apa yang kami kerjakan"
          title="Media belajar yang dirancang lebih interaktif"
          desc="Pilih layanan yang dibutuhkan atau kombinasikan semuanya menjadi satu pengalaman pembelajaran."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.number}
              className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100/70"
            >
              {/* Gambar layanan: rasio kotak = rasio file (16:9), tidak terpotong */}
              <div
                className={`relative aspect-video overflow-hidden ${toneBg(s.tone)}`}
              >
                <img
                  src={s.gambar}
                  alt={s.gambarAlt}
                  width={IMG_W}
                  height={IMG_H}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-7 pt-6">
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl text-xl ${toneBg(s.tone)}`}
                  >
                    <span aria-hidden="true">{s.icon}</span>
                  </span>

                  <span className="text-sm font-black text-slate-300">
                    {s.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-slate-900">
                  {s.title}
                </h3>

                <p className="mt-3 min-h-[96px] leading-7 text-slate-500">
                  {s.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-blue-50 pt-5">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Mulai dari
                    </p>
                    {s.hemat && (
                      <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[11px] font-extrabold text-[#F7963A]">
                        Hemat {rupiah(s.hemat)}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-2xl font-black text-[#024C99]">
                    {rupiah(s.harga)}
                    <span className="ml-1 text-sm font-bold text-slate-400">
                      / {s.satuan}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {s.catatan} · harga menyesuaikan jumlah materi
                  </p>
                </div>

                <a
                  onClick={() => trackClick("layanan")}
                  href={waLink(
                    `Halo SmartDeck, saya ingin konsultasi tentang ${s.title}.`
                  )}
                  className="mt-5 inline-flex items-center gap-2 font-extrabold text-[#024C99] transition-all group-hover:gap-3"
                >
                  Diskusikan kebutuhan
                  <span aria-hidden="true" className="text-[#F7963A]">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Canva dan Wordwall adalah merek dagang milik masing-masing pemiliknya.
          SmartDeck adalah layanan independen dan tidak berafiliasi resmi.
        </p>
      </div>
    </section>
  );
};

export default Layanan;