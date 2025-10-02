# Upgrade Notes - v2.0.0

This project has been upgraded from legacy versions to modern packages. Here are the key changes:

## Major Version Upgrades

### Core Framework

- **Gatsby**: v2.32 → v5.13 (major upgrade)
- **React**: v16.13 → v18.2 (major upgrade)
- **React DOM**: v16.13 → v18.2

### UI & Styling

- **Material-UI**: v4 → **MUI v5** (`@mui/material`)
  - Package renamed from `@material-ui/core` to `@mui/material`
  - Now requires `@emotion/react` and `@emotion/styled` as peer dependencies
- **Tailwind CSS**: v1.4 → v3.4 (major upgrade)
  - Changed from `purge` to `content` in config
  - Updated color system
- **React Icons**: v3.10 → v5.0

### Gatsby Plugins

- **gatsby-plugin-image**: New plugin (replaces deprecated `gatsby-image`)
- **gatsby-plugin-google-gtag**: Replaces deprecated `gatsby-plugin-gtag` and `gatsby-plugin-google-analytics`
- **Removed**: `gatsby-plugin-offline` (deprecated in Gatsby v5)
- **Removed**: `gatsby-plugin-purgecss` (no longer needed with Tailwind v3)
- **Removed**: `gatsby-plugin-eslint` (deprecated)
- **Removed**: `gatsby-plugin-google-fonts` (use modern font loading)
- **Removed**: `gatsby-source-dev`, `gatsby-source-dribbble`, `gatsby-source-instagram` (unused)

### Build Tools

- **ESLint**: v7 → v8
- **Babel ESLint**: `babel-eslint` → `@babel/eslint-parser`
- **Autoprefixer**: v9 → v10
- **Cssnano**: v4 → v6
- **Prettier**: v2.0 → v3.2
- **PostCSS**: Added v8 (required for Tailwind v3)

### Other Dependencies

- **GraphQL**: v14 → v16
- **dotenv**: v8 → v16
- **@sendgrid/mail**: v7 → v8
- **prop-types**: v15.7 → v15.8
- **react-scroll**: v1.7 → v1.9

### Removed Dependencies (Unused)

- **react-typist**: Incompatible with React 18, not used in codebase
- **wowjs**: Not used in codebase
- **parallax-js**: Not used in codebase

## Breaking Changes & Migration Steps

### 1. React 18 Changes

React 18 is mostly backward compatible, but you may need to:

- Update to the new root API if using custom rendering (already handled in Gatsby)
- Be aware of automatic batching (improves performance)
- Concurrent features are opt-in

### 2. Gatsby v5 Changes

- Node.js 18+ required
- GraphQL v16 (some query syntax may need updates)
- Removed `gatsby-plugin-offline` - consider using Gatsby's built-in caching or a custom service worker
- Image handling: Use `gatsby-plugin-image` instead of `gatsby-image`

### 3. Tailwind CSS v3 Changes

- Config file: `purge` → `content`
- JIT mode is now default (faster builds)
- Color palette updated (using `colors.teal` instead of `colors.teal`)
- PurgeCSS no longer needed (built into Tailwind)

### 4. MUI v5 Changes

If you're using Material-UI components, update imports:

```javascript
// Old
import { Button } from "@material-ui/core";

// New
import { Button } from "@mui/material";
```

### 5. ESLint Changes

- Updated parser from `babel-eslint` to `@babel/eslint-parser`
- Added proper parser options for React

### 6. Google Analytics

- Migrated from `gatsby-plugin-gtag` to `gatsby-plugin-google-gtag`
- Config structure slightly different (uses `trackingIds` array)

## Installation

After these changes, run:

```bash
# Remove old dependencies
rm -rf node_modules package-lock.json

# Install new dependencies
npm install

# Clean Gatsby cache
npm run clean

# Start development server
npm run develop
```

## Testing Checklist

- [ ] Site builds without errors (`npm run build`)
- [ ] Development server runs (`npm run develop`)
- [ ] All pages render correctly
- [ ] Images load properly
- [ ] Styling looks correct (Tailwind classes work)
- [ ] Google Analytics tracking works
- [ ] SEO plugins (sitemap, robots.txt) generate correctly
- [ ] Manifest and PWA features work
- [ ] Contact form (SendGrid) works if applicable
- [ ] Responsive design works on mobile/tablet/desktop

## Known Issues

1. **Font Loading**: Removed `gatsby-plugin-google-fonts`. Consider:
   - Using `@fontsource` packages
   - Loading fonts via CSS `@import`
   - Using system fonts

2. **Offline Support**: Removed `gatsby-plugin-offline`. If needed:
   - Implement custom service worker
   - Use Gatsby's built-in caching
   - Consider Workbox directly

## Performance Improvements

- Faster builds with Tailwind JIT mode
- Better tree-shaking with modern packages
- Improved image optimization with gatsby-plugin-image
- React 18 automatic batching reduces re-renders

## Next Steps

1. Test all functionality thoroughly
2. Update any custom code that uses deprecated APIs
3. Consider migrating to TypeScript for better type safety
4. Update CI/CD pipelines if needed (Node.js 18+ required)
5. Review and update any custom webpack configurations
