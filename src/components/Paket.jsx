const benefits = [
  {
    number: "01",
    icon: "🎨",
    title: "Media Pembelajaran Canva",
    desc: "Materi pembelajaran dengan desain visual yang menarik, rapi, dan disesuaikan dengan topik serta kebutuhan pembelajaran.",
    details: [
      "Desain visual yang menarik",
      "Materi tersusun secara terstruktur",
      "Tampilan disesuaikan dengan topik pembelajaran",
    ],
  },
  {
    number: "02",
    icon: "🎮",
    title: "Evaluasi Interaktif Wordwall",
    desc: "Aktivitas evaluasi berbasis permainan untuk membantu menguji pemahaman siswa secara lebih menyenangkan.",
    details: [
      "Kuis atau permainan edukatif",
      "Aktivitas sesuai materi",
      "Evaluasi yang lebih interaktif",
    ],
  },
  {
    number: "03",
    icon: "🔗",
    title: "Integrasi Materi dan Evaluasi",
    desc: "Perpaduan Canva dan Wordwall yang menghubungkan penyampaian materi dengan aktivitas latihan atau evaluasi.",
    details: [
      "Alur belajar lebih terarah",
      "Materi dan evaluasi saling berkaitan",
      "Pengalaman belajar lebih aktif",
    ],
  },
  {
    number: "04",
    icon: "🛠️",
    title: "Penyesuaian Kebutuhan",
    desc: "Konsep media dibahas berdasarkan kebutuhan pemesan agar hasilnya sesuai dengan konteks pembelajaran.",
    details: [
      "Penyesuaian topik dan mata pelajaran",
      "Penyesuaian jenjang peserta didik",
      "Diskusi kebutuhan sebelum pengerjaan",
    ],
  },
];

const SectionHeading = ({ eyebrow, title, desc }) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#F7963A]">
      {eyebrow}
    </p>

    <h2 className="text-3xl font-black leading-tight text-[#024C99] sm:text-4xl">
      {title}
    </h2>

    <p className="mt-4 leading-7 text-slate-600">
      {desc}
    </p>
  </div>
);

const Paket = () => {
  return (
    <section
      id="paket"
      className="bg-white px-5 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nilai lebih untuk pembelajaran"
          title="Apa yang Anda Dapatkan dari SmartDeck?"
          desc="Setiap pemesanan dirancang untuk membantu pendidik menghadirkan media pembelajaran yang lebih visual, interaktif, dan terarah."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60 sm:p-8"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#009DFC]/10 transition group-hover:scale-125" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-2xl">
                    {item.icon}
                  </span>

                  <span className="text-sm font-black text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black text-[#024C99]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.desc}
                </p>

                <ul className="mt-5 space-y-3">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-black text-[#024C99]">
                        ✓
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Paket;