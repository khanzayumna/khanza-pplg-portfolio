import React from 'react';
import { Code, ArrowRight, MessageSquare, Download, School, CheckCircle2, Sparkles, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-16 overflow-hidden">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-sky-300/30 to-pink-300/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-sky-200 shadow-sm mb-6 fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <span className="text-xs font-bold font-mono tracking-wider text-sky-700 uppercase">
              SIAP PKL / MAGANG INDUSTRI PPLG
            </span>
          </div>

          {/* Avatar Profile Card with Bento Styling */}
          <div className="relative mb-6 group">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl p-2 bg-gradient-to-br from-sky-400 via-pink-300 to-cyan-300 shadow-xl transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJJtcYt6JpXdmILZ1pGxQsdFDnVx939ywKfEvM7GSqNS8JXXga69zamGg6f83gWAa__23fKVzEM8AJnnGYU4M6lbBYHtCJKHrD4AMLhp8vZouD6owGDAotFcV9d5KqTVu_utOsUTr5s_ZAf9OzKMCHKTO9eU04XKNNksWT7KTnRRoh8_VEEJ4ASalWA2Nerzto3KunVpxZvL2uEmJFXj9Id5N_jfKNqYpoXGzHDtNbDIkZ6BNAI0oUrQ"
                  alt="Khanza Yumna Lakeisha"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Verified Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-slate-800 shadow-md px-3.5 py-1.5 rounded-full border border-sky-100 flex items-center gap-1.5 text-xs font-bold whitespace-nowrap">
              <CheckCircle2 size={16} className="text-sky-500 fill-sky-100" />
              <span>PPLG Candidate</span>
            </div>
          </div>

          {/* Heading Name & Role */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
            Khanza Yumna Lakeisha
          </h1>
          <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-sky-600 via-cyan-600 to-pink-500 bg-clip-text text-transparent mb-3">
            Junior Web & Game Developer
          </p>

          {/* School Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-5">
            <School size={16} className="text-sky-600" />
            <span>SMK Negeri 2 Surakarta • XI PPLG A</span>
          </div>

          {/* Bio Description */}
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Siswa kejuruan PPLG yang berdedikasi tinggi dengan passion pada pengembangan web modern, arsitektur clean code, database relasional, serta antarmuka pengguna yang interaktif dan responsif.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
            <a href="#project" className="btn btn-primary flex-1 min-w-[160px]">
              <span>Lihat Project</span>
              <ArrowRight size={18} />
            </a>
            <a href="#kontak" className="btn btn-secondary flex-1 min-w-[160px]">
              <MessageSquare size={18} />
              <span>Hubungi / CV</span>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="mt-8 flex items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1 text-sky-600">
              <Sparkles size={14} /> Terbuka Posisi PKL Web / Mobile Developer
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
