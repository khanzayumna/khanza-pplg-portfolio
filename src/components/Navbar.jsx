import React, { useState, useEffect } from 'react';
import { Terminal, Code, User, Cpu, FolderGit2, Mail, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'tentang', 'keahlian', 'project', 'pendidikan', 'kontak'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Code },
    { id: 'tentang', label: 'Tentang', icon: User },
    { id: 'keahlian', label: 'Keahlian', icon: Cpu },
    { id: 'project', label: 'Project', icon: FolderGit2 },
    { id: 'kontak', label: 'Kontak', icon: Mail }
  ];

  return (
    <header className={`glass-header transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-3.5'}`}>
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Terminal size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
              Khanza Yumna
            </span>
            <span className="text-xs font-semibold text-sky-600 tracking-wider font-mono">
              XI PPLG A • SMKN 2 Surakarta
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-white text-sky-600 shadow-sm'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-slate-200/50'
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Status Pill */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>SIAP PKL</span>
          </div>
          <a
            href="#kontak"
            className="btn btn-primary btn-sm flex items-center gap-1.5"
          >
            <Sparkles size={14} />
            <span>Kirim Pesan</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-sky-600 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-sky-100 px-4 py-4 space-y-2 fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-sky-50 text-sky-600 border border-sky-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}
          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>SIAP PKL</span>
            </div>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary btn-sm"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
