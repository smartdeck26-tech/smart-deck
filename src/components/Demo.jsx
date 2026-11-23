const VideoDemo = () => {
const videoList = [
{
number: "01",
icon: "🎨",
title: "Pengenalan Media Canva",
desc: "Kenali tampilan media pembelajaran dan cara mengakses materi yang telah dirancang.",
duration: "2–3 menit",
videoId: "VIDEO_ID_1",
},
{
number: "02",
icon: "🎮",
title: "Cara Menggunakan Wordwall",
desc: "Pelajari cara membuka permainan edukatif dan mengerjakan evaluasi interaktif.",
duration: "2–3 menit",
videoId: "VIDEO_ID_2",
},
{
number: "03",
icon: "🔗",
title: "Alur Penggunaan Produk",
desc: "Lihat bagaimana Canva dan Wordwall terintegrasi dalam satu pengalaman belajar.",
duration: "3–5 menit",
videoId: "VIDEO_ID_3",
},
];

return (
<section id="video-demo" className="bg-white px-5 py-20 sm:px-8 md:py-24">
    <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#F7963A]">
                Panduan Penggunaan SmartDeck
            </p>

            <h1 className="text-3xl font-black leading-tight text-[#024C99] sm:text-4xl md:text-5xl">
                Kenali SmartDeck Melalui Video Demo
            </h1>

            <p className="mt-5 leading-8 text-slate-600">
                Selamat datang di halaman video demo SmartDeck!
                Melalui video panduan berikut, Anda dapat mengenal
                lebih dekat cara penggunaan media pembelajaran
                berbasis Canva dan evaluasi interaktif Wordwall.
                Kami hadir untuk membantu pendidik memahami setiap
                fitur dan alur penggunaan produk agar pengalaman
                belajar menjadi lebih menarik, praktis, dan terarah.
            </p>
        </div>

        {/* VIDEO UTAMA */}

        {/* VIDEO UTAMA */}
        <div
            className="overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/50 sm:p-8">
            <div className="grid items-center gap-8 md:grid-cols-2">

                {/* VIDEO PORTRAIT */}
                <div className="flex justify-center">
                    <div className="w-full max-w-[300px] overflow-hidden rounded-3xl bg-[#024C99] shadow-lg">
                        <div className="aspect-[9/16]">
               <a href="https://www.tiktok.com/@smartdeck10_/video/7708390843475971348?is_from_webapp=1&sender_device=pc&web_id=7711086442923853320" target="_blank" rel="noopener noreferrer"> 
                       <video
                            width="325"
                            height="578"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            style={{
                                objectFit: "cover",
                                border: "none",
                            }}
                        >
                        <source src="/demo.mp4" type="video/mp4" />
                        </video>
                </a>
                        </div>
                    </div>
                </div>

                {/* DESKRIPSI */}
                <div className="py-5">
                    <span
                        className="rounded-full bg-orange-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#F7963A]">
                        Video Utama
                    </span>

                    <h2 className="mt-6 text-3xl font-black leading-tight text-[#024C99]">
                        Kenali Lebih Dekat Produk SmartDeck
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Melalui video demonstrasi ini, Anda dapat melihat
                        secara langsung bagaimana SmartDeck digunakan
                        sebagai media pembelajaran yang menggabungkan
                        desain visual Canva dan evaluasi interaktif Wordwall.
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50">🎨</span>
                            <span className="font-semibold text-slate-700">Media pembelajaran Canva</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50">🎮</span>
                            <span className="font-semibold text-slate-700">Evaluasi interaktif Wordwall</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50">🔗</span>
                            <span className="font-semibold text-slate-700">Integrasi dalam pembelajaran</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* DAFTAR VIDEO */}
        {/* <div className="mt-20">
            <div className="mx-auto mb-10 max-w-3xl text-center">
                <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#F7963A]">
                    Tutorial Penggunaan
                </p>

                <h2 className="text-3xl font-black text-[#024C99] sm:text-4xl">
                    Pelajari Setiap Fitur SmartDeck
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                    Ikuti panduan singkat berikut untuk memahami
                    cara menggunakan setiap bagian produk.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {videoList.map((item) => (
                <article key={item.number}
                    className="group overflow-hidden rounded-3xl border border-blue-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60">
                    <div
                        className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#024C99] to-[#009DFC]">
                        <span className="text-5xl">{item.icon}</span>
                        <span
                            className="absolute bottom-3 right-3 rounded-lg bg-black/60 px-3 py-1 text-xs font-bold text-white">
                            {item.duration}
                        </span>
                    </div>

                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-black tracking-widest text-[#F7963A]">
                                VIDEO {item.number}
                            </span>
                            <span className="text-xs font-bold text-slate-400">
                                Tutorial
                            </span>
                        </div>

                        <h3 className="mt-4 text-xl font-black text-[#024C99]">
                            {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            {item.desc}
                        </p>

                        <a href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 font-bold text-[#009DFC] transition hover:text-[#024C99]">
                            Tonton Video
                            <span>→</span>
                        </a>
                    </div>
                </article>
                ))}
            </div>
        </div> */}

        {/* CATATAN */}
        <div className="mt-16 rounded-3xl bg-blue-50 p-7 text-center sm:p-10">
            <span className="text-4xl">💡</span>

            <h2 className="mt-4 text-2xl font-black text-[#024C99]">
                Siap Memulai Pengalaman Belajar?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
                Semoga video demo ini membantu Anda memahami
                penggunaan SmartDeck. Jelajahi setiap materi
                dan aktivitas yang tersedia untuk menciptakan
                pengalaman pembelajaran yang lebih aktif,
                menyenangkan, dan bermakna.
            </p>

            <p className="mt-5 font-extrabold text-[#F7963A]">
                SmartDeck — Belajar Lebih Menarik, Mengajar Lebih Interaktif!
            </p>
        </div>

    </div>
</section>
);
};

export default VideoDemo;
