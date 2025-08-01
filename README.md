# Pocket Network Economics Calculator

A beautiful, interactive calculator for visualizing Pocket Network protocol revenue, token generation, and ecosystem rewards in real-time.

## Features

- 🎯 **Real-time Calculations**: Instant updates as you adjust network parameters
- 📊 **Visual Metrics**: Clear display of daily/annual POKT generation and revenue
- 💰 **Reward Distribution**: Breakdown of rewards for suppliers, validators, DAO, and service owners
- 🎨 **Modern UI**: Beautiful gradient design with Pocket Network branding
- 🔄 **Live Price Updates**: Real POKT price data from CoinGecko API
- 🏷️ **Local Assets**: Uses local Pocket Network logo and optimized assets

## Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

### Development Mode

For development with auto-restart on file changes:
```bash
npm run dev
```

## Project Structure

```
calculator/
├── index.html          # Main calculator interface
├── server.js           # Express server with CORS handling
├── package.json        # Dependencies and scripts
├── src/
│   └── img/           # Local assets
│       ├── logo-large-blue.png
│       └── logo-large-black.png
└── pokt-calculator/   # Modern Next.js version (in development)
```

## CORS Solution

This project includes a proper CORS setup to prevent cross-origin issues:

- **Server-side CORS**: Configured to allow all origins (adjust for production)
- **API Endpoints**: All API calls are routed through the same server
- **No External Dependencies**: Eliminates CORS issues from third-party APIs

## API Endpoints

- `GET /` - Main calculator interface
- `GET /api/pokt-price` - Real POKT price from CoinGecko API
- `GET /health` - Health check endpoint

## Recent Updates

### Cleanup and Optimization
- ✅ Removed unused CSS classes and variables
- ✅ Optimized logo usage with local assets
- ✅ Streamlined codebase for better maintainability
- ✅ Removed redundant animations and effects
- ✅ Updated to use Pocket Network blue logo

### Features Removed
- Hero preview stats (simplified header)
- Unused CSS animations and effects
- Redundant design system variables

## Customization

### Price Data Source

The calculator uses real POKT price data from the CoinGecko API. The `/api/pokt-price` endpoint fetches live price data and includes proper error handling.

If you need to switch to a different price API, modify the endpoint in `server.js`:

```javascript
app.get('/api/pokt-price', async (req, res) => {
    try {
        // Replace with your preferred price API
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        res.json({
            price: data.price,
            timestamp: new Date().toISOString(),
            currency: 'USD',
            source: 'YourAPI'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch POKT price',
            message: error.message,
            timestamp: new Date().toISOString()
        });
    }
});
```

### Network Parameters

Adjust the default values in `index.html` to match current Pocket Network parameters:

- **Daily Relays**: 50,000,000 (default)
- **CUs per Relay**: 2,500 (approximation)
- **POKT Price**: Auto-fetched from CoinGecko
- **Reward Distribution**:
  - Supplier Share: 78%
  - Validator Share: 14%
  - DAO Share: 5%
  - Service Owner Share: 3%

### Logo Customization

The calculator uses local Pocket Network logos:
- `src/img/logo-large-blue.png` - Used in header
- `src/img/logo-large-black.png` - Alternative version

## Production Deployment

For production deployment:

1. Set environment variables:
```bash
export PORT=8080
export NODE_ENV=production
```

2. Update CORS settings in `server.js`:
```javascript
app.use(cors({
    origin: ['https://yourdomain.com'], // Restrict to your domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
```

3. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start server.js --name "pocket-calculator"
```

## Modern Version (Next.js)

A modern React/Next.js version is available in the `pokt-calculator/` directory:

```bash
cd pokt-calculator
npm install
npm run dev
```

This version features:
- TypeScript for type safety
- Component-based architecture
- Tailwind CSS for styling
- Modular code structure

## License

MIT License - feel free to use and modify as needed. 