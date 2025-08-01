export interface NetworkParams {
  dailyRelays: number;
  cusPerRelay: number;
  poktPrice: number;
  supplierShare: number;
  validatorShare: number;
  daoShare: number;
  sourceOwnerShare: number;
}

export interface CalculatorResults {
  dailyMint: number;
  annualMint: number;
  dailyRevenue: number;
  annualRevenue: number;
  supplierPoolValue: number;
  validatorPoolValue: number;
  daoPoolValue: number;
  sourceOwnerPoolValue: number;
}

export interface PriceData {
  price: number;
  timestamp: string;
  currency: string;
  source?: string;
}

export interface StatCard {
  value: string;
  label: string;
  id: string;
}

export interface RewardCard {
  title: string;
  percentage: number;
  value: string;
  subtitle: string;
  type: 'supplier' | 'validator' | 'dao' | 'service';
}

export interface MetricCard {
  value: string;
  label: string;
  id: string;
} 