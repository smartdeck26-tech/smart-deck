import { useState } from "react";
import { waLink } from "../config";
import { trackClick } from "../lib/track";

/*
  Isi daftar ini kalau hasil nyata sudah ada. Kosong = tampil "segera hadir".
  Simpan gambar di folder public/portofolio/.

  {
    id: "ipa-gaya",                         // unik
    judul: "Media IPA: Gaya dan Gerak",
    jenis: "Canva",                         // "Canva" atau "Wordwall"
    jenjang: "SMP",                         // opsional
    sesudah: "/portofolio/ipa-sesudah.jpg", // wajib
    sebelum: "/portofolio/ipa-sebelum.jpg", // opsional, memunculkan tombol Sebelum/Sesudah
    link: "https://www.canva.com/...",      // opsional, tombol "Lihat demo"
  }
*/
const karya = [
  {
    id: "iki asune",
    judul: "Fotonya Rizki",
    jenis: "cahaya",
    jenjang: "SMP",
    sebelum: "/public/portofolio/sebelum.jpg",
    sesudah: "/public/portofolio/sesudah.jpg",
    link: "https://www.instagram.com/rzkyasunee_"
  }
];

const Kartu = ({ item }) => {
  const [lihat, setLihat] = useState("sesudah");
  const adaSebelum = Boolean(item.sebelum);
  const gambar = lihat === "sebelum" && adaSebelum ? item.sebelum : item.sesudah;

  return (
    <article className="overflow-hidden rounded-3xl border border-blue-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60">
      <div className="relative aspect-video bg-blue-50">
        <img
          src={gambar}
          alt={`${item.judul} (${lihat})`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {adaSebelum && (
          <div className="absolute bottom-3 left-3 flex rounded-full bg-white/90 p-1 text-xs font-extrabold shadow">
            {["sebelum", "sesudah"].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setLihat(k)}
                aria-pressed={lihat === k}
                className={`rounded-full px-3 py-1 capitalize ${
                  lihat === k ? "bg-[#024C99] text-white" : "text-slate-600"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[#024C99]">
            {item.jenis}
          </span>
          {item.jenjang && (
            <span className="rounded-full bg-orange-50 px-3 py-1 text-[#D97720]">
              {item.jenjang}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-lg font-black text-slate-800">{item.judul}</h3>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex font-extrabold text-[#024C99]"
          >
            Lihat demo ↗
          </a>
        )}
      </div>
    </article>
  );
};

export default function Portofolio() {
  return (
    <section id="portofolio" className="bg-[#F7FBFF] px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#F7963A]">
            Portofolio
          </p>
          <h2 className="text-3xl font-black leading-tight text-[#024C99] sm:text-4xl">
            Contoh Hasil Media Pembelajaran
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Lihat tampilan media Canva dan evaluasi Wordwall yang kami buat.
          </p>
        </div>

        {karya.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {karya.map((item) => (
              <Kartu key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl rounded-3xl border-2 border-dashed border-blue-200 bg-white p-8 text-center sm:p-12">
            <span className="text-5xl" aria-hidden="true">🖼️</span>
            <h3 className="mt-4 text-xl font-black text-[#024C99]">
              Portofolio segera hadir
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Contoh hasil nyata sedang disiapkan. Ingin melihat contoh yang
              sesuai kebutuhan Anda? Tanyakan langsung lewat WhatsApp.
            </p>
            <a
              href={waLink("Halo SmartDeck, saya ingin melihat contoh hasil media pembelajaran.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("portofolio")}
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC] px-6 py-3 font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1"
            >
              Minta contoh hasil ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
