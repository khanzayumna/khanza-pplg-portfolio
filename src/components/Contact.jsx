import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Loader2, Sparkles, Building } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Penawaran PKL / Magang Web Dev',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending form message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Penawaran PKL / Magang Web Dev',
        message: ''
      });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontak" className="py-12">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={16} />
            <span>Hubungi Saya</span>
          </div>
          <h2 className="section-title">Kontak & Kerjasama PKL</h2>
          <p className="section-desc">
            Apakah perusahaan Anda sedang membuka lowongan magang / PKL jurusan PPLG? Mari terhubung!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Quick Contact Info */}
          <div className="lg:col-span-5 bento-card p-6 flex flex-col justify-between bg-gradient-to-br from-white to-sky-50/60">
            <div>
              <div className="mb-6">
                <span className="badge badge-pink mb-2 inline-flex items-center gap-1 font-mono">
                  <Sparkles size={12} /> Open for Internships
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  Siap Berkontribusi dalam Tim Pengembangan Web & Perangkat Lunak
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Terbuka untuk posisi magang/PKL sebagai <strong className="text-slate-800 font-semibold">Junior Web Developer Intern</strong>, <strong className="text-slate-800 font-semibold">Frontend Developer Intern</strong>, atau <strong className="text-slate-800 font-semibold">Android Developer Intern</strong> di Surakarta, Soloraya, maupun sistem Kerja Remote.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 mb-6">
                <a
                  href="https://wa.me/?text=Halo%20Khanza,%20kami%20tertarik%20menghubungi%20Anda%20mengenai%20posisi%20PKL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 flex items-center gap-3 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500">WhatsApp / Handphone</span>
                    <span className="block text-sm font-bold text-slate-800">Hubungi via WhatsApp</span>
                  </div>
                </a>

                <a
                  href="mailto:khanza.yumna@example.com"
                  className="p-3 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 flex items-center gap-3 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500">Email Resmi</span>
                    <span className="block text-sm font-bold text-slate-800">khanza.yumna@example.com</span>
                  </div>
                </a>

                <div className="p-3 rounded-2xl bg-white border border-sky-100 flex items-center gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500">Domisili Sekolah</span>
                    <span className="block text-sm font-bold text-slate-800">Surakarta, Jawa Tengah</span>
                  </div>
                </div>
              </div>
            </div>

            {/* School Info Box */}
            <div className="p-4 rounded-2xl bg-sky-100/70 border border-sky-200 text-xs text-sky-950 font-medium">
              <span className="font-bold flex items-center gap-1.5 text-sky-900 mb-1">
                <Building size={14} /> SMK Negeri 2 Surakarta
              </span>
              Jl. Manahan No.1 Surakarta • Jurusan PPLG (Pengembangan Perangkat Lunak dan Gim)
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bento-card p-6">
            <h3 className="text-lg font-extrabold text-slate-900 mb-1">
              Kirim Pesan / Penawaran PKL
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Silakan isi formulir di bawah ini untuk mengirim pertanyaan atau kuota PKL industri.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-3 fade-in">
                <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle size={24} />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900">Pesan Berhasil Terkirim!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Terima kasih banyak atas pesan dan minat Anda. Khanza akan segera membalas email Anda.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-sm mt-2"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Nama / Perusahaan *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: PT Software Indonesia / HR Team"
                      required
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Kontak *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@perusahaan.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Topik / Kategori *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="Penawaran PKL Web Dev">Penawaran PKL / Magang Web Developer</option>
                    <option value="Penawaran PKL Mobile Dev">Penawaran PKL / Magang Mobile Developer</option>
                    <option value="Tanya Portofolio">Pertanyaan Seputar Portofolio / Project</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Pesan Detail *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan ketersediaan kuota PKL, jadwal magang, atau pesan yang ingin disampaikan..."
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full py-3 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Mengirim Pesan...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
