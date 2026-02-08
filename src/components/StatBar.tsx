import { useLanguage } from '@/i18n';

interface StatBarProps {
  stat: 'hp' | 'attack' | 'defense' | 'spAtk' | 'spDef' | 'speed';
  value: number;
  colorClass: string;
  max?: number;
}

export const StatBar = ({ stat, value, colorClass, max = 160 }: StatBarProps) => {
  const { t, dir } = useLanguage();

  const percentage = (value / max) * 100;
  const label = t(`stats.${stat}`);

  return (
    <div className={`flex items-center gap-2 mb-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
      <span className="w-24 text-xs font-bold text-gray-600 dark:text-gray-300 truncate">
        {label}
      </span>
      <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="w-8 text-xs font-bold text-right text-gray-700 dark:text-gray-200">
        {value}
      </span>
    </div>
  );
};
