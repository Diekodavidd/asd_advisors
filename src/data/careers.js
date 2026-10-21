import {
  PiSealCheckLight, PiUsersThreeLight, PiPlantLight, PiIntersectLight,
  PiShieldCheckLight, PiStarFourLight, PiGearSixLight,
} from 'react-icons/pi';
const hero = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540283/hero_inmmc0.png';
const culture = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540289/culture_mwmoye.png';
const life1 = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540290/life-1_rfpwdr.png';
const life2 = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540287/life-2_djyevs.png';
const life3 = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540290/life-3_tf842g.png';
const cta = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540291/cta_x1d4or.png';

export const CAREERS_IMAGES = { hero, culture, life1, life2, life3, cta };

export const PERKS = [
  { icon: PiSealCheckLight, title: 'Purpose-Driven Work', text: 'Contribute to solutions that create real impact.' },
  { icon: PiUsersThreeLight, title: 'Collaborative Teams', text: 'Work with experienced professionals across industries.' },
  { icon: PiPlantLight, title: 'Continuous Growth', text: 'Access learning, mentorship and development opportunities.' },
  { icon: PiIntersectLight, title: 'Inclusive Environment', text: 'We value diverse perspectives and believe great ideas come from everywhere.' },
];

export const VALUES = [
  { icon: PiShieldCheckLight, title: 'Integrity', text: 'We do what is right, always.' },
  { icon: PiStarFourLight, title: 'Excellence', text: 'We strive for the highest standards.' },
  { icon: PiUsersThreeLight, title: 'Collaboration', text: 'We achieve more together.' },
  { icon: PiGearSixLight, title: 'Impact', text: 'We focus on meaningful, measurable outcomes.' },
];

// Replace with real roles (or fetch from your ATS).
export const ROLES = [
  { id: 'strategy-analyst', tag: 'Strategy', title: 'Strategy Analyst', location: 'Lagos, Nigeria', type: 'Full-time' },
  { id: 'bd-associate', tag: 'Business Development', title: 'Business Development Associate', location: 'Lagos, Nigeria', type: 'Full-time' },
  { id: 'ops-associate', tag: 'Operations', title: 'Operations Support Associate', location: 'Lagos, Nigeria', type: 'Full-time' },
];
