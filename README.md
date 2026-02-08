# Pokemon Battle Arena

A modern, bilingual web application for browsing, comparing, and battling Pokémon from Generation 1. Built with React, TypeScript, and Tailwind CSS.

## Features

✅ **10 Generation 1 Pokémon** - Fully detailed with stats, types, and descriptions  
✅ **Bilingual UI** - English (EN) and Arabic (AR) with full RTL support  
✅ **Dark Mode** - Comfortable viewing in any lighting  
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices  
✅ **Interactive Stats** - Visual stat bars with animated transitions  
✅ **Fast & Lightweight** - Built with Vite for instant loading  

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- VS Code (recommended)

### Installation

```bash
# Clone or navigate to the project directory
cd Pokemon-Project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── LanguageSwitch.tsx
│   ├── PokemonCard.tsx
│   ├── StatBar.tsx
│   └── TypeBadge.tsx
├── data/
│   └── pokemon.ts    # Generation 1 Pokémon data & types
├── i18n/
│   ├── index.tsx     # i18n context & provider
│   └── locales/
│       ├── en.json   # English translations
│       └── ar.json   # Arabic translations
├── pages/
│   └── Home.tsx      # Main application page
├── App.tsx           # App wrapper with provider
├── App.css           # Global styles
└── main.tsx          # React DOM entry point
```

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool & dev server
- **Zustand** - State management (ready for future features)
- **Lucide React** - Icon library

## Bilingual Support (EN/AR)

The app fully supports English and Arabic with:
- Language toggle in the header
- Automatic RTL layout for Arabic
- Translated UI labels and Pokémon descriptions
- Persistent language preference (localStorage)

### Available Translations

- UI labels (stats, types, sections)
- Pokémon descriptions
- Type names in both languages

## Pokémon Included

Generation 1 includes:

1. **Bulbasaur** - Grass/Poison
2. **Charmander** - Fire
3. **Squirtle** - Water
4. **Pikachu** - Electric
5. **Nidoran♀** - Poison
6. **Growlithe** - Fire
7. **Machop** - Fighting
8. **Gastly** - Ghost/Poison
9. **Koffing** - Poison
10. **Eevee** - Normal

Each Pokémon includes:
- Bilingual names & descriptions
- Base stats (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed)
- Official artwork from PokeAPI
- Type information
- Height & weight data

## Roadmap

**v1.1 (Next)**
- Comparison board (2-4 Pokémon side-by-side)
- Battle simulator mini-game

**v2.0 (Future)**
- All generations (2-9)
- PokeAPI integration with caching
- Team builder (6 Pokémon)
- Advanced filtering & search
- Battle history & replay

## API Integration

Currently using local data. When ready to integrate PokeAPI:

```typescript
// Planned: src/data/pokeapi.ts
const BASE_URL = 'https://pokeapi.co/api/v2';

// Endpoints:
// GET /pokemon?limit=20&offset=0
// GET /pokemon/{id|name}
// GET /pokemon-species/{id|name}
// GET /type/{name}
```

See `SPECIFICATION.md` for detailed PokeAPI integration plan.

## Performance

- ⚡ Vite development server for instant HMR
- 💾 Local data caching ready
- 🖼️ Lazy-loaded Pokémon artwork
- 📦 ~50KB gzipped bundle size

## Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- High contrast dark mode
- RTL layout for Arabic speakers
- Semantic HTML structure

## Development

```bash
# Run dev server with HMR
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## File Descriptions

- **TypeScript Config** - `tsconfig.json` for strict type checking
- **Tailwind Config** - `tailwind.config.js` with animations
- **Vite Config** - `vite.config.ts` with path aliases
- **i18n System** - Context-based translation management
- **Pokemon Data** - Typed data structure with bilingual support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT

## Contributing

Pull requests welcome! Please ensure:
- TypeScript strict mode compliance
- Tailwind CSS utilities only (no custom CSS)
- Bilingual text support
- Mobile-first responsive design

## Contact & Support

For issues or questions, please open an issue on GitHub.

---

**Happy Pokémon battling!** 🎮✨
