import React from 'react';
import { Terminal, Heart, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-10 pb-8 text-slate-600">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-sm">
              <Terminal size={20} />
            </div>
            <div>
              <span className="block text-base font-extrabold text-slate-900">
                Khanza PPLG Portfolio
              </span>
              <span className="block text-xs font-semibold text-slate-500">
                SMK Negeri 2 Surakarta • XI PPLG A
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-bold text-slate-600">
            <a href="#home" className="hover:text-sky-600 transition-colors">Home</a>
            <a href="#tentang" className="hover:text-sky-600 transition-colors">Tentang</a>
            <a href="#keahlian" className="hover:text-sky-600 transition-colors">Keahlian</a>
            <a href="#project" className="hover:text-sky-600 transition-colors">Project</a>
            <a href="#pendidikan" className="hover:text-sky-600 transition-colors">Pendidikan</a>
            <a href="#kontak" className="hover:text-sky-600 transition-colors">Kontak</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-600 transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-600 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-600 transition-colors"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Khanza Yumna Lakeisha. Dibuat dengan</span>
            <Heart size={14} className="text-pink-500 fill-pink-500" />
            <span>React + Vite & Custom CSS.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-700 transition-colors font-semibold"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
