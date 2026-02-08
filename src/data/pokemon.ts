export interface Pokemon {
  id: number;
  nameEn: string;
  nameAr: string;
  generation: number;
  type: string[];
  descEn: string;
  descAr: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    spAtk: number;
    spDef: number;
    speed: number;
  };
  height: number; // in meters
  weight: number; // in kg
  color: string; // Tailwind gradient
}

export const gen1Pokemon: Pokemon[] = [
  {
    id: 1,
    nameEn: 'Bulbasaur',
    nameAr: 'بولباسور',
    generation: 1,
    type: ['grass', 'poison'],
    descEn: 'A small quadruped Pokémon with a bulb on its back. When it grows, the bulb blooms into a pink flower.',
    descAr: 'بوكيمون رباعي الأرجل صغير مع بصلة على ظهره. عندما ينمو، تتفتح البصلة لتصبح زهرة وردية.',
    stats: { hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 },
    height: 0.7,
    weight: 6.9,
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 4,
    nameEn: 'Charmander',
    nameAr: 'تشاتمندر',
    generation: 1,
    type: ['fire'],
    descEn: 'A small reptilian Pokémon with a flame on its tail. The flame reflects its life force.',
    descAr: 'بوكيمون زاحف صغير مع لهب على ذيله. اللهب يعكس قوة حياته.',
    stats: { hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 },
    height: 0.6,
    weight: 8.5,
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 7,
    nameEn: 'Squirtle',
    nameAr: 'سكويرتل',
    generation: 1,
    type: ['water'],
    descEn: 'A small turtle Pokémon with a tough shell. It can hide inside and shoot water.',
    descAr: 'بوكيمون سلحفاة صغيرة مع قوقعة قاسية. يمكنه الاختباء بداخله وإطلاق الماء.',
    stats: { hp: 44, attack: 48, defense: 65, spAtk: 50, spDef: 64, speed: 43 },
    height: 0.5,
    weight: 9.0,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 25,
    nameEn: 'Pikachu',
    nameAr: 'بيكاتشو',
    generation: 1,
    type: ['electric'],
    descEn: 'The most famous electric-type Pokémon. It can store electricity in its cheeks and discharge it.',
    descAr: 'أشهر بوكيمون من نوع كهربائي. يمكنه تخزين الكهرباء في خده وتفريغها.',
    stats: { hp: 35, attack: 55, defense: 40, spAtk: 50, spDef: 50, speed: 90 },
    height: 0.4,
    weight: 6.0,
    color: 'from-yellow-300 to-yellow-500',
  },
  {
    id: 33,
    nameEn: 'Nidoran♀',
    nameAr: 'نيدوران♀',
    generation: 1,
    type: ['poison'],
    descEn: 'A small female Pokémon with venomous spikes. Its horn secretes poison.',
    descAr: 'بوكيمون أنثى صغير مع أشواك سامة. قرنها يفرز السم.',
    stats: { hp: 55, attack: 47, defense: 52, spAtk: 40, spDef: 40, speed: 41 },
    height: 0.4,
    weight: 7.0,
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 58,
    nameEn: 'Growlithe',
    nameAr: 'جراولث',
    generation: 1,
    type: ['fire'],
    descEn: 'A loyal canine Pokémon with a keen sense of smell. Used by many trainers as a guard dog.',
    descAr: 'بوكيمون كلبي وفي برائحة حادة. يستخدمه العديد من المدربين كحارس.',
    stats: { hp: 55, attack: 70, defense: 45, spAtk: 70, spDef: 50, speed: 60 },
    height: 0.7,
    weight: 19.0,
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 66,
    nameEn: 'Machop',
    nameAr: 'ماتشوب',
    generation: 1,
    type: ['fighting'],
    descEn: 'A fighting-type Pokémon with incredible strength. Its body is pure muscle.',
    descAr: 'بوكيمون من نوع القتالي بقوة لا تصدق. جسده عبارة عن عضل نقي.',
    stats: { hp: 70, attack: 80, defense: 50, spAtk: 35, spDef: 35, speed: 35 },
    height: 0.8,
    weight: 19.5,
    color: 'from-orange-600 to-yellow-600',
  },
  {
    id: 92,
    nameEn: 'Gastly',
    nameAr: 'جاستلي',
    generation: 1,
    type: ['ghost', 'poison'],
    descEn: 'A ghost-type Pokémon made of gas. It hides in shadows and drops room temperature.',
    descAr: 'بوكيمون شبحي مصنوع من الغاز. يختبئ في الظلال ويخفض درجة حرارة الغرفة.',
    stats: { hp: 30, attack: 35, defense: 30, spAtk: 100, spDef: 35, speed: 80 },
    height: 1.3,
    weight: 0.1,
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 109,
    nameEn: 'Koffing',
    nameAr: 'كوفينج',
    generation: 1,
    type: ['poison'],
    descEn: 'A round Pokémon that releases toxic gases. It floats in the air.',
    descAr: 'بوكيمون دائري يطلق غازات سامة. يطفو في الهواء.',
    stats: { hp: 40, attack: 65, defense: 95, spAtk: 60, spDef: 45, speed: 35 },
    height: 0.6,
    weight: 1.0,
    color: 'from-purple-500 to-gray-600',
  },
  {
    id: 133,
    nameEn: 'Eevee',
    nameAr: 'إيفي',
    generation: 1,
    type: ['normal'],
    descEn: 'A versatile Pokémon that can evolve into different forms depending on its environment.',
    descAr: 'بوكيمون متعدد الاستخدامات يمكن أن يتطور إلى أشكال مختلفة حسب البيئة.',
    stats: { hp: 55, attack: 55, defense: 50, spAtk: 45, spDef: 65, speed: 55 },
    height: 0.3,
    weight: 6.5,
    color: 'from-amber-200 to-amber-400',
  },
];
