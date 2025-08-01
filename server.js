const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({
    origin: '*', // Allow all origins - adjust this for production
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Test endpoint for debugging
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'API is working',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Real POKT price API endpoint
app.get('/api/pokt-price', async (req, res) => {
    try {
        // Set timeout for the fetch request (8 seconds to stay under Vercel's 10s limit)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        
        // Fetch real POKT price from CoinGecko API
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=pocket-network&vs_currencies=usd', {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Pocket-Network-Calculator/1.0'
            }
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`CoinGecko API error: ${response.status}`);
        }
        
        const data = await response.json();
        const price = data['pocket-network']?.usd;
        
        if (!price) {
            throw new Error('Price data not available');
        }
        
        res.json({
            price: price,
            timestamp: new Date().toISOString(),
            currency: 'USD',
            source: 'CoinGecko'
        });
        
    } catch (error) {
        console.error('Price fetch error:', error);
        
        // Log more details for debugging
        console.error('Error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        
        // Return a fallback price instead of error for better UX
        res.json({
            price: 0.01, // Fallback price
            timestamp: new Date().toISOString(),
            currency: 'USD',
            source: 'Fallback',
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Pocket Network Calculator server running on http://localhost:${PORT}`);
    console.log(`📊 Calculator available at http://localhost:${PORT}`);
}); 