import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PiEnvelopeSimple,PiTiktokLogoFill, PiPhone, PiMapPin,PiFacebookLogoFill, PiInstagramLogoFill, PiXLogoFill, PiYoutubeLogoFill,
} from 'react-icons/pi';
import Logo from '../ui/Logo';
import NavItem from '../ui/NavItem';
import Reveal from '../motion/Reveal';
import { CONTACT, NAV_LINKS } from '../../data/content';
import './Footer.css';

const SOCIAL = [
  {
    icon: PiFacebookLogoFill,
    label: 'Facebook',
    href: 'https://www.facebook.com/asdadvisorsltd',
  },
  {
    icon: PiInstagramLogoFill,
    label: 'Instagram',
    href: 'https://www.instagram.com/asdadvisorsltd',
  },
  {
    icon: PiTiktokLogoFill,
    label: 'TikTok',
    href: 'https://www.tiktok.com/@asdadvisorsltd',
  },
];

/** variant="compact" (home) or "full" (contact details + legal bar, used on About). */
export default function Footer({ variant = 'compact' }) {
  const full = variant === 'full';
  return (
    <footer className={'footer' + (full ? ' footer--full' : '')}>
      <div className="footer__main">
        <Reveal dir="fade"><Logo /></Reveal>
        <Reveal dir="fade" delay={0.12} as="nav" className="footer__links" aria-label="Footer">
          {NAV_LINKS.map((l) => <NavItem key={l.label} to={l.to} className="footer__link">{l.label}</NavItem>)}
        </Reveal>
        {full && (
          <Reveal dir="fade" delay={0.24} className="footer__contact">
            <a href={'mailto:' + CONTACT.email}><PiEnvelopeSimple />{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}><PiPhone />{CONTACT.phone}</a>
            <span><PiMapPin />{CONTACT.location}</span>
          </Reveal>
        )}
        <Reveal dir="fade" delay={0.36} className="footer__social">
          {SOCIAL.map(({ icon: Icon, label, href }) => (
            <motion.a key={label} href={href} className="social" aria-label={label} whileHover={{ y: -4 }} whileTap={{ scale: 0.92 }}>
              <Icon />
            </motion.a>
          ))}
        </Reveal>
      </div>
      {full && (
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} ASD Advisors Ltd. All rights reserved.</span>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      )}
    </footer>
  );
}
