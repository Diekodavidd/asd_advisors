import {
  PiSealCheckLight, PiUsersThreeLight, PiPlantLight, PiIntersectLight,
  PiShieldCheckLight, PiStarFourLight, PiGearSixLight,
} from 'react-icons/pi';
import hero from '../assets/images/careers/hero.png';
import culture from '../assets/images/careers/culture.png';
import life1 from '../assets/images/careers/life-1.png';
import life2 from '../assets/images/careers/life-2.png';
import life3 from '../assets/images/careers/life-3.png';
import cta from '../assets/images/careers/cta.png';

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
