import { NetworkParams, CalculatorResults } from '@/types/calculator';

export function formatCurrency(num: number, decimals = 0): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: decimals
  }).format(num);
}

export function formatNumber(num: number, decimals = 0): string {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(decimals) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(decimals) + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(decimals) + 'K';
  }
  return num.toLocaleString('en-US', { maximumFractionDigits: decimals });
}

export function calculateResults(params: NetworkParams): CalculatorResults {
  const { dailyRelays, cusPerRelay, poktPrice, supplierShare, validatorShare, daoShare, sourceOwnerShare } = params;
  const daysPerYear = 365;

  const dailyPoktGenerated = dailyRelays * cusPerRelay * 1e-9;
  const annualPoktGenerated = dailyPoktGenerated * daysPerYear;
  
  const dailyProtocolRevenue = dailyPoktGenerated * poktPrice;
  const annualProtocolRevenue = annualPoktGenerated * poktPrice;
  
  const validatorPoolValue = annualProtocolRevenue * (validatorShare / 100);
  const daoPoolValue = annualProtocolRevenue * (daoShare / 100);
  const supplierPoolValue = annualProtocolRevenue * (supplierShare / 100);
  const sourceOwnerPoolValue = annualProtocolRevenue * (sourceOwnerShare / 100);

  return {
    dailyMint: dailyPoktGenerated,
    annualMint: annualPoktGenerated,
    dailyRevenue: dailyProtocolRevenue,
    annualRevenue: annualProtocolRevenue,
    supplierPoolValue,
    validatorPoolValue,
    daoPoolValue,
    sourceOwnerPoolValue
  };
} 