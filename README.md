# Pocket Network Economics Calculator

A beautiful, interactive calculator for visualizing Pocket Network protocol revenue, token generation, and ecosystem rewards in real-time.

## Features

- 🎯 **Real-time Calculations**: Instant updates as you adjust network parameters
- 📊 **Visual Metrics**: Clear display of daily/annual POKT generation and revenue
- 💰 **Reward Distribution**: Breakdown of rewards for suppliers, validators, DAO, and source owners
- 🎨 **Modern UI**: Beautiful gradient design with Pocket Network branding
- 🔄 **Live Price Updates**: Real POKT price data from CoinGecko API
- 🏷️ **Local Assets**: Uses local Pocket Network logo and optimized assets
- 💱 **Smart Formatting**: Comma-separated numbers for better readability

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
├── .gitignore          # Git ignore rules
└── public/             # Static assets
    └── img/
        ├── logo-large-blue.png
        └── logo-large-black.png
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

### Latest Features
- ✅ **Comma Formatting**: Daily relays input now shows commas as you type
- ✅ **Real-time Price Updates**: Live POKT price from CoinGecko API
- ✅ **Optimized UI**: Clean, modern interface with Pocket Network branding
- ✅ **Smart Input Handling**: Intelligent cursor positioning during number formatting

### Cleanup and Optimization
- ✅ Removed unused CSS classes and variables
- ✅ Optimized logo usage with local assets
- ✅ Streamlined codebase for better maintainability
- ✅ Removed redundant animations and effects
- ✅ Updated to use Pocket Network blue logo
- ✅ Simplified project structure (single working version)

### Features Removed
- Hero preview stats (simplified header)
- Unused CSS animations and effects
- Redundant design system variables

## Customization

### Network Parameters

Adjust the default values in `index.html` to match current Pocket Network parameters:

- **Daily Relays**: 50,000,000 (default) - with comma formatting
- **CUs per Relay**: 2,500 (approximation)
- **POKT Price**: Auto-fetched from CoinGecko
- **Reward Distribution**:
  - Supplier Share: 78%
  - Validator Share: 14%
  - DAO Share: 5%
  - Source Owner Share: 3%

### Logo Customization

The calculator uses local Pocket Network logos:
- `public/img/logo-large-blue.png` - Used in header
- `public/img/logo-large-black.png` - Alternative version

## Production Deployment

### Vercel Deployment

This project is optimized for Vercel deployment:

1. **Connect your GitHub repository to Vercel**
2. **Vercel will auto-detect** it as a Node.js project
3. **Build Command**: `npm install`
4. **Output Directory**: Root directory
5. **Install Command**: `npm install`

### Traditional Deployment

For traditional server deployment:

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

## Development

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/buildwithgrove/calculator.git
cd calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

### Making Changes

- **HTML/CSS/JS**: Edit `index.html` for UI changes
- **Server Logic**: Modify `server.js` for API changes
- **Dependencies**: Update `package.json` for new packages

## License

MIT License - feel free to use and modify as needed. 