import hero from '../assets/images/insights/hero.png';
import featured from '../assets/images/insights/featured.png';
import cta from '../assets/images/insights/cta.png';
import a1 from '../assets/images/insights/article-01.png';
import a2 from '../assets/images/insights/article-02.png';
import a3 from '../assets/images/insights/article-03.png';
import a4 from '../assets/images/insights/article-04.png';
import a5 from '../assets/images/insights/article-05.png';

// Every card links to the sample article for now — give each its own page as you publish them.
export const ARTICLE_PATH = '/insights/unlocking-sustainable-growth';

export const INSIGHTS_IMAGES = { hero, featured, cta };

export const CATEGORIES = ['All Insights', 'Business Growth', 'Leadership', 'Strategy', 'Market Trends', 'Operational Excellence', 'Sustainability'];

export const ARTICLES = [
  { id: 1, category: 'Business Growth', date: 'Oct 12, 2024', title: '5 Strategies for Sustainable Business Growth in 2025', img: a1, excerpt: 'Discover practical strategies that help businesses scale sustainably, adapt to market changes, and create long-term value.' },
  { id: 2, category: 'Leadership', date: 'Sep 28, 2024', title: 'Building High-Performing Teams in Uncertain Times', img: a2, excerpt: 'How leaders can build resilient, motivated teams that deliver through change.' },
  { id: 3, category: 'Operational Excellence', date: 'Sep 15, 2024', title: 'How to Improve Business Processes for Long-Term Success', img: a3, excerpt: 'Practical steps to streamline operations and build scalable processes.' },
  { id: 4, category: 'Market Trends', date: 'Aug 30, 2024', title: 'Key Market Trends Shaping Business in Africa', img: a4, excerpt: 'The economic, technological and consumer shifts redefining opportunity across the continent.' },
  { id: 5, category: 'Sustainability', date: 'Aug 22, 2024', title: 'The Business Case for Sustainable Growth', img: a5, excerpt: 'Why sustainability and profitability increasingly go hand in hand.' },
  { id: 6, category: 'Strategy', date: '', title: 'Navigating Economic Shifts: What Business Leaders Need to Know', img: featured, excerpt: 'Insights, practical steps and expert perspectives to help you stay ahead in a changing landscape.' },
];

/** The article promoted in the "Featured Insight" band. */
export const FEATURED_ARTICLE = ARTICLES[5];
