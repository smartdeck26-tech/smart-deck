import { useEffect, useState } from "react";
import { SCRIPT_URL } from "../config";
import { getVisitorId } from "../lib/track";

function loadPublicData(onSuccess) {
  const callbackName =
    "smartDeckCallback_" + Math.random().toString(36).slice(2);

  const script = document.createElement("script");
  const timeout = window.setTimeout(() => {
    cleanup();
  }, 12000);

  function cleanup() {
    window.clearTimeout(timeout);
    delete window[callbackName];
    script.remove();
  }

  window[callbackName] = (data) => {
    onSuccess(data);
    cleanup();
  };

  script.src =
    `${SCRIPT_URL}?callback=${callbackName}&t=${Date.now()}`;

  script.onerror = cleanup;
  document.body.appendChild(script);
}

export default function Testimoni() {
  const [visitorCount, setVisitorCount] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    rating:0,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const today = new Date().toLocaleDateString("en-CA");

  useEffect(() => {
    let active = true;

    try {
      const visitorId = getVisitorId();

      // Catat pengunjung unik. ID yang sama tidak menambah hitungan.
      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "visit",
          visitorId,
        }),
      }).catch(() => {});

      loadPublicData((data) => {
        if (!active) return;
        setVisitorCount(data.visitorCount);
        setTestimonials(data.testimonials || []);
      });
    } catch {
      setStatus("Data belum dapat dimuat. Silakan coba lagi nanti.");
    }

    return () => {
      active = false;
    };
  }, []);

  const [notification, setNotification] = useState({
  show: false,
  message: "",
  type: "success",
});

function showNotification(message, type = "success") {
  setNotification({
    show: true,
    message,
    type,
  });

  window.setTimeout(() => {
    setNotification((prev) => ({
      ...prev,
      show: false,
    }));
  }, 4000);
}

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  
async function handleSubmit(e) {
  e.preventDefault();
  setStatus("");

  const name = form.name.trim();
  const email = form.email.trim();
  const comment = form.comment.trim();
  const rating = Number(form.rating);

  if (!name || !comment) {
    showNotification("Nama dan komentar wajib diisi.", "error");
    return;
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    showNotification("Silakan pilih rating 1–5 bintang.", "error");
    return;
  }

  // Definisikan variabel sebelum digunakan.
  const newTestimonial = {
    name,
    date: new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    rating,
    comment,
  };

  setLoading(true);

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        action: "testimonial",
        name,
        email,
        comment,
        rating,
      }),
    });

    // Tampilkan komentar langsung tanpa refresh.
    setTestimonials((previous) => [
      newTestimonial,
      ...previous,
    ]);

    showNotification(
      "Testimoni berhasil dikirim!",
      "success"
    );

    setForm({
      name: "",
      email: "",
      comment: "",
      rating: 0,
    });
  } catch (error) {
    console.error("Gagal mengirim testimoni:", error);

    showNotification(
      "Pengiriman gagal. Silakan coba lagi.",
      "error"
    );
  } finally {
    setLoading(false);
  }
}


  return (
    <section
      id="testimoni"
      className="bg-[#F7FBFF] px-5 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-[#F7963A]">
            Cerita dan pengalaman
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#024C99] sm:text-4xl">
            Apa Kata Mereka tentang SmartDeck?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Bagikan pendapat dan pengalamanmu untuk membantu kami
            mengembangkan layanan yang lebih baik.
          </p>
        </div>

      

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 text-xl font-black text-[#024C99]">
              Testimoni terbaru
            </h3>

            {testimonials.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-blue-200 bg-white p-6 text-sm leading-6 text-slate-500">
                Belum ada testimoni yang ditampilkan.
              </div>
            ) : (
              <div className="space-y-4">
                {testimonials.map((item, index) => (
                  <article
                    key={`${item.date}-${item.name}-${index}`}
                    className="rounded-2xl border border-blue-100 bg-white p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-50 font-black text-[#024C99]">
                        {item.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-extrabold text-slate-800">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {item.date}
                        </p>
                    <div
                      className="mt-2 text-lg tracking-wider text-amber-400"
                      aria-label={`Rating ${item.rating} dari 5`}
                    >
                      {"★".repeat(item.rating)}
                      <span className="text-slate-300">
                        {"★".repeat(5 - item.rating)}
                      </span>
                    </div>
                        </div>
  
                    </div>
                    <p className="mt-4 whitespace-pre-wrap break-words leading-7 text-slate-600">
                      {item.comment}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-black text-[#024C99]">
              Kirim testimoni
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Nama dan komentar wajib diisi. Email boleh dikosongkan.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="testimonial-name" className="mb-2 block text-sm font-bold text-slate-700">
                  Nama *
                </label>
                <input
                  id="testimonial-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  required
                  autoComplete="name"
                  placeholder="Masukkan nama"
                  className="w-full rounded-xl border border-blue-100 px-4 py-3 outline-none transition focus:border-[#009DFC] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="testimonial-email" className="mb-2 block text-sm font-bold text-slate-700">
                  Email (opsional)
                </label>
                <input
                  id="testimonial-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={200}
                  autoComplete="email"
                  placeholder="nama@email.com"
                  className="w-full rounded-xl border border-blue-100 px-4 py-3 outline-none transition focus:border-[#009DFC] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="hidden">
                <label htmlFor="testimonial-date" className="mb-2 block text-sm font-bold text-slate-700">
                  Tanggal
                </label>
                <input
                  id="testimonial-date"
                  value={today}
                  readOnly
                  className="w-full rounded-xl border border-blue-100 bg-slate-50 px-4 py-3 text-slate-500 outline-none"
                />
                <p className="mt-1 text-xs text-slate-400">
                  Tanggal resmi pencatatan ditentukan oleh server.
                </p>
              </div>

              <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                  Rating *
              </label>

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({ ...prev, rating: star }))
                    }
                    aria-label={`Beri ${star} bintang`}
                    aria-pressed={form.rating === star}
                    className={`text-3xl transition hover:scale-110 ${
                      star <= form.rating
                        ? "text-amber-400"
                        : "text-slate-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <p className="mt-1 text-sm text-slate-500">
                {form.rating === 0
                  ? "Pilih rating 1–5 bintang"
                  : `Anda memberikan ${form.rating} dari 5 bintang`}
              </p>
            </div>

              <div>
                <label htmlFor="testimonial-comment" className="mb-2 block text-sm font-bold text-slate-700">
                  Komentar *
                </label>
                <textarea
                  id="testimonial-comment"
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  maxLength={2000}
                  required
                  rows={5}
                  placeholder="Ceritakan pendapat atau pengalamanmu..."
                  className="w-full resize-y rounded-xl border border-blue-100 px-4 py-3 outline-none transition focus:border-[#009DFC] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {status && (
                <p role="status" aria-live="polite" className="text-sm leading-6 text-slate-600">
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC] px-6 py-4 font-extrabold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Mengirim..." : "Kirim testimoni ↗"}
              </button>

              <p className="text-xs leading-5 text-slate-400">
                Jangan cantumkan informasi pribadi sensitif dalam komentar.
                Email tidak ditampilkan pada daftar testimoni publik.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}