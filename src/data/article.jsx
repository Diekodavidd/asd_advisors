import {
  PiChartLineLight, PiUsersLight, PiCpuLight, PiUserFocusLight, PiScalesLight, PiLeafLight,
} from 'react-icons/pi';
import hero from '../assets/images/article/hero.png';
import inline from '../assets/images/article/inline.png';
import quote from '../assets/images/article/quote.png';
import cta from '../assets/images/article/cta.png';
import r1 from '../assets/images/article/related-1.png';
import r2 from '../assets/images/article/related-2.png';
import r3 from '../assets/images/article/related-3.png';

export const ARTICLE = {
  slug: 'unlocking-sustainable-growth',
  category: 'Strategy',
  lines: ['Unlocking Sustainable', 'Growth in a Changing', <span className="accent" key="g">Global Economy.</span>],
  dek: 'How forward-thinking businesses can navigate uncertainty, seize new opportunities and build long-term resilience in an evolving global landscape.',
  author: { name: 'Tolu Adebayo', role: 'Senior Strategy Consultant' },
  date: 'Oct 12, 2024',
  readTime: '12 min read',
  images: { hero, inline, quote, cta },
};

export const ARTICLE_TOC = [
  { id: 'landscape', label: 'The current landscape' },
  { id: 'challenges', label: 'Key challenges' },
  { id: 'opportunities', label: 'Opportunities for growth' },
  { id: 'strategies', label: 'Practical strategies' },
  { id: 'ahead', label: 'Looking ahead' },
];

export const ARTICLE_CHALLENGES = [
  { icon: PiChartLineLight, text: 'Market volatility\nand economic shifts' },
  { icon: PiUsersLight, text: 'Evolving customer\nexpectations' },
  { icon: PiCpuLight, text: 'Technological disruption\nand digital transformation' },
  { icon: PiUserFocusLight, text: 'Talent acquisition\nand retention' },
  { icon: PiScalesLight, text: 'Regulatory and\ncompliance requirements' },
  { icon: PiLeafLight, text: 'Sustainability and\nESG priorities' },
];

export const RELATED_INSIGHTS = [
  { category: 'Leadership', title: 'The Role of Leadership\nin Driving Transformation', date: 'Sep 28, 2024', readTime: '8 min read', img: r1 },
  { category: 'Sustainability', title: 'Why ESG is a Business\nImperative, Not a Choice', date: 'Sep 10, 2024', readTime: '10 min read', img: r2 },
  { category: 'Strategy', title: 'Five Strategic Priorities\nfor 2025 and Beyond', date: 'Aug 22, 2024', readTime: '9 min read', img: r3 },
];
