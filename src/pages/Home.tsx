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
      <header className="max-w-6xl mx-auto mb-8">
        <div className={`flex items-center justify-between mb-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <div>
            <h1 className="text-3xl md:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {t('common.title')}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{t('common.subtitle')}</p>
          </div>
          <LanguageSwitch />
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          {/* Pokemon Selection Panel */}
          <div className={`lg:col-span-4 flex flex-col gap-4 ${dir === 'rtl' ? 'order-2' : ''}`}>
            <h2 className={`text-xl font-bold mb-2 flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <Activity className="w-5 h-5 text-blue-500" />
              {t('common.selectPokemon')}
            </h2>

            <div className="space-y-3 max-h-[600px] overflow-y-auto">
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
                  ? 'اختر أي بوكيمون من الجيل الأول لمشاهدة تفاصيله الكاملة وإحصائياته القتالية. يمكنك المقارنة بين أنواع مختلفة ومعرفة نقاط القوة والضعف لكل واحد.'
                  : 'Select any Generation 1 Pokémon to view its complete details and combat statistics. You can compare different types and learn the strengths and weaknesses of each.'}
              </p>
            </div>
          </div>

          {/* Main Detail Card */}
          <div className={`lg:col-span-8 ${dir === 'rtl' ? 'order-1' : ''}`}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 relative">
              {/* Decorative Background */}
              <div className={`absolute top-0 inset-x-0 h-48 bg-gradient-to-b ${currentPokemon.color} opacity-20`}></div>

              <div className="relative p-6 md:p-8">
                {/* Header Section */}
                <div
                  className={`flex flex-col ${dir === 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center ${dir === 'rtl' ? 'md:items-start' : 'md:items-start'} justify-between gap-6 mb-8`}
                >
                  {/* Pokemon Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-white/0 via-white/50 to-white/0 dark:via-white/10 blur-xl rounded-full"></div>
                    <img
                      key={currentPokemon.id}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.id}.png`}
                      alt={currentPokemon.nameEn}
                      className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl animate-float"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.id}.png`;
                      }}
                    />
                  </div>

                  {/* Info Section */}
                  <div className={`flex-1 ${dir === 'rtl' ? 'text-right md:text-right' : 'text-center md:text-left'}`}>
                    <div
                      className={`flex items-center justify-center ${dir === 'rtl' ? 'md:justify-end flex-row-reverse' : 'md:justify-start'} gap-3 mb-2`}
                    >
                      <h2 className="text-4xl font-black text-gray-800 dark:text-white">{name}</h2>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-mono text-gray-500">
                        #{currentPokemon.id}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl mb-6">
                      <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                        <span className="block text-gray-400 text-xs">{t('common.height')}</span>
                        <span className="font-bold">{currentPokemon.height} m</span>
                      </div>
                      <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                        <span className="block text-gray-400 text-xs">{t('common.weight')}</span>
                        <span className="font-bold">{currentPokemon.weight} kg</span>
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-2 justify-center ${dir === 'rtl' ? 'md:justify-end' : 'md:justify-start'}`}>
                      {currentPokemon.type.map((t) => (
                        <TypeBadge key={t} type={t} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className={`flex gap-4 border-b border-gray-200 dark:border-gray-700 mb-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`pb-3 text-sm font-bold transition-colors relative flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''} ${
                      activeTab === 'stats'
                        ? 'text-blue-500'
                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                    }`}
                  >
                    <Activity size={16} />
                    {t('common.stats')}
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
                    {t('common.info')}
                    {activeTab === 'info' && <span className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500"></span>}
                  </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[250px]">
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
                      <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border-r-4 dark:border-r-blue-500 border-blue-500">
                        <h4 className="font-bold mb-2 text-blue-700 dark:text-blue-300">{t('common.pokedexDesc')}</h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{desc}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                          <h4
                            className={`font-bold text-sm text-gray-500 mb-2 flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                          >
                            <Shield className="w-4 h-4" />
                            {t('common.strengths')}
                          </h4>
                          <ul className={`text-sm list-disc space-y-1 text-gray-700 dark:text-gray-300 ${dir === 'rtl' ? 'list-position-inside text-right' : 'list-inside'}`}>
                            <li>
                              {currentPokemon.stats.attack >= 70
                                ? language === 'ar'
                                  ? 'قوة هجوم عالية جداً'
                                  : 'Very high attack power'
                                : language === 'ar'
                                  ? 'يتمتع بقدرات متوازنة'
                                  : 'Balanced abilities'}
                            </li>
                            {currentPokemon.stats.speed >= 70 && (
                              <li>
                                {language === 'ar'
                                  ? 'سرعة ممتازة تسبق معظم الخصوم'
                                  : 'Excellent speed beats most opponents'}
                              </li>
                            )}
                            {currentPokemon.stats.hp >= 70 && (
                              <li>
                                {language === 'ar'
                                  ? 'قدرة تحمل عالية في المعارك الطويلة'
                                  : 'High endurance in long battles'}
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                          <h4
                            className={`font-bold text-sm text-gray-500 mb-2 flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                          >
                            <Sword className="w-4 h-4" />
                            {t('common.fightStyle')}
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
