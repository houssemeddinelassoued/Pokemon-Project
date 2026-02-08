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
    id: 151,
    nameEn: 'Mew',
    nameAr: 'ميو',
    generation: 1,
    type: ['psychic'],
    descEn: 'It is said to possess the genetic makeup of all Pokémon. It can render itself invisible, so it rarely finds itself noticed.',
    descAr: 'يُقال إنه يمتلك التركيب الجيني لكل البوكيمونات. يمكنه جعل نفسه غير مرئي، لذلك نادراً ما يلاحظه الناس.',
    stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 },
    height: 0.4,
    weight: 4.0,
    color: 'from-pink-400 to-rose-400',
  },
  {
    id: 251,
    nameEn: 'Celebi',
    nameAr: 'سيلابي',
    generation: 1,
    type: ['psychic', 'grass'],
    descEn: 'A Pokémon that came from the future. As long as Celebi appears, it is believed that a bright future awaits us.',
    descAr: 'بوكيمون جاء من المستقبل. طالما يظهر سيلابي، يُعتقد أن مستقبلًا مشرقًا ينتظرنا.',
    stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 },
    height: 0.6,
    weight: 5.0,
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 385,
    nameEn: 'Jirachi',
    nameAr: 'جيراشي',
    generation: 1,
    type: ['steel', 'psychic'],
    descEn: 'A legend says that any wish written on notes attached to its head when it awakens come true.',
    descAr: 'أسطورة تقول إنه يحقق أي أمنية مكتوبة على الملاحظات المرفقة برأسه عندما يستيقظ.',
    stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 },
    height: 0.3,
    weight: 1.1,
    color: 'from-yellow-300 to-amber-400',
  },
  {
    id: 386,
    nameEn: 'Deoxys',
    nameAr: 'ديوكسيس',
    generation: 1,
    type: ['psychic'],
    descEn: 'A space virus exposed to laser beams and transformed into a Pokémon. It has multiple forms (attack, defense, speed).',
    descAr: 'فيروس فضائي تعرض لأشعة الليزر وتحور ليصبح بوكيمون. يمتلك أشكالاً متعددة (هجوم، دفاع، سرعة).',
    stats: { hp: 50, attack: 150, defense: 50, spAtk: 150, spDef: 50, speed: 150 },
    height: 1.7,
    weight: 60.8,
    color: 'from-orange-500 to-red-600',
  },
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
];
