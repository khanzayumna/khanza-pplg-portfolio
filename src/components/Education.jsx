import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookMarked } from 'lucide-react';

export default function Education() {
  const educationTimeline = [
    {
      school: 'SMK Negeri 2 Surakarta',
      degree: 'Pengembangan Perangkat Lunak & Gim (PPLG)',
      period: '2025 – Sekarang',
      status: 'Siswa Aktif • Kelas XI PPLG A',
      location: 'Surakarta, Jawa Tengah',
      description: 'Mempelajari dasar dasar rekayasa perangkat lunak, algoritma & struktur data, pemodelan database, pemrograman web (HTML, CSS, JS, PHP), pemrograman berorientasi objek (Java), serta ekosistem pengembangan aplikasi.',
      current: true
    },
    {
      school: 'SMP Ta\'mirul Islam Surakarta',
      degree: 'Pendidikan Menengah Pertama (SMP)',
      period: 'Lulus Tahun 2025',
      status: 'Alumni',
      location: 'Surakarta, Jawa Tengah',
      description: 'Aktif dalam kegiatan ekstrakurikuler sains & komputer dasar, serta membangun dasar kedisiplinan dan komunikasi.',
      current: false
    }
  ];

  const certificates = [
    { title: 'Sertifikat Dasar Pemrograman Web', issuer: 'PPLG SMKN 2 Surakarta', year: '2025' },
    { title: 'Dasar HTML, CSS, & JavaScript', issuer: 'Modul Kejuruan PPLG', year: '2025' },
    { title: 'Pengenalan Database MySQL & Relasi SQL', issuer: 'Praktikum Laboratorium Komputer', year: '2025' }
  ];

  return (
    <section id="pendidikan" className="py-12 bg-sky-50/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={16} />
            <span>Jejak Akademis</span>
          </div>
          <h2 className="section-title">Riwayat Pendidikan & Sertifikasi</h2>
          <p className="section-desc">
            Latar belakang pendidikan formal dan pencapaian kompetensi dalam bidang ilmu komputer dan perangkat lunak.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Timeline */}
          <div className="lg:col-span-7 space-y-4">
            {educationTimeline.map((item, idx) => (
              <div key={idx} className="bento-card p-6 relative hover:border-sky-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl ${item.current ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-700'} flex items-center justify-center font-bold shrink-0`}>
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        {item.school}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-sky-700">
                        {item.degree}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-mono ${item.current ? 'bg-sky-100 text-sky-800 border border-sky-200' : 'bg-slate-100 text-slate-600'}`}>
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <BookMarked size={14} className="text-sky-500" />
                    {item.status}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-slate-400" />
                    {item.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Certifications & Competencies */}
          <div className="lg:col-span-5 bento-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <Award size={20} className="text-sky-600" />
                <h3 className="text-base font-extrabold text-slate-900">
                  Pencapaian & Sertifikasi
                </h3>
              </div>

              <div className="space-y-3">
                {certificates.map((cert, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {cert.issuer} • <span className="font-mono">{cert.year}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note box */}
            <div className="mt-6 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-900 font-medium leading-relaxed">
              <strong className="block text-sky-950 font-bold mb-1">Siap Evaluasi Tes Industri</strong>
              Seluruh kompetensi dasar pemrograman telah diuji dan dinilai secara langsung oleh tim pengajar kejuruan PPLG SMKN 2 Surakarta.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
