import {
  PiChartBarLight, PiUsersThreeLight, PiBriefcaseLight, PiArrowRightLight,
  PiCompassLight, PiBuildingsLight, PiGearSixLight, PiCoinsLight,
  PiChartLineUpLight, PiSealCheckLight, PiShieldCheckLight, PiCheck,
} from 'react-icons/pi';
import hero from '../assets/images/strategy/hero.png';
import challenges from '../assets/images/strategy/challenges.png';
import caseImg from '../assets/images/strategy/case.png';
import r1 from '../assets/images/strategy/related-1.png';
import r2 from '../assets/images/strategy/related-2.png';
import r3 from '../assets/images/strategy/related-3.png';
import altHero from '../assets/images/strategy-alt/hero.png';
import altOverview from '../assets/images/strategy-alt/overview.png';
import altApproach from '../assets/images/strategy-alt/approach.png';
import ar1 from '../assets/images/strategy-alt/related-1.png';
import ar2 from '../assets/images/strategy-alt/related-2.png';
import ar3 from '../assets/images/strategy-alt/related-3.png';

export const STRATEGY_IMAGES = { hero, challenges, case: caseImg };
export const STRATEGY_ALT_IMAGES = { hero: altHero, overview: altOverview, approach: altApproach };

export const STRATEGY_CRUMBS = [{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Business Growth Strategy' }];

export const PROCESS = [
  { n: '01', title: 'Discover', text: 'Understand your business, market and growth ambitions.' },
  { n: '02', title: 'Analyse', text: 'Identify opportunities, challenges and key growth drivers.' },
  { n: '03', title: 'Strategise', text: 'Develop tailored strategies with measurable goals.' },
  { n: '04', title: 'Support', text: 'Work with you through implementation to ensure lasting impact.' },
];

/* --- main version --- */
export const RAIL_SECTIONS = [
  { id: 'overview', n: '01', label: 'Overview' },
  { id: 'approach', n: '02', label: 'Approach' },
  { id: 'outcomes', n: '03', label: 'Outcomes' },
  { id: 'case', n: '04', label: 'Case Study' },
];

export const OVERVIEW = [
  { icon: PiChartBarLight, title: 'Market\nAnalysis', text: 'Identify new opportunities and growth drivers.' },
  { icon: PiUsersThreeLight, title: 'Strategic\nPlanning', text: 'Develop tailored strategies for measurable results.' },
  { icon: PiBriefcaseLight, title: 'Implementation\nSupport', text: 'Turn strategy into action with expert guidance.' },
  { icon: PiArrowRightLight, title: 'Sustainable\nGrowth', text: 'Build long-term value and resilience.' },
];

export const CHALLENGES = [
  { icon: PiCompassLight, title: 'Unclear growth direction' },
  { icon: PiChartBarLight, title: 'Increasing competition' },
  { icon: PiBuildingsLight, title: 'Limited market expansion opportunities' },
  { icon: PiGearSixLight, title: 'Operational inefficiencies' },
  { icon: PiCoinsLight, title: 'Resource constraints' },
];

export const OUTCOMES = [
  { icon: PiChartLineUpLight, title: 'Increased\nmarket share' },
  { icon: PiGearSixLight, title: 'Improved\noperational efficiency' },
  { icon: PiSealCheckLight, title: 'Stronger brand\npositioning' },
  { icon: PiCoinsLight, title: 'New revenue\nstreams' },
  { icon: PiBuildingsLight, title: 'Long-term\nbusiness resilience' },
];

export const KEY_RESULTS = [
  { icon: PiCheck, text: '3x market opportunities' },
  { icon: PiGearSixLight, text: 'Improved operational efficiency' },
  { icon: PiCheck, text: 'Stronger brand visibility' },
  { icon: PiCoinsLight, text: 'Sustainable revenue growth' },
];

export const RELATED = [
  { title: 'Market\nExpansion', img: r1, to: '/services' },
  { title: 'Strategic\nPartnerships', img: r2, to: '/services' },
  { title: 'Operational\nExcellence', img: r3, to: '/services' },
];

/* --- alternative version --- */
export const ALT_RAIL = [
  { id: 'overview', n: '01', label: 'Strategy' },
  { id: 'approach', n: '02', label: 'Execution' },
  { id: 'impact', n: '03', label: 'Growth' },
];

export const ALT_BADGES = [
  { icon: PiChartBarLight, label: 'Data-driven\nstrategies' },
  { icon: PiUsersThreeLight, label: 'Industry\nexpertise' },
  { icon: PiShieldCheckLight, label: 'Practical and\nmeasurable outcomes' },
];

export const ALT_CHALLENGES = [
  { icon: PiCompassLight, title: 'Unclear growth\ndirection', text: 'Difficulty identifying the right markets, products or opportunities.' },
  { icon: PiChartBarLight, title: 'Market\nsaturation', text: 'Increasing competition and limited differentiation in the market.' },
  { icon: PiGearSixLight, title: 'Operational\ninefficiencies', text: 'Processes and structures that hinder scalable growth.' },
  { icon: PiUsersThreeLight, title: 'Limited\nresources', text: 'Constraints in capital, people or technology to execute growth plans.' },
];

export const ALT_STATS = [
  { value: 3, suffix: 'x', label: 'Average growth', sub: 'in market opportunities' },
  { value: 40, suffix: '%+', label: 'Operational efficiency', sub: 'improvements' },
  { word: 'Sustainable', label: 'Long-term value', sub: 'creation' },
];

export const ALT_RELATED = [
  { title: 'Business Expansion', img: ar1, to: '/services' },
  { title: 'Sales\nStrategy', img: ar2, to: '/services' },
  { title: 'Strategic\nPartnerships', img: ar3, to: '/services' },
];
