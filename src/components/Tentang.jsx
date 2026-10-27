const steps = [
  {
    n: "01",
    title: "Pahami kebutuhan",
    desc: "Kami mulai dari tujuan belajar, topik, dan karakter peserta didik.",
  },
  {
    n: "02",
    title: "Rancang pengalaman belajar",
    desc: "Materi Canva dibuat konsisten, lalu dilengkapi aktivitas Wordwall.",
  },
  {
    n: "03",
    title: "Siap digunakan di kelas",
    desc: "Media diserahkan dengan alur yang mudah diikuti dan disesuaikan.",
  },
];

const Tentang = () => {
  return (
    <section id="tentang" className="px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Panel identitas SmartDeck */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#024C99] to-[#009DFC] p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border-[28px] border-white/10" />

          <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#F7963A]" />

          <div className="relative z-10">
            <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-widest">
              Tentang SmartDeck
            </span>

            <h2 className="mt-8 text-3xl font-black leading-tight sm:text-4xl">
              Bukan hanya menarik dilihat, tapi juga bermakna untuk dipelajari.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-white/80">
              Kami memadukan desain materi yang komunikatif dengan evaluasi
              berbasis aktivitas agar pendidik punya pengalaman belajar yang
              lebih utuh.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p aria-hidden="true" className="text-2xl">🎨</p>
                <p className="mt-2 text-sm font-extrabold">Visual</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p aria-hidden="true" className="text-2xl">🧩</p>
                <p className="mt-2 text-sm font-extrabold">Interaktif</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p aria-hidden="true" className="text-2xl">🎯</p>
                <p className="mt-2 text-sm font-extrabold">Terarah</p>
              </div>
            </div>
          </div>
        </div>

        {/* Penjelasan layanan */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#009DFC]">
            Belajar dengan cara yang lebih hidup
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Dari penyampaian materi sampai mengukur pemahaman.
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            SmartDeck adalah layanan pembuatan media pembelajaran interaktif.
            Canva digunakan untuk menyajikan materi secara visual dan
            terstruktur, sedangkan Wordwall digunakan untuk membuat latihan
            serta evaluasi dalam bentuk permainan edukatif.
          </p>

          <div className="mt-7 space-y-5">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 font-black text-[#024C99]">
                  {step.n}
                </span>

                <div>
                  <h3 className="font-extrabold text-slate-800">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#layanan"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC] px-6 py-3 font-extrabold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-1"
          >
            Lihat layanan kami <span aria-hidden="true" className="text-[#F7963A]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tentang;