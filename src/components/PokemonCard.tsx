import { Pokemon } from '@/data/pokemon';
import { useLanguage } from '@/i18n';
import { Info } from 'lucide-react';

interface PokemonCardProps {
  pokemon: Pokemon;
  isSelected: boolean;
  onClick: () => void;
}

export const PokemonCard = ({ pokemon, isSelected, onClick }: PokemonCardProps) => {
  const { language, dir } = useLanguage();

  const name = language === 'ar' ? pokemon.nameAr : pokemon.nameEn;

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden group p-4 rounded-2xl transition-all duration-300 border-2 flex items-center gap-4 w-full text-left
        ${
          isSelected
            ? 'border-blue-500 bg-white dark:bg-gray-800 shadow-lg scale-105'
            : 'border-transparent bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md'
        } ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}
    >
      <div className={`absolute inset-0 opacity-10 bg-gradient-to-r ${pokemon.color}`}></div>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.nameEn}
        className="w-16 h-16 object-contain z-10 drop-shadow-md group-hover:scale-110 transition-transform"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
        }}
      />

      <div className="z-10 flex-1">
        <h3 className="font-bold text-lg">{name}</h3>
        <span className="text-xs text-gray-500 uppercase tracking-wider">#{pokemon.id}</span>
      </div>

      {isSelected && (
        <div className="text-blue-500 z-10">
          <Info size={20} />
        </div>
      )}
    </button>
  );
};
