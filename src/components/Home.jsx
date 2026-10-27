import { useEffect, useState } from "react";
import { fetchPublicData, ratingSummary } from "../lib/publicData";

const CanvaPreview = () => {
  return (
    <div className="relative mx-auto max-w-lg">
      {/* Dekorasi */}
      <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-orange-100 blur-2xl" />
      <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-blue-100 blur-2xl" />

      {/* Preview media pembelajaran */}
      <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-100/70 sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#024C99] to-[#009DFC] font-black text-white">
              S
            </div>
            <div>
              <p className="font-black text-slate-800">SmartDeck</p>
              <p className="text-xs text-slate-400">Learning media preview</p>
            </div>
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#024C99]">
            Canva
          </span>
        </div>

        <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#024C99] to-[#009DFC] p-6 text-white sm:p-8">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
            MEDIA PEMBELAJARAN
          </span>

          <h3 className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
            Belajar Jadi Lebih Seru!
          </h3>

          <p className="mt-3 max-w-xs text-sm leading-6 text-blue-50">
            Pahami materi, eksplorasi ide, dan temukan pengalaman belajar
            yang menyenangkan.
          </p>

          <div className="mt-6 flex gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl">
              📚
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7963A] text-xl">
              💡
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 text-xl">
              ✨
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-orange-100 bg-orange-50/70 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#D97720]">
                Evaluasi interaktif
              </p>
              <p className="mt-1 font-black text-slate-800">Uji pemahamanmu!</p>
            </div>

            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#F7963A] text-2xl">
              🎮
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <span className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-600">
              Kuis
            </span>
            <span className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-600">
              Tebak kata
            </span>
            <span className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-600">
              Wordwall
            </span>
          </div>
        </div>
      </div>

      {/* Label mengambang */}
      <div className="absolute -left-3 top-24 rounded-2xl border border-blue-100 bg-white p-3 shadow-lg sm:-left-8">
        <p className="text-xs font-bold text-slate-400">Media kreatif</p>
        <p className="mt-1 text-sm font-black text-[#024C99]">
          🎨 Canva
        </p>
      </div>

      <div className="absolute -bottom-4 right-0 rounded-2xl border border-orange-100 bg-white p-3 shadow-lg sm:-right-5">
        <p className="text-xs font-bold text-slate-400">Belajar aktif</p>
        <p className="mt-1 text-sm font-black text-[#D97720]">
          🎯 Wordwall
        </p>
      </div>
    </div>
  );
};

const SocialProof = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let active = true;
    fetchPublicData().then((d) => active && setData(d));
    return () => {
      active = false;
    };
  }, []);

  const rating = ratingSummary(data?.testimonials);
  const visitors = Number(data?.visitorCount) || 0;

  return (
    <div className="mt-6 flex min-h-[3.25rem] flex-wrap items-center gap-3">
      {rating && (
        <div className="flex items-center gap-2 rounded-2xl border border-orange-100 bg-orange-50/70 px-4 py-2">
          <span className="text-lg text-[#F7963A]" aria-hidden="true">★</span>
          <p className="text-sm font-bold text-slate-700">
            {rating.avg}/5
            <span className="font-semibold text-slate-500">
              {" "}dari {rating.count} ulasan
            </span>
          </p>
        </div>
      )}
      {visitors > 0 && (
        <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-2">
          <span className="text-lg" aria-hidden="true">👀</span>
          <p className="text-sm font-bold text-slate-700">
            {visitors.toLocaleString("id-ID")}
            <span className="font-semibold text-slate-500"> pengunjung</span>
          </p>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-7xl items-center gap-16 overflow-hidden px-5 py-16 sm:px-8 md:min-h-[690px] md:grid-cols-2 md:py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />

      {/* Konten utama */}
      <div className="relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-sm font-bold text-[#024C99]">
          <span className="text-[#F7963A]">✦</span>
          Partner media pembelajaran kreatif
        </span>

        <h1 className="mt-6 max-w-xl text-5xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.25rem]">
          Belajar lebih menarik,{" "}
          <span className="bg-gradient-to-r from-[#024C99] to-[#009DFC] bg-clip-text text-transparent">
            evaluasi lebih interaktif.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
          SmartDeck membantu pendidik membuat media pembelajaran interaktif
          dengan Canva dan evaluasi menyenangkan menggunakan Wordwall,
          dirancang sesuai kebutuhan belajar Anda.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#layanan"
            className="rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC] px-7 py-4 font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1"
          >
            Jelajahi layanan ↗
          </a>

          <a
            href="#tentang"
            className="rounded-full border-2 border-blue-100 bg-white px-7 py-4 font-extrabold text-[#024C99] transition hover:border-[#009DFC] hover:bg-blue-50"
          >
            Kenali SmartDeck
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
          <span>✓ Desain sesuai kebutuhan</span>
          <span>✓ Materi dan evaluasi terpadu</span>
          <span>✓ Lebih menarik untuk siswa</span>
        </div>

        <SocialProof />
      </div>

      {/* Ilustrasi media pembelajaran */}
      <div className="relative z-10 px-2 pb-5 pt-3 sm:px-6">
        <CanvaPreview />
      </div>
    </section>
  );
};

export default Home;