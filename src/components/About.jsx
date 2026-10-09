import React from 'react';
import { UserCheck, Rocket, BookOpen, Target, Check, HeartHandshake, Laptop, ShieldCheck } from 'lucide-react';

export default function About() {
  const biodataItems = [
    { label: 'Nama Lengkap', value: 'Khanza Yumna Lakeisha' },
    { label: 'Kelas & Jurusan', value: 'XI PPLG A (Pengembangan Perangkat Lunak & Gim)' },
    { label: 'Sekolah', value: 'SMK Negeri 2 Surakarta' },
    { label: 'Tahun Pelajaran', value: '2025 / 2026' },
    { label: 'Fokus Keahlian', value: 'Fullstack Web & Mobile Android Dev' },
    { label: 'Status PKL', value: 'Siap Penempatan Industri (2026)' }
  ];

  const highlights = [
    {
      title: 'Pemrograman Terstruktur',
      desc: 'Terbiasa menulis kode modular, bersih, dan mematuhi prinsip OOP serta standar penulisan variabel modern.',
      icon: Laptop,
      color: 'bg-sky-50 text-sky-600'
    },
    {
      title: 'Kolaborasi Git & Teamwork',
      desc: 'Memahami workflow Git (branching, pull request, merge conflict resolution) untuk kerja tim yang produktif.',
      icon: HeartHandshake,
      color: 'bg-pink-50 text-pink-600'
    },
    {
      title: 'Adaptif & Cepat Belajar',
      desc: 'Antusias mempelajari teknologi baru dan framework terkini untuk menyelesaikan tantangan proyek industri.',
      icon: ShieldCheck,
      color: 'bg-cyan-50 text-cyan-600'
    }
  ];

  return (
    <section id="tentang" className="py-12">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={16} />
            <span>Profil & Kualifikasi</span>
          </div>
          <h2 className="section-title">Tentang Saya</h2>
          <p className="section-desc">
            Mengenal lebih dekat latar belakang akademis, minat keahlian, dan dedikasi saya dalam bidang rekayasa perangkat lunak.
          </p>
        </div>

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Biodata Card */}
          <div className="lg:col-span-7 bento-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Biodata Diri</h3>
                    <p className="text-xs text-slate-500 font-medium">Informasi Akademis & Kontak Dasar</p>
                  </div>
                </div>
                <span className="badge badge-blue">Siswa PPLG</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {biodataItems.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs font-medium text-slate-500 mb-0.5">{item.label}</span>
                    <span className="block text-sm font-bold text-slate-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target PKL Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200/80 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Rocket size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-sky-900 uppercase tracking-wider mb-1">
                  Visi & Motivasi PKL Industri
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  "Bertekad mengimplementasikan ilmu pemrograman web dan aplikasi mobile secara langsung di dunia kerja nyata, siap belajar dari tim senior, dan berkontribusi aktif mencapai target proyek perusahaan."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars / Strengths */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="bento-card p-5 flex items-start gap-4 hover:border-sky-300">
                  <div className={`w-12 h-12 rounded-2xl ${h.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 mb-1">{h.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
