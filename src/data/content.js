import {
  PiChartBarLight, PiSquaresFourLight, PiTargetLight, PiUsersThreeLight,
  PiEyeLight, PiDiamondLight,
} from 'react-icons/pi';

// import heroImg from '../assets/images/hero.png';
// import aboutImg from '../assets/images/about.png';
// import approachImg from '../assets/images/approach.png';
// import ctaImg from '../assets/images/cta.png';
// import corridorImg from '../assets/images/insight-corridor.png';
// import boardroomImg from '../assets/images/insight-boardroom.png';
// import facadeImg from '../assets/images/insight-facade.png';

// import aboutHeroImg from '../assets/images/about/hero.png';
// import aboutStoryImg from '../assets/images/about/story.png';
// import aboutApproachImg from '../assets/images/about/approach.png';
// import aboutLeadershipImg from '../assets/images/about/leadership.png';
// import aboutGlobeImg from '../assets/images/about/globe.png';
// import aboutCtaImg from '../assets/images/about/cta.png';
const heroImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538119/hero_ewobqd.png';
const aboutImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538166/about_lww8oa.png';
const approachImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538178/approach_nrjzur.png';
const ctaImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538109/cta_lbzdas.png';
const corridorImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538114/insight-corridor_z9b4uh.png';
const boardroomImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538119/insight-boardroom_cc7ddf.png';
const facadeImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538123/insight-facade_yk2pc3.png';

const aboutHeroImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538384/hero_llsvz0.png';
const aboutStoryImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538377/story_rgkd7q.png';
const aboutApproachImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538382/approach_t7tqkb.png';
const aboutLeadershipImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538373/leadership_d9u593.png';
const aboutGlobeImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538386/globe_rxufcq.png';
const aboutCtaImg = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538369/cta_vqc12s.png';

/* ---------- Shared ---------- */

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Insights', to: '/insights' },
  { label: 'Industries', to: '/industries' },
  { label: 'Careers', to: '/careers' },
];

export const CONTACT = {
  email: 'asdadvisors@outlook.com',
  phone: '078 5842 4091',
  phoneHref: 'tel:078 5842 4091',
  location: 'The Wenta Business Centre, Electric Avenue,Enfield, England EN3 7XU',
};

/* ---------- Home ---------- */

export const IMAGES = { hero: heroImg, about: aboutImg, approach: approachImg, cta: ctaImg };

export const HERO_STEPS = ['Strategy', 'Growth', 'Opportunity'];

export const STATS = [
  { value: 100, label: 'Projects Supported' },
  { value: 50, label: 'Happy Clients' },
  { value: 5, label: 'Sectors of Impact' },
];

export const ABOUT_TAGS = ['People', 'Ideas', 'Capital', 'Opportunity'];

export const SERVICES = [
  { icon: PiChartBarLight, title: 'Business\nGrowth Strategy', href: '#services' },
  { icon: PiSquaresFourLight, title: 'Business\nExpansion', href: '#services' },
  { icon: PiTargetLight, title: 'Sales\nStrategy', href: '#services' },
  { icon: PiUsersThreeLight, title: 'Customer Growth\n& Retention', href: '#services' },
];

export const APPROACH_LABELS = ['Insight', 'Strategy', 'Implementation', 'Growth'];

export const APPROACH_STEPS = [
  { n: '01', title: 'Understand', text: 'We listen, learn and analyse your unique context.' },
  { n: '02', title: 'Strategise', text: 'We develop tailored solutions with measurable outcomes.' },
  { n: '03', title: 'Implement', text: 'We work with you to turn plans into action.' },
  { n: '04', title: 'Grow', text: 'We support you for lasting impact.' },
];

export const INSIGHTS = [
  { img: corridorImg, category: 'Business Growth', title: '5 Strategies for Sustainable Business Growth in 2025', href: '#insights' },
  { img: boardroomImg, category: 'Leadership', title: 'Building High-Performing Teams', href: '#insights' },
  { img: facadeImg, category: 'Operational Excellence', title: 'How to Improve Business Processes for Long-Term Success', href: '#insights' },
  { img: heroImg, category: 'Capital', title: 'Preparing Your Business for Investment', href: '#insights' },
];

export const CTA_LABELS = ['Strategy', 'Growth', 'Opportunity'];

/* ---------- About page ---------- */

export const ABOUT_IMAGES = {
  hero: aboutHeroImg,
  story: aboutStoryImg,
  approach: aboutApproachImg,
  leadership: aboutLeadershipImg,
  globe: aboutGlobeImg,
  cta: aboutCtaImg,
};

export const ABOUT_PILLARS = ['People', 'Ideas', 'Capital', 'Opportunity'];

export const STORY_QUOTE = [
  '\u201CA more',
  'sustainable',
  'and prosperous',
  'future for',
  'businesses',
  'and the people',
  'they empower.\u201D',
];

export const PURPOSE = [
  { icon: PiTargetLight, title: 'Our Mission', text: 'To provide practical, insightful and tailored advisory services that help businesses grow and create long-term value.' },
  { icon: PiEyeLight, title: 'Our Vision', text: 'To be a trusted advisory partner, known for clarity, integrity and impact across the markets we serve.' },
  { icon: PiDiamondLight, title: 'Our Values', text: 'Integrity, excellence, collaboration and a deep commitment to the success of our clients.' },
];

export const IMPACT_STATS = [
  { value: 100, label: 'Projects Supported' },
  { value: 50, label: 'Happy Clients' },
  { value: 5, label: 'Sectors of Impact' },
  { value: 10, label: 'Years of Advisory Experience' },
];
