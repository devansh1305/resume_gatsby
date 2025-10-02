# Quick Start Guide

## Prerequisites

- Node.js 18+ (check with `node --version`)
- npm 9+ (check with `npm --version`)

## Installation & Setup

1. **Clean install** (recommended after upgrade):
```bash
# Remove old dependencies
rm -rf node_modules package-lock.json

# Install dependencies
npm install
```

2. **Clean Gatsby cache**:
```bash
npm run clean
```

3. **Start development server**:
```bash
npm run develop
```

The site will be available at `http://localhost:8000`

## Available Scripts

- `npm run develop` or `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache
- `npm run fix` - Auto-fix linting and formatting issues
- `npm run analyze` - Check for linting and formatting issues

## Troubleshooting

### Port already in use
If port 8000 is already in use:
```bash
npm run clean
npm run develop -- -p 8001
```

### Build errors after upgrade
```bash
# Clean everything and reinstall
rm -rf node_modules package-lock.json .cache public
npm install
npm run clean
npm run develop
```

### Node version issues
Make sure you're using Node 18+:
```bash
node --version
```

If using nvm:
```bash
nvm use 18
```

## What Changed?

See `UPGRADE_NOTES.md` for detailed information about the upgrade from v1 to v2.

## Deployment

Build the site:
```bash
npm run build
```

The production-ready files will be in the `public/` directory.

For Purdue CS hosting with path prefix:
```bash
npm run build -- --prefix-paths
```
