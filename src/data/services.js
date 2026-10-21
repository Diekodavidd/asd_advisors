import { PiLightbulbLight, PiSlidersHorizontalLight, PiUsersThreeLight, PiTargetLight } from 'react-icons/pi';
const hero = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538815/hero_s5r7jr.png';
const approach = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538817/approach_hkjxxc.png';
const cta = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538786/cta_vl0b3o.png';

const SERVICE_CARD_IMAGES = [
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538815/card-01_k1lzjn.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538825/card-02_vx4lk4.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538817/card-03_t77qgu.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538821/card-04_posjtv.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538785/card-05_ugyuci.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538807/card-06_rkrgxw.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538800/card-07_xs2l0h.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538779/card-08_mjdcbd.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538800/card-09_fke1lw.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538824/card-10_xwbdmc.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538790/card-11_mwxlur.png',
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538817/card-12_tpt4v4.png',
];

const card = (n) => SERVICE_CARD_IMAGES[n - 1];

export const SERVICES_IMAGES = { hero, approach, cta };

export const SERVICES_QUOTE = ['\u201COur services', 'are designed', 'to help you see', 'what\u2019s next,', 'make smarter', 'decisions and', 'turn ambition', 'into lasting', 'progress.\u201D'];

export const SERVICE_LIST = [
  ['Business\nGrowth Strategy', 'Develop clear, actionable strategies to accelerate growth and increase market share.'],
  ['Business\nExpansion', 'Identify and evaluate new markets, opportunities and business models for sustainable expansion.'],
  ['Sales\nStrategy', 'Build high-performing sales strategies, processes and teams to drive revenue growth.'],
  ['Customer Growth\n& Retention', 'Create customer-centric strategies to attract, retain and maximize lifetime value.'],
  ['Strategic\nPartnerships', 'Identify, structure and manage strategic partnerships that create mutual value and open new opportunities.'],
  ['Leadership &\nManagement Support', 'Equip leaders and management teams with the tools, frameworks and guidance to drive lasting performance.'],
  ['Operational\nExcellence', 'Streamline processes, improve efficiency and build scalable operations.'],
  ['Organisational\nTransformation', 'Support business and organisational change to enhance agility, resilience and long-term competitiveness.'],
  ['Market & Industry\nIntelligence', 'Provide data-driven insights and analysis to inform better decisions and uncover opportunities.'],
  ['Investment\nAdvisory', 'Support capital strategy, investor readiness and opportunity evaluation to unlock growth.'],
  ['Sustainability &\nESG Advisory', 'Help businesses integrate sustainable practices and ESG considerations for long-term value creation.'],
  ['Special Advisory\nEngagements', 'Tailored advisory support for unique business challenges, opportunities and high-priority initiatives.'],
].map(([title, text], i) => ({ n: String(i + 1).padStart(2, '0'), title, text, img: card(i + 1), to: i === 0 ? '/services/business-growth-strategy' : '/contact' }));

export const WHY_US = [
  { icon: PiLightbulbLight, title: 'Insight-Led', text: 'We combine deep industry knowledge with practical experience.' },
  { icon: PiSlidersHorizontalLight, title: 'Tailored Solutions', text: 'No one-size-fits-all. Every solution is designed around your unique goals.' },
  { icon: PiUsersThreeLight, title: 'People-Focused', text: 'We work with your team, not just for you, to build lasting capability.' },
  { icon: PiTargetLight, title: 'Measurable Impact', text: 'Our focus is on real outcomes that drive long-term value.' },
];
