import React, { useState } from 'react';
import { Shield, Sword, Activity, Info } from 'lucide-react';
import { Pokemon, gen1Pokemon } from '@/data/pokemon';
import { StatBar } from '@/components/StatBar';
import { TypeBadge } from '@/components/TypeBadge';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { PokemonCard } from '@/components/PokemonCard';
import { useLanguage } from '@/i18n';

export const Home = () => {
  const [selectedId, setSelectedId] = useState<number>(gen1Pokemon[0].id);
  const [activeTab, setActiveTab] = useState<'stats' | 'info'>('stats');
  const { language, t, dir } = useLanguage();

  const currentPokemon = gen1Pokemon.find((p) => p.id === selectedId) || gen1Pokemon[0];

  const totalStats = Object.values(currentPokemon.stats).reduce((a, b) => a + b, 0);

  const name = language === 'ar' ? currentPokemon.nameAr : currentPokemon.nameEn;
  const desc = language === 'ar' ? currentPokemon.descAr : currentPokemon.descEn;

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-100 p-4 md:p-8 ${dir === 'rtl' ? 'rtl' : 'ltr'}`}
      dir={dir}
    >
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className={`flex items-center justify-between gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {t('common.title')}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">{t('common.subtitle')}</p>
          </div>
          <LanguageSwitch />
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}>
          {/* Pokemon List - Left/Right depending on RTL */}
          <div className={`lg:col-span-1 flex flex-col gap-4 ${dir === 'rtl' ? 'order-2' : ''}`}>
            <h2 className={`text-xl font-bold mb-2 flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <Activity className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span>{t('common.selectPokemon')}</span>
            </h2>

            <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
              {gen1Pokemon.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  isSelected={selectedId === pokemon.id}
                  onClick={() => setSelectedId(pokemon.id)}
                />
              ))}
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50">
              <h4 className="font-bold text-sm mb-2 text-blue-700 dark:text-blue-300">
                {t('common.quickNote')}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {language === 'ar'
                  ? 'اختر أي بوكيمون لمشاهدة تفاصيله الكاملة. يتضمن القائمة بوكيمونات أسطورية وجيل أول.'
                  : 'Select any Pokémon to view full details. List includes Legendary and Generation 1 Pokémon.'}
              </p>
            </div>
          </div>

          {/* Main Detail Card */}
          <div className={`lg:col-span-2 ${dir === 'rtl' ? 'order-1' : ''}`}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 relative">
              {/* Decorative Background */}
              <div className={`absolute top-0 inset-x-0 h-48 bg-gradient-to-b ${currentPokemon.color} opacity-20`}></div>

              <div className="relative p-6 md:p-8">
                {/* Header Section */}
                <div className={`flex flex-col ${dir === 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 mb-8`}>
                  {/* Pokemon Image */}
                  <div className="flex-shrink-0">
                    <div className="absolute -inset-4 bg-gradient-to-r from-white/0 via-white/50 to-white/0 dark:via-white/10 blur-xl rounded-full"></div>
                    <img
                      key={currentPokemon.id}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.id}.png`}
                      alt={currentPokemon.nameEn}
                      className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl animate-float relative z-10"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.id}.png`;
                      }}
                    />
                  </div>

                  {/* Info Section */}
                  <div className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-3 mb-3 ${dir === 'rtl' ? 'flex-row-reverse justify-end' : ''}`}>
                      <h2 className="text-4xl font-black text-gray-800 dark:text-white">{name}</h2>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-mono text-gray-500 flex-shrink-0">
                        #{currentPokemon.id}
                      </span>
                    </div>

                    <div className={`flex flex-wrap gap-2 mb-6 ${dir === 'rtl' ? 'justify-end' : ''}`}>
                      {currentPokemon.type.map((t) => (
                        <TypeBadge key={t} type={t} />
                      ))}
                    </div>

                    <div className={`grid grid-cols-2 gap-4 text-sm bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl ${dir === 'rtl' ? 'text-right' : ''}`}>
                      <div>
                        <span className="block text-gray-400 text-xs">{t('common.height')}</span>
                        <span className="font-bold">{currentPokemon.height} m</span>
                      </div>
                      <div>
                        <span className="block text-gray-400 text-xs">{t('common.weight')}</span>
                        <span className="font-bold">{currentPokemon.weight} kg</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className={`flex gap-6 border-b border-gray-200 dark:border-gray-700 mb-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`pb-3 text-sm font-bold transition-colors relative flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''} ${
                      activeTab === 'stats'
                        ? 'text-blue-500'
                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                    }`}
                  >
                    <Activity size={16} />
                    <span>{t('common.stats')}</span>
                    {activeTab === 'stats' && <span className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500"></span>}
                  </button>
                  <button
                    onClick={() => setActiveTab('info')}
                    className={`pb-3 text-sm font-bold transition-colors relative flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''} ${
                      activeTab === 'info'
                        ? 'text-blue-500'
                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                    }`}
                  >
                    <Info size={16} />
                    <span>{t('common.info')}</span>
                    {activeTab === 'info' && <span className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500"></span>}
                  </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[300px]">
                  {activeTab === 'stats' ? (
                    <div className="animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <StatBar stat="hp" value={currentPokemon.stats.hp} colorClass="bg-red-500" />
                        <StatBar stat="attack" value={currentPokemon.stats.attack} colorClass="bg-orange-500" />
                        <StatBar stat="defense" value={currentPokemon.stats.defense} colorClass="bg-yellow-500" />
                        <StatBar stat="speed" value={currentPokemon.stats.speed} colorClass="bg-teal-500" />
                        <StatBar stat="spAtk" value={currentPokemon.stats.spAtk} colorClass="bg-blue-500" />
                        <StatBar stat="spDef" value={currentPokemon.stats.spDef} colorClass="bg-green-500" />
                      </div>

                      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl flex justify-between items-center">
                        <span className="font-bold text-gray-500">{t('common.baseStatTotal')}</span>
                        <span className="text-2xl font-black text-gray-800 dark:text-white">{totalStats}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="animate-fadeIn space-y-4">
                      <div className={`bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border-l-4 dark:border-l-blue-500 border-blue-500 ${dir === 'rtl' ? 'border-l-0 border-r-4 dark:border-r-blue-500 border-r-blue-500' : ''}`}>
                        <h4 className={`font-bold mb-2 text-blue-700 dark:text-blue-300 ${dir === 'rtl' ? 'text-right' : ''}`}>
                          {t('common.pokedexDesc')}
                        </h4>
                        <p className={`text-gray-700 dark:text-gray-300 leading-relaxed ${dir === 'rtl' ? 'text-right' : ''}`}>{desc}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className={`p-4 rounded-xl border border-gray-200 dark:border-gray-700 ${dir === 'rtl' ? 'text-right' : ''}`}>
                          <h4 className={`font-bold text-sm text-gray-500 mb-2 flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse justify-end' : ''}`}>
                            <Shield className="w-4 h-4 flex-shrink-0" />
                            <span>{t('common.strengths')}</span>
                          </h4>
                          <ul className={`text-sm space-y-1 text-gray-700 dark:text-gray-300 ${dir === 'rtl' ? 'list-position-inside text-right' : 'list-disc list-inside'}`}>
                            <li>
                              {currentPokemon.stats.attack >= 70
                                ? language === 'ar'
                                  ? 'قوة هجوم عالية جداً'
                                  : 'Very high attack power'
                                : language === 'ar'
                                  ? 'قدرات متوازنة'
                                  : 'Balanced abilities'}
                            </li>
                            {currentPokemon.stats.speed >= 70 && (
                              <li>
                                {language === 'ar'
                                  ? 'سرعة ممتازة تسبق المعظم'
                                  : 'Excellent speed'}
                              </li>
                            )}
                            {currentPokemon.stats.hp >= 70 && (
                              <li>
                                {language === 'ar'
                                  ? 'قدرة تحمل عالية'
                                  : 'High endurance'}
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className={`p-4 rounded-xl border border-gray-200 dark:border-gray-700 ${dir === 'rtl' ? 'text-right' : ''}`}>
                          <h4 className={`font-bold text-sm text-gray-500 mb-2 flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse justify-end' : ''}`}>
                            <Sword className="w-4 h-4 flex-shrink-0" />
                            <span>{t('common.fightStyle')}</span>
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {currentPokemon.stats.attack > currentPokemon.stats.defense
                              ? language === 'ar'
                                ? 'هجومي (Offensive)'
                                : 'Offensive'
                              : language === 'ar'
                                ? 'دفاعي (Defensive)'
                                : 'Defensive'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
