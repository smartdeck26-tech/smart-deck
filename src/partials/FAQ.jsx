import { useState } from "react";

export const faqs = [
  {
    q: "Apa itu SmartDeck?",
    a: "SmartDeck adalah jasa pembuatan media pembelajaran interaktif yang menggabungkan Canva untuk penyajian materi dan Wordwall untuk latihan atau evaluasi.",
  },
  {
    q: "Apakah media bisa disesuaikan dengan mata pelajaran?",
    a: "Ya. Topik, jenjang, tujuan pembelajaran, gaya visual, dan jenis aktivitas dapat dibahas saat konsultasi.",
  },
  {
    q: "Apakah saya bisa memesan Canva dan Wordwall saja?",
    a: "Bisa. Anda dapat mendiskusikan dengan admin SmartDeck terkait apa saja yang ingin Anda buat.",
  },
  {
    q: "Bagaimana cara memulai pemesanan?",
    a: "Mulai Konsultasi dengan menekan tombol 'Konsultasi Sekarang'. Tombol ini akan mengarahkan anda ke Whatsapp untuk berdiskusi lebih lanjut terkait apa yang ingin anda buat.",
  },
  {
    q: "Berapa harga jasanya?",
    a: "Canva mulai dari Rp15.000, Wordwall mulai dari Rp30.000, dan Paket Terintegrasi mulai dari Rp40.000 (per materi). Harga final menyesuaikan jumlah slide atau soal, kerumitan desain, jenis aktivitas, dan tenggat. Hubungi admin lewat WhatsApp untuk penawaran yang sesuai.",
  },
  {
    q: "Berapa lama pengerjaannya?",
    a: "Estimasi pengerjaan 1–3 hari, tergantung jumlah materi dan tingkat kerumitan desain.",
  },
  {
    q: "Apakah ada revisi?",
    a: "Ada. Setiap pemesanan mendapatkan 1 kali revisi setelah draf Anda terima.",
  },
  {
    q: "Hasilnya diserahkan dalam bentuk apa?",
    a: "Hasil diserahkan berupa link Canva yang langsung bisa Anda gunakan.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Metode dan waktu pembayaran dibahas saat konsultasi bersama admin.",
  },
  {
    q: "Apakah saya perlu akun berbayar Canva atau Wordwall?",
    a: "Hal ini dibahas saat konsultasi, menyesuaikan kebutuhan dan fitur yang Anda inginkan.",
  },
];

export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#009DFC]">
            Pertanyaan umum
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Yang sering ingin diketahui
          </h2>

          <p className="mt-4 leading-7 text-slate-500">
            Belum yakin layanan mana yang cocok? Berikut beberapa hal
            yang bisa membantu.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = faqOpen === index;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-blue-100 bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setFaqOpen(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-extrabold text-slate-800"
                >
                  <span>{faq.q}</span>

                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                      isOpen
                        ? "bg-[#024C99] text-white"
                        : "bg-blue-50 text-[#024C99]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="px-5 pb-5 leading-7 text-slate-500">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
