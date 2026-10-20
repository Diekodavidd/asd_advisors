import { PiChartBarLight, PiLightbulbLight, PiUsersThreeLight, PiTargetLight } from 'react-icons/pi';
import hero from '../assets/images/industries/hero.png';
import cta from '../assets/images/industries/cta.png';

const cards = import.meta.glob('../assets/images/industries/sector-*.png', { eager: true, import: 'default' });
const card = (n) => cards['../assets/images/industries/sector-' + String(n).padStart(2, '0') + '.png'];

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
