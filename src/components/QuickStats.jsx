import React from 'react';
import { Code2, Award, Building2, Layers } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      icon: Code2,
      value: '12+',
      label: 'Repository & Project',
      desc: 'Web, Mobile, & Mini Gim',
      color: 'text-sky-600',
      bgColor: 'bg-sky-50'
    },
    {
      icon: Award,
      value: '100%',
      label: 'Kesiapan PKL',
      desc: 'Kompetensi Industri PPLG',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Building2,
      value: 'SMK 2',
      label: 'Surakarta',
      desc: 'XI PPLG A (2025-2026)',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: Layers,
      value: '5+',
      label: 'Bahasa & Framework',
      desc: 'JS, PHP, Java, React, SQL',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <section className="py-6">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bento-card bento-card-gradient flex flex-col items-center text-center p-5 group hover:border-sky-300 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl ${stat.bgColor} flex items-center justify-center mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-slate-800">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {stat.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
