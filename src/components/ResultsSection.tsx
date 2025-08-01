'use client';

import { CalculatorResults } from '@/types/calculator';
import { formatCurrency, formatNumber } from '@/utils/calculator';
import MetricCard from './MetricCard';
import RewardCard from './RewardCard';

interface ResultsSectionProps {
  results: CalculatorResults;
}

export default function ResultsSection({ results }: ResultsSectionProps) {
  const metrics = [
    { id: 'dailyMint', value: formatNumber(results.dailyMint, 2), label: 'Daily POKT Generated' },
    { id: 'annualMint', value: formatNumber(results.annualMint, 0), label: 'Annual POKT Generated' },
    { id: 'dailyRevenue', value: formatCurrency(results.dailyRevenue, 0), label: 'Daily Protocol Revenue' },
    { id: 'annualRevenue', value: formatCurrency(results.annualRevenue, 0), label: 'Annual Protocol Revenue' }
  ];

  const rewards = [
    {
      title: 'Supplier Rewards',
      percentage: 78,
      value: formatCurrency(results.supplierPoolValue, 0),
      subtitle: 'Primary infrastructure providers',
      type: 'supplier' as const
    },
    {
      title: 'Validator Rewards',
      percentage: 14,
      value: formatCurrency(results.validatorPoolValue, 0),
      subtitle: 'Network consensus validators',
      type: 'validator' as const
    },
    {
      title: 'DAO Treasury',
      percentage: 5,
      value: formatCurrency(results.daoPoolValue, 0),
      subtitle: 'Governance and development',
      type: 'dao' as const
    },
    {
      title: 'Service Owner Rewards',
      percentage: 3,
      value: formatCurrency(results.sourceOwnerPoolValue, 0),
      subtitle: 'Application developers',
      type: 'service' as const
    }
  ];

  return (
    <div className="space-y-10">
      {/* Network Metrics */}
      <div className="bg-card border border-border rounded-3xl p-10 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-foreground">Network Metrics</h3>
          <div className="card-gradient text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
            Live Data
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>

      {/* Annual Ecosystem Rewards */}
      <div className="bg-card border border-border rounded-3xl p-10 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-foreground">Annual Ecosystem Rewards</h3>
          <div className="card-gradient text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
            Yearly Distribution
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rewards.map((reward, index) => (
            <RewardCard key={index} reward={reward} />
          ))}
        </div>
      </div>
    </div>
  );
} 