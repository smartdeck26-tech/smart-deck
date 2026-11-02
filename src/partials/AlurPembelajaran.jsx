export default function AlurPembelajaran() {
  return (
    <section className="border-y border-blue-50 bg-[#F7FBFF] px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-[.18em] text-slate-400">
          Satu alur pembelajaran
        </span>

        <span className="flex items-center gap-2 font-extrabold text-[#024C99]">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-white shadow-sm">
            🎨
          </span>
          Canva <span aria-hidden="true" className="text-[#F7963A]">→</span>
        </span>

        <span className="flex items-center gap-2 font-extrabold text-[#024C99]">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-white shadow-sm">
            🎮
          </span>
          Wordwall <span aria-hidden="true" className="text-[#F7963A]">→</span>
        </span>

        <span className="flex items-center gap-2 font-extrabold text-[#024C99]">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-white shadow-sm">
            💡
          </span>
          Pengalaman belajar lebih aktif
        </span>
      </div>
    </section>
  );
}