'use client';

import { useState } from 'react';
import { StatCard } from '@/types/calculator';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';

export default function Home() {
  const [heroStats, setHeroStats] = useState<StatCard[]>([
    {
      id: 'previewRevenue',
      value: '$0',
      label: 'Annual Protocol Revenue'
    },
    {
      id: 'previewTokens',
      value: '0',
      label: 'POKT Generated Daily'
    },
    {
      id: 'previewSuppliers',
      value: '$0',
      label: 'Annual Supplier Rewards'
    }
  ]);

  return (
    <main className="min-h-screen">
      <Hero stats={heroStats} />
      <Calculator onStatsUpdate={setHeroStats} />
    </main>
  );
}
