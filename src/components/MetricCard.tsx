'use client';

import { MetricCard as MetricCardType } from '@/types/calculator';

interface MetricCardProps {
  metric: MetricCardType;
}

export default function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="bg-muted border border-border rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 card-gradient"></div>
      <div className="text-3xl font-black text-foreground mb-2 leading-none">
        {metric.value}
      </div>
      <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider leading-tight">
        {metric.label}
      </div>
    </div>
  );
} 