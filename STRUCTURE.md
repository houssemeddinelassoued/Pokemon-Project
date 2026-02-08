# Proposed Project Structure

```
Pokemon-Project/
  SPECIFICATION.md
  STRUCTURE.md
  README.md
  package.json
  public/
    index.html
    icons/
    sprites/
  src/
    app/
      App.tsx
      routes.tsx
    assets/
      styles/
        tokens.css
        global.css
        layout.css
        components.css
      images/
        hero/
        textures/
    i18n/
      locales/
        ar.json
        en.json
      index.ts
    components/
      BattleLog.tsx
      CompareBoard.tsx
      CompareSlot.tsx
      FiltersBar.tsx
      LanguageSwitch.tsx
      PokemonCard.tsx
      PokemonGrid.tsx
      PokemonDetail.tsx
      SearchBar.tsx
      StatBars.tsx
      TypeBadge.tsx
      TypeLegend.tsx
      UiButton.tsx
      UiDrawer.tsx
      UiModal.tsx
    data/
      api.ts
      cache.ts
      mappers.ts
      pagination.ts
      pokeapi.ts
      species.ts
    features/
      battle/
        battleEngine.ts
        damage.ts
        log.ts
        types.ts
      compare/
        compareSlice.ts
        selectors.ts
        rules.ts
      pokedex/
        pokedexSlice.ts
        filters.ts
        sort.ts
        view.ts
    hooks/
      usePokemon.ts
      useCompare.ts
      useDebouncedValue.ts
      useLanguage.ts
    pages/
      Home.tsx
      Compare.tsx
      NotFound.tsx
    state/
      store.ts
      middlewares.ts
    types/
      battle.ts
      pokemon.ts
      ui.ts
      i18n.ts
    utils/
      format.ts
      math.ts
      performance.ts
      storage.ts
  tests/
    battleEngine.test.ts
    compare.test.ts
    filters.test.ts
    sort.test.ts
  docs/
    ui-guidelines.md
    data-flow.md
    decisions.md
    i18n.md
```

## Notes
- Stack visee: React + TypeScript.
- `data/` regroupe l'API, le cache, la pagination et la couche PokeAPI.
- `features/` separe la logique par domaine fonctionnel.
- `components/` contient les blocs UI reutilisables.
- `tests/` cible la logique critique (battle, filtres, tri, comparaison).

## Guide UI/UX (resume)
- Grille Pokédex dense avec cartes compactes et hover reveal.
- Board de comparaison ancre (desktop) et tiroir (mobile).
- Battle log en modal ou panneau lateral, replay visible.
- Couleurs par type via tokens CSS, legende de types.
- Boutons et interactions accessibles (focus visible, ARIA).
- Switch langue visible, support RTL pour l'Arabe.

## Flux de Donnees (resume)
1. `data/pokeapi.ts` gere les appels PokeAPI.
2. `data/species.ts` recupere les noms multilingues.
3. `data/mappers.ts` normalise vers `types/pokemon.ts`.
4. `data/cache.ts` persiste et rehydrate.
5. `features/pokedex` applique filtres, tri, recherche.
6. `features/compare` gere selection et regles.
7. `features/battle` execute la simulation et log.

## Styling
- `tokens.css`: couleurs, typographies, espacements, ombres.
- `global.css`: resets et styles globaux.
- `layout.css`: grille, layouts, responsive.
- `components.css`: composants atomiques et etats.
- `i18n/`: dictionnaires de textes UI et langue active.
