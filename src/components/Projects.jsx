import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Eye, Sparkles, Layers, Code, Gamepad2, Smartphone } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'web', label: 'Web Application' },
    { id: 'mobile', label: 'Mobile Android' },
    { id: 'game', label: 'Gim 2D' }
  ];

  const projectData = [
    {
      id: 1,
      title: 'EduPPLG Learning Portal',
      category: 'web',
      categoryLabel: 'Web Application',
      subtitle: 'Platform Pembelajaran Interaktif Siswa PPLG',
      description: 'Aplikasi web portal edukasi interaktif untuk siswa jurusan PPLG SMKN 2 Surakarta. Dilengkapi modul materi coding, kuis pemrograman interaktif, dan pelacakan progress belajar.',
      fullDescription: 'EduPPLG Learning Portal dirancang untuk membantu siswa SMK jurusan Pengembangan Perangkat Lunak dan Gim dalam mengakses modul modul belajar HTML, CSS, JavaScript, dan PHP secara terstruktur. Fitur utama mencakup sistem login siswa, daftar materi interaktif, editor kode sederhana dalam browser, serta kuis penilaian otomatis.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'LocalStorage API'],
      liveUrl: 'https://example.com/edupplg',
      githubUrl: 'https://github.com/khanzapplg/edu-pplg-portal',
      featured: true
    },
    {
      id: 2,
      title: 'KasirKu Point of Sale (POS)',
      category: 'web',
      categoryLabel: 'Web Application',
      subtitle: 'Sistem Informasi Penjualan & Inventaris Toko',
      description: 'Aplikasi kasir berbasis web dengan PHP Native & MySQL. Fitur cetak struk belanja, manajemen stok barang, transaksi otomatis, serta grafik laporan harian.',
      fullDescription: 'Proyek sistem informasi manajemen toko KasirKu dibuat sebagai tugas akhir mata pelajaran Pemrograman Web dan Perangkat Bergerak (PWPB). Sistem ini memfasilitasi transaksi kasir cepat, pencatatan histori penjualan, pembuatan laporan keuangan bulanan, serta manajemen hak akses admin dan kasir.',
      image: 'https://images.unsplash.com/photo-1556742049-0a670fc80799?auto=format&fit=crop&w=800&q=80',
      tech: ['PHP Native', 'MySQL', 'Bootstrap 5', 'Chart.js', 'FPDF'],
      liveUrl: 'https://example.com/kasirku',
      githubUrl: 'https://github.com/khanzapplg/kasirku-pos',
      featured: true
    },
    {
      id: 3,
      title: 'Pixel Quest Adventure 2D',
      category: 'game',
      categoryLabel: 'Gim 2D',
      subtitle: 'Game Platformer Kejuruan PPLG',
      description: 'Gim 2D retro bergaya piksel berbasis HTML5 Canvas & JavaScript. Dilengkapi mekanik lompat, pengumpulan koin, musuh AI sederhana, dan level bertingkat.',
      fullDescription: 'Proyek pengembangan gim 2D yang dibangun menggunakan HTML5 Canvas API dan murni Vanilla JavaScript. Mengimplementasikan konsep Sprite Sheet animation, Game Loop 60FPS, AABB Collision Detection, serta Sound Effects interaktif.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      tech: ['JavaScript (ES6)', 'HTML5 Canvas', 'Web Audio API', 'CSS Animation'],
      liveUrl: 'https://example.com/pixelquest',
      githubUrl: 'https://github.com/khanzapplg/pixel-quest-2d',
      featured: false
    },
    {
      id: 4,
      title: 'SmartSchool Mobile Presensi',
      category: 'mobile',
      categoryLabel: 'Mobile Android',
      subtitle: 'Aplikasi Mobile Presensi & Informasi Sekolah',
      description: 'Aplikasi Android native menggunakan Java dan Android Studio untuk presensi siswa berbasis QR Code & geolokasi sederhana.',
      fullDescription: 'SmartSchool Mobile dirancang untuk mempermudah presensi siswa dan akses pengumuman sekolah secara digital. Menggunakan arsitektur MVC pada Android Studio dengan antarmuka Material Design 3.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      tech: ['Java (Android)', 'Android Studio', 'SQLite', 'ZXing QR Scanner'],
      liveUrl: 'https://example.com/smartschool',
      githubUrl: 'https://github.com/khanzapplg/smartschool-android',
      featured: false
    },
    {
      id: 5,
      title: 'TaskCraft Kanban Board',
      category: 'web',
      categoryLabel: 'Web Application',
      subtitle: 'Aplikasi Manajemen Sprint & Tugas Proyek',
      description: 'Aplikasi papan tugas interaktif bergaya Trello dengan fitur Drag & Drop, penanda prioritas, dan filter deadline tugas tim.',
      fullDescription: 'TaskCraft membantu kelompok belajar PPLG dalam membagi tugas proyek secara visual. Menggunakan React DnD untuk interaksi drag-and-drop tugas antar kolom To Do, In Progress, dan Done.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
      tech: ['React.js', 'Vanilla CSS', 'HTML5 Drag & Drop'],
      liveUrl: 'https://example.com/taskcraft',
      githubUrl: 'https://github.com/khanzapplg/taskcraft-kanban',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectData
    : projectData.filter(p => p.category === activeFilter);

  return (
    <section id="project" className="py-12">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={16} />
            <span>Portofolio Karya</span>
          </div>
          <h2 className="section-title">Project & Aplikasi PPLG</h2>
          <p className="section-desc">
            Kumpulan hasil karya proyek aplikasi web, sistem informasi, dan gim yang dikembangkan selama studi di SMK Negeri 2 Surakarta.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeFilter === f.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-200'
                  : 'bg-white text-slate-600 hover:bg-sky-100 hover:text-sky-700 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card flex flex-col justify-between group hover:border-sky-300 transition-all p-0 overflow-hidden"
            >
              {/* Project Image Frame */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 badge badge-blue shadow-sm">
                  {project.categoryLabel}
                </span>

                {project.featured && (
                  <span className="absolute top-3 right-3 badge badge-pink shadow-sm flex items-center gap-1">
                    <Sparkles size={12} /> Featured
                  </span>
                )}
              </div>

              {/* Project Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-700 mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-secondary btn-sm flex-1 flex items-center justify-center gap-1.5 text-xs"
                    >
                      <Eye size={14} />
                      <span>Detail</span>
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-600 transition-colors"
                      title="Lihat Kode GitHub"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
