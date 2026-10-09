import React, { useState } from 'react';
import { Cpu, Layout, Server, Smartphone, Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Keahlian', icon: Cpu },
    { id: 'frontend', label: 'Frontend Web', icon: Layout },
    { id: 'backend', label: 'Backend & DB', icon: Server },
    { id: 'mobile', label: 'Mobile & Gim', icon: Smartphone },
    { id: 'tools', label: 'Tools & Workflow', icon: Wrench }
  ];

  const skillList = [
    // Frontend
    { name: 'HTML5 & Semantic Markup', level: 92, category: 'frontend', desc: 'Struktur web standar modern & aksesibilitas' },
    { name: 'CSS3, Vanilla CSS & Flexbox/Grid', level: 90, category: 'frontend', desc: 'Layout responsif, animasi CSS, & CSS custom properties' },
    { name: 'JavaScript (ES6+) & DOM', level: 85, category: 'frontend', desc: 'Async/await, Fetch API, ES Modules, & Event handling' },
    { name: 'React.js & Vite', level: 80, category: 'frontend', desc: 'Hooks, State management, Component lifecycle, SPA' },
    { name: 'Tailwind CSS & Bootstrap', level: 88, category: 'frontend', desc: 'Desain UI cepat, komponen utility-first' },

    // Backend
    { name: 'PHP (Native & OOP)', level: 85, category: 'backend', desc: 'Integrasi backend, session management, CRUD' },
    { name: 'MySQL Database & Querying', level: 85, category: 'backend', desc: 'Relasi tabel, Indexing, SQL queries, PHP Data Objects' },
    { name: 'RESTful API Concept & JSON', level: 82, category: 'backend', desc: 'Konsumsi API Endpoint & Pengelolaan data JSON' },

    // Mobile & Gim
    { name: 'Java (Android Development)', level: 78, category: 'mobile', desc: 'Android Studio, Activity/Fragment lifecycle, UI Layouts' },
    { name: 'Logika Pemrograman Gim 2D', level: 75, category: 'mobile', desc: 'Canvas 2D, Sprites animation, Game loop, Physics collision' },

    // Tools
    { name: 'Git & GitHub Version Control', level: 88, category: 'tools', desc: 'Repository management, Branching, Commits' },
    { name: 'Figma to Code UI Conversion', level: 85, category: 'tools', desc: 'Konversi desain wireframe & mockup ke kode HTML/CSS' },
    { name: 'VS Code & Postman API', level: 90, category: 'tools', desc: 'Pengujian endpoint REST API & Ekosistem ekstensi' }
  ];

  const filteredSkills = activeTab === 'all'
    ? skillList
    : skillList.filter(s => s.category === activeTab);

  const toolCloud = [
    'Git & GitHub', 'VS Code', 'Postman', 'Figma', 'Node.js Basics',
    'JSON', 'REST API', 'XAMPP / Apache', 'Android Studio', 'Chrome DevTools',
    'Responsive Design', 'Clean Code Architecture'
  ];

  return (
    <section id="keahlian" className="py-12 bg-sky-50/50">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={16} />
            <span>Kompetensi Teknis</span>
          </div>
          <h2 className="section-title">Keahlian & Tech Stack</h2>
          <p className="section-desc">
            Bahasa pemrograman, framework, dan peralatan pengembangan perangkat lunak yang telah dikuasai selama pembelajaran di SMK PPLG.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-200'
                    : 'bg-white text-slate-600 hover:bg-sky-100 hover:text-sky-700 border border-slate-200'
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="bento-card p-5 hover:border-sky-300 transition-all">
              <div className="flex justify-between items-center mb-2">
                <span className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                  {skill.name}
                </span>
                <span className="text-xs font-bold font-mono text-sky-700 px-2 py-0.5 rounded-full bg-sky-100">
                  {skill.level}%
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3 font-medium">{skill.desc}</p>
              
              {/* Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tool Badge Cloud */}
        <div className="bento-card p-6 bg-white border border-sky-100">
          <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle size={18} className="text-sky-600" />
            <span>Alat Pembantu & Ekosistem Kerja</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {toolCloud.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-sky-50 text-sky-800 border border-sky-200 text-xs font-semibold hover:bg-sky-600 hover:text-white transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
