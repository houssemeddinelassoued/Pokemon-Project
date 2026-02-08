import { useLanguage, Language } from '@/i18n';
import { Globe } from 'lucide-react';

export const LanguageSwitch = () => {
  const { language, setLanguage, t, dir } = useLanguage();

  return (
    <div className={`flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
      <Globe size={18} className="text-blue-500" />
      <div className="flex gap-2 bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
        {(['en', 'ar'] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
              language === lang
                ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};
