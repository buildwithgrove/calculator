'use client';

import { StatCard } from '@/types/calculator';

interface HeroProps {
  stats: StatCard[];
}

export default function Hero({ stats }: HeroProps) {
  return (
    <div className="relative hero-gradient text-white text-center py-20 px-5 overflow-hidden">
      <div className="absolute inset-0 floating-particles"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-br from-white to-gray-100 bg-clip-text text-transparent tracking-tight">
          Pocket Network Economics
        </h1>
        <p className="text-2xl opacity-90 mb-12 font-normal">
          Visualize protocol revenue, token generation, and ecosystem rewards in real-time
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="text-4xl font-black mb-2">{stat.value}</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 