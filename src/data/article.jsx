import {
  PiChartLineLight, PiUsersLight, PiCpuLight, PiUserFocusLight, PiScalesLight, PiLeafLight,
} from 'react-icons/pi';
const hero = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540411/hero_fof2fu.png';
const inline = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540431/inline_hx0qvz.png';
const quote = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540427/quote_etkmvo.png';
const cta = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540395/cta_r5hhda.png';
const r1 = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540414/related-1_xfcr7j.png';
const r2 = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540415/related-2_wfdzdb.png';
const r3 = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792540432/related-3_dtcivw.png';

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
