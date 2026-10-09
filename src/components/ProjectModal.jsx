import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm fade-in">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-sky-100 p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Modal Header Media */}
        <div className="relative h-56 rounded-2xl overflow-hidden mb-5 bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="badge badge-blue mb-2 inline-block font-mono">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-sky-200 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
              Deskripsi Proyek
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers size={16} className="text-sky-600" />
              <span>Teknologi Digunakan</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 text-xs font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Fitur Utama & Hasil Pembelajaran
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                <span>Desain antarmuka responsif ramah pengguna (Mobile & Desktop).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                <span>Pengolahan data dinamis dengan manajemen state & database.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                <span>Struktur kode modular yang rapi sesuai prinsip PPLG.</span>
              </li>
            </ul>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={onClose}
              className="btn btn-secondary btn-sm"
            >
              Tutup
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex items-center gap-1.5"
            >
              <Github size={16} />
              <span>Lihat di GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
