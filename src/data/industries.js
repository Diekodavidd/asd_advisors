import { PiChartBarLight, PiLightbulbLight, PiUsersThreeLight, PiTargetLight } from 'react-icons/pi';
const hero = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539952/hero_hdurof.png';
const cta = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539909/cta_livrqv.png';

const INDUSTRIES_CARD_IMAGES = [
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539946/sector-01_r21trn.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539954/sector-02_n9uapt.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539969/sector-03_znp9t6.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539960/sector-04_bb2efu.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539956/sector-05_bpj6ae.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539954/sector-06_zpnkib.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539940/sector-07_hnuwsr.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539942/sector-08_uxrifl.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792539933/sector-09_wtulsy.png',
];

const card = (n) => INDUSTRIES_CARD_IMAGES[n - 1];


export const INDUSTRIES_IMAGES = { hero, cta };

export const SECTORS = [
  ['Financial Services', 'Supporting growth, innovation and resilience in a dynamic financial landscape.'],
  ['Technology & Innovation', 'Helping tech-driven businesses scale, attract capital and create lasting impact.'],
  ['Energy & Natural Resources', 'Advising on strategy, operational efficiency and sustainable growth in evolving markets.'],
  ['Healthcare & Life Sciences', 'Supporting better outcomes through strategic growth, partnerships and innovation.'],
  ['Consumer & Retail', 'Helping consumer businesses adapt to changing markets and deliver exceptional value.'],
  ['Manufacturing & Industrials', 'Improving efficiency, unlocking growth and supporting operational transformation.'],
  ['Real Estate & Construction', 'Advising on investment, development and sustainable growth in a dynamic built environment.'],
  ['Education', 'Supporting educational institutions to expand access, improve outcomes and build sustainable models.'],
  ['Public Sector & Development', 'Partnering for greater impact through strategic advisory and capacity building.'],
].map(([title, text], i) => ({ n: String(i + 1).padStart(2, '0'), title, text, img: card(i + 1) }));

export const ADVANTAGES = [
  { icon: PiChartBarLight, title: 'Deep Sector Knowledge', text: 'Practical insights from real industry experience.' },
  { icon: PiLightbulbLight, title: 'Tailored Solutions', text: 'Strategies designed for your industry\u2019s unique challenges.' },
  { icon: PiUsersThreeLight, title: 'Cross-Industry Perspective', text: 'Broader insights to identify new opportunities.' },
  { icon: PiTargetLight, title: 'Measurable Impact', text: 'Solutions focused on tangible, long-term value.' },
];
