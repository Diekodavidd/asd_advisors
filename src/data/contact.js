import {
  PiChatsCircleLight, PiPuzzlePieceLight, PiHandshakeLight,
  PiEnvelopeSimpleLight, PiPhoneLight, PiMapPinLight, PiClockLight,
} from 'react-icons/pi';
import hero from '../assets/images/contact/hero.png';
import side from '../assets/images/contact/side.png';
import city from '../assets/images/contact/city.png';
import map from '../assets/images/contact/map.png';
import faq from '../assets/images/contact/faq.png';
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
  { icon: PiMapPinLight, title: 'Office', text: CONTACT.location + '\n(Full address to be confirmed)', href: '#location' },
  { icon: PiClockLight, title: 'Working Hours', text: 'Monday \u2013 Friday\n9:00 AM \u2013 5:00 PM (WAT)', href: '#form' },
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

export const DIRECTIONS_URL = 'https://maps.google.com/?q=Lagos,Nigeria';

// Placeholder answers — replace with ASD's approved copy.
export const FAQS = [
  { q: 'What types of businesses do you work with?', a: 'We work with ambitious businesses of all sizes \u2014 from growing SMEs to established organisations \u2014 across sectors including financial services, technology, energy, manufacturing and the public sector.' },
  { q: 'How do I get started?', a: 'Send us a message using the form above or call our team. We\u2019ll arrange an initial conversation to understand your goals, then outline how we can help.' },
  { q: 'Are your services available internationally?', a: 'Yes. We\u2019re based in Lagos and support businesses across Nigeria and beyond, working both in person and remotely.' },
  { q: 'How long does an engagement typically take?', a: 'It depends on scope. Focused projects can take a few weeks, while broader transformation programmes run over several months. We agree a clear timeline up front.' },
];
