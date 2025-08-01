import { PriceData } from '@/types/calculator';

export async function fetchPOKTPrice(): Promise<PriceData> {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=pocket-network&vs_currencies=usd');
    
    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }
    
    const data = await response.json();
    const price = data['pocket-network']?.usd;
    
    if (!price) {
      throw new Error('Price data not available');
    }
    
    return {
      price,
      timestamp: new Date().toISOString(),
      currency: 'USD',
      source: 'CoinGecko'
    };
    
  } catch (error) {
    console.error('Price fetch error:', error);
    throw new Error('Failed to fetch POKT price');
  }
} 