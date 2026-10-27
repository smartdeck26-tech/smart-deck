import { useState } from "react";

const contactItems = [
  {
    icon: "🎨",
    title: "Materi visual",
    desc: "Dibuat melalui Canva",
  },
  {
    icon: "🎮",
    title: "Evaluasi interaktif",
    desc: "Aktivitas melalui Wordwall",
  },
  {
    icon: "🤝",
    title: "Kolaborasi fleksibel",
    desc: "Ruang lingkup sesuai kebutuhan",
  },
];

const layananOptions = [
  "Paket Canva + Wordwall",
  "Media pembelajaran Canva",
  "Evaluasi interaktif Wordwall",
  "Konsultasi terlebih dahulu",
];

const Kontak = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    need: "Paket Canva + Wordwall",
    message: "",
  });

  // Ganti dengan nomor WhatsApp bisnis SmartDeck.
  // Gunakan kode negara tanpa tanda +, spasi, atau tanda hubung.
  const whatsappNumber = "6281234567890";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitContact = (e) => {
    e.preventDefault();

    const message = [
      "Halo SmartDeck! Saya ingin berkonsultasi.",
      "",
      `Nama: ${form.name}`,
      `Email: ${form.email}`,
      `Layanan: ${form.need}`,
      "",
      "Detail kebutuhan:",
      form.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="kontak"
      className="bg-[#F7FBFF] px-5 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
        {/* Informasi kontak */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#009DFC]">
            Mari berkolaborasi
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Ceritakan kebutuhan media pembelajaran Anda.
          </h2>

          <p className="mt-5 max-w-lg leading-8 text-slate-500">
            Berikan sedikit informasi mengenai materi, target peserta didik,
            dan bentuk media yang diinginkan. Kami dapat mulai dari sana.
          </p>

          <div className="mt-8 space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 transition hover:border-[#009DFC] hover:shadow-md"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-xl">
                  {item.icon}
                </span>

                <div>
                  <p className="font-extrabold text-slate-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#024C99] to-[#009DFC] p-6 text-white">
            <p className="text-lg font-extrabold">
              Belajar lebih menarik bersama SmartDeck!
            </p>
            <p className="mt-2 text-sm leading-6 text-blue-50">
              Kami membantu mengubah materi pembelajaran menjadi pengalaman
              yang lebih visual, interaktif, dan menyenangkan.
            </p>
          </div>
        </div>

        {/* Formulir konsultasi */}
        <form
          onSubmit={submitContact}
          className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/60 sm:p-9"
        >
          <h3 className="text-2xl font-black text-slate-900">
            Formulir konsultasi
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Lengkapi formulir ini, lalu lanjutkan pesan melalui WhatsApp.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-slate-700">
              Nama
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#009DFC] focus:ring-4 focus:ring-blue-50"
              />
            </label>

            <label className="text-sm font-bold text-slate-700">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#009DFC] focus:ring-4 focus:ring-blue-50"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-bold text-slate-700">
            Layanan yang dibutuhkan
            <select
              name="need"
              value={form.need}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-[#009DFC] focus:ring-4 focus:ring-blue-50"
            >
              {layananOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block text-sm font-bold text-slate-700">
            Ceritakan kebutuhan Anda
            <textarea
              required
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mata pelajaran, jenjang, topik, atau ide media..."
              className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#009DFC] focus:ring-4 focus:ring-blue-50"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#024C99] to-[#009DFC] px-5 py-4 font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Lanjutkan ke WhatsApp ↗
          </button>

          <p className="mt-3 text-center text-xs leading-5 text-slate-400">
            Pesan akan dibuka di WhatsApp untuk Anda periksa dan kirim.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Kontak;