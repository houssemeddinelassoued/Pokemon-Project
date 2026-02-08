import { useLanguage } from '@/i18n';

interface TypeBadgeProps {
  type: string;
}

export const TypeBadge = ({ type }: TypeBadgeProps) => {
  const { t } = useLanguage();

  const typeColors: Record<string, string> = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    grass: 'bg-green-500',
    electric: 'bg-yellow-400 text-gray-900',
    ice: 'bg-cyan-400',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-blue-300',
    psychic: 'bg-pink-500',
    bug: 'bg-green-600',
    rock: 'bg-gray-600',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-600',
    dark: 'bg-gray-800',
    steel: 'bg-gray-400',
    fairy: 'bg-pink-300 text-gray-900',
  };

  const color = typeColors[type] || 'bg-gray-500';
  const label = t(`types.${type}`) || type;

  return (
    <span
      className={`${color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm inline-block`}
    >
      {label}
    </span>
  );
};
