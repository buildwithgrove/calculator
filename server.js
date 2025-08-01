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

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Real POKT price API endpoint
app.get('/api/pokt-price', async (req, res) => {
    try {
        // Fetch real POKT price from CoinGecko API
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=pocket-network&vs_currencies=usd');
        
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
        
        // Return error response instead of fallback
        res.status(500).json({
            error: 'Failed to fetch POKT price',
            message: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Pocket Network Calculator server running on http://localhost:${PORT}`);
    console.log(`📊 Calculator available at http://localhost:${PORT}`);
}); 