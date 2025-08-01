'use client';

import { useState, useEffect, useCallback } from 'react';
import { NetworkParams, CalculatorResults, StatCard } from '@/types/calculator';
import { calculateResults, formatCurrency, formatNumber } from '@/utils/calculator';
import { fetchPOKTPrice } from '@/services/api';
import InputsSection from './InputsSection';
import ResultsSection from './ResultsSection';

interface CalculatorProps {
  onStatsUpdate: (stats: StatCard[]) => void;
}

const DEFAULT_PARAMS: NetworkParams = {
  dailyRelays: 50000000,
  cusPerRelay: 2488,
  poktPrice: 0.043,
  supplierShare: 78,
  validatorShare: 14,
  daoShare: 5,
  sourceOwnerShare: 3
};

export default function Calculator({ onStatsUpdate }: CalculatorProps) {
  const [params, setParams] = useState<NetworkParams>(DEFAULT_PARAMS);
  const [results, setResults] = useState<CalculatorResults>(calculateResults(DEFAULT_PARAMS));
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [refreshStatus, setRefreshStatus] = useState('');

  const updateResults = useCallback((newParams: NetworkParams) => {
    const newResults = calculateResults(newParams);
    setResults(newResults);
    
    // Update hero stats
    const heroStats: StatCard[] = [
      {
        id: 'previewRevenue',
        value: formatCurrency(newResults.annualRevenue, 0),
        label: 'Annual Protocol Revenue'
      },
      {
        id: 'previewTokens',
        value: formatNumber(newResults.dailyMint, 1),
        label: 'POKT Generated Daily'
      },
      {
        id: 'previewSuppliers',
        value: formatCurrency(newResults.supplierPoolValue, 0),
        label: 'Annual Supplier Rewards'
      }
    ];
    onStatsUpdate(heroStats);
  }, [onStatsUpdate]);

  const handleParamsChange = useCallback((newParams: NetworkParams) => {
    setParams(newParams);
    updateResults(newParams);
  }, [updateResults]);

  const handleRefreshPrice = useCallback(async () => {
    setRefreshLoading(true);
    setRefreshStatus('Fetching live price...');
    
    try {
      const priceData = await fetchPOKTPrice();
      const newParams = { ...params, poktPrice: priceData.price };
      setParams(newParams);
      updateResults(newParams);
      setRefreshStatus(`Price updated (${new Date().toLocaleTimeString()})`);
    } catch (error) {
      console.error('Price fetch error:', error);
      setRefreshStatus('Price update failed - check network connection');
    } finally {
      setRefreshLoading(false);
    }
  }, [params, updateResults]);

  // Auto-refresh price every 10 minutes
  useEffect(() => {
    const interval = setInterval(handleRefreshPrice, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [handleRefreshPrice]);

  // Initial price fetch
  useEffect(() => {
    setTimeout(handleRefreshPrice, 1000);
  }, [handleRefreshPrice]);



  return (
    <div className="relative bg-background -mt-16 rounded-t-4xl min-h-screen px-10 py-20 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 mb-20">
          <div className="fade-in">
            <InputsSection
              params={params}
              onParamsChange={handleParamsChange}
              onRefreshPrice={handleRefreshPrice}
              refreshLoading={refreshLoading}
              refreshStatus={refreshStatus}
            />
          </div>
          
          <div className="fade-in">
            <ResultsSection results={results} />
          </div>
        </div>
      </div>
    </div>
  );
} 