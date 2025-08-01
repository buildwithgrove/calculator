'use client';

import { RewardCard as RewardCardType } from '@/types/calculator';

interface RewardCardProps {
  reward: RewardCardType;
}

const typeStyles = {
  supplier: 'border-[hsl(var(--chart-1))] bg-gradient-to-br from-[hsl(var(--chart-1)/0.05)] to-[hsl(var(--chart-1)/0.02)]',
  validator: 'border-[hsl(var(--chart-2))] bg-gradient-to-br from-[hsl(var(--chart-2)/0.05)] to-[hsl(var(--chart-2)/0.02)]',
  dao: 'border-[hsl(var(--chart-3))] bg-gradient-to-br from-[hsl(var(--chart-3)/0.05)] to-[hsl(var(--chart-3)/0.02)]',
  service: 'border-[hsl(var(--chart-4))] bg-gradient-to-br from-[hsl(var(--chart-4)/0.05)] to-[hsl(var(--chart-4)/0.02)]'
};

export default function RewardCard({ reward }: RewardCardProps) {
  return (
    <div className={`bg-card border-2 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl ${typeStyles[reward.type]}`}>
      <div className="flex items-center justify-between mb-5">
        <div className="text-lg font-semibold text-foreground">{reward.title}</div>
        <div className="bg-foreground text-background px-3 py-1.5 rounded-xl text-xs font-semibold">
          {reward.percentage}%
        </div>
      </div>
      <div className="text-2xl font-black text-foreground mb-2">{reward.value}</div>
      <div className="text-sm text-muted-foreground font-medium">{reward.subtitle}</div>
    </div>
  );
} 