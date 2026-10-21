import {
  PiChatsCircleLight, PiPuzzlePieceLight, PiHandshakeLight,
  PiEnvelopeSimpleLight, PiPhoneLight, PiMapPinLight, PiClockLight,
} from 'react-icons/pi';
const hero = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792590180/hero_bfz17l.png';
const side = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792590184/side_d01ydt.png';
const city = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792590184/city_zc9pjv.png';
const map = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792590005/Enfield_Night_Map_Location_Pin_ncm8y9.png';
const faq = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792590184/faq_vrn1wg.png';
import { CONTACT } from './content';

export const CONTACT_IMAGES = { hero, side, city, map, faq };

export const HERO_BADGES = [
  { icon: PiChatsCircleLight, label: 'Strategic\nConversations' },
  { icon: PiPuzzlePieceLight, label: 'Tailored\nSolutions' },
  { icon: PiHandshakeLight, label: 'Long-Term\nPartnerships' },
];

export const CONTACT_INFO = [
  { icon: PiEnvelopeSimpleLight, title: 'Email', text: CONTACT.email, href: 'mailto:' + CONTACT.email },
  { icon: PiPhoneLight, title: 'Phone', text: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: PiMapPinLight, title: 'Office', text: CONTACT.location + '\n', href: '#location' },
  { icon: PiClockLight, title: 'Working Hours', text: 'Monday \u2013 Friday\n9:00 AM \u2013 5:00 PM (GMT)', href: '#form' },
];

export const FORM_FIELDS = [
  { name: 'firstName', placeholder: 'First Name *', type: 'text', required: true, autoComplete: 'given-name' },
  { name: 'lastName', placeholder: 'Last Name *', type: 'text', required: true, autoComplete: 'family-name' },
  { name: 'email', placeholder: 'Business Email *', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', placeholder: 'Phone Number', type: 'tel', autoComplete: 'tel' },
  { name: 'company', placeholder: 'Company Name', type: 'text', autoComplete: 'organization' },
];

export const HELP_OPTIONS = [
  'Business Growth Strategy',
  'Business Expansion',
  'Sales Strategy',
  'Operational Excellence',
  'Investment Advisory',
  'Something else',
];

export const DIRECTIONS_URL = 'https://maps.app.goo.gl/JZ44CRMumbdEhfzu9?g_st=ic';

// Placeholder answers — replace with ASD's approved copy.
export const FAQS = [
  { q: 'What types of businesses do you work with?', a: 'We work with ambitious businesses of all sizes \u2014 from growing SMEs to established organisations \u2014 across sectors including financial services, technology, energy, manufacturing and the public sector.' },
  { q: 'How do I get started?', a: 'Send us a message using the form above or call our team. We\u2019ll arrange an initial conversation to understand your goals, then outline how we can help.' },
  { q: 'Are your services available internationally?', a: 'Yes. We\u2019re based in Lagos and support businesses across Nigeria and beyond, working both in person and remotely.' },
  { q: 'How long does an engagement typically take?', a: 'It depends on scope. Focused projects can take a few weeks, while broader transformation programmes run over several months. We agree a clear timeline up front.' },
];
